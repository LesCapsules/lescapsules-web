/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description, image, lang, meta }) {
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
              fluid(maxWidth: 1024) {
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
    image === ''
      ? defaultImage.image.asset.fluid.src
      : image.includes('https://')
      ? image
      : `${site.siteMetadata.siteUrl}${image}`
  const metaImage = [
    {
      name: `twitter:image`,
      content: imageUrl,
    },
    {
      property: `og:image`,
      content: imageUrl,
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
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
        ...meta,
        ...metaImage,
      ]}
    />
  )
}

SEO.defaultProps = {
  description: '',
  image: '',
  lang: 'en',
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
