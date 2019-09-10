/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

// Create a page for each markdown file for photos
exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allSanityGallery(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            date(formatString: "DD MMMM YYYY", locale: "fr-FR")
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

  // Process result & create pages
  result.data.allSanityGallery.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/photos/${node.slug.current}/`,
      component: path.resolve(`./src/templates/gallery-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
        location: `/photos/${node.slug.current}/`,
        title: node.title,
        isGallery: true,
      },
    })
  })
}
