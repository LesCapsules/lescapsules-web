/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title: string
  description?: string
  lang: string
  image?: string
  path?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, image, path, lang }) => {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        defaultImage: sanityPhoto(name: { eq: "all-staff-big" }) {
          image {
            asset {
              fixed(width: 1024, height: 800) {
                src
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageUrl =
    image === undefined
      ? defaultImage.image.asset.fixed.src
      : image.includes('https://')
      ? image
      : `${site.siteMetadata.siteUrl}${image}`
  const pageUrl = `${site.siteMetadata.siteUrl}${path}`
  const metaImage = [
    {
      name: `twitter:image`,
      content: imageUrl,
    },
    {
      property: `og:image`,
      content: imageUrl,
    },
    {
      property: `og:image:url`,
      content: imageUrl,
    },
    {
      property: `og:image:width`,
      content: 1024,
    },
    {
      property: `og:image:height`,
      content: 800,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:locale`,
          content: lang,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...metaImage,
      ]}
    />
  )
}

export default SEO
