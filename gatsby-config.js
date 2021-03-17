const description = `Les Capsules sont un groupe d'amis de Sauclières dans le sud-Aveyron.`
const title = 'Les Capsules'
const baseUrl = process.env.REVIEW_ID
  ? `https://deploy-preview-${process.env.REVIEW_ID}--lescapsules.netlify.app`
  : `https://www.lescapsules.com`
const previewMode = process.env.PREVIEW_MODE === '1'

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    siteUrl: baseUrl,
    keywords: 'Sauclières, Capsules, Fete, soirée, concert, village',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `9xyjnlvq`,
        dataset: `production`,
        overlayDrafts: previewMode,
        watchMode: previewMode,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0054c7`,
        display: `standalone`,
        icon: `src/images/lescapsules-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || 'UA-0',
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: 'https://7f640f49556c48f1be30ad98d3f2787f@sentry.io/1527242',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            let priority = 0.5
            if (edge.node.path === '/photos/') {
              priority = 0.7
            }
            if (['/videos/', '/drink-team/'].includes(edge.node.path)) {
              priority = 0.6
            }
            if (edge.node.path === '/') {
              priority = 1
            }

            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: priority,
            }
          }),
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`, // Needs to be last
  ],
}
