/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { makeAlbumPagePath, makeVideoPagePath } = require(`./src/utils`)

// Create a page for each markdown file for photos
exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allSanityGallery(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            year: date(formatString: "YYYY")
          }
        }
      }
      allSanityVideo {
        edges {
          node {
            id
            title
            youtubeId
          }
        }
      }
    }
  `)

  // In case of errors, stop here
  if (result.errors) {
    reporter.panicOnBuild(`🚨 Error in query for pages 🚨`)
    return
  }

  // Create gallery pages
  result.data.allSanityGallery.edges.forEach(({ node }) => {
    const urlPath = makeAlbumPagePath(node.title, node.year)
    actions.createPage({
      path: urlPath,
      component: path.resolve(`./src/templates/gallery-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
        urlPath: urlPath,
        title: node.title,
        isGallery: true,
      },
    })
  })

  // Create video index page
  actions.createPage({
    path: '/videos/',
    component: path.resolve(`./src/templates/video-page.js`),
    context: {
      id: '',
      urlPath: '/videos/',
      title: null,
      isVideo: true,
    },
  })

  // Create separate page for each video
  result.data.allSanityVideo.edges.forEach(({ node }) => {
    const urlPath = makeVideoPagePath(node.title)
    actions.createPage({
      path: urlPath,
      component: path.resolve(`./src/templates/video-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
        urlPath: urlPath,
        title: node.title,
        isVideo: true,
      },
    })
  })
}
