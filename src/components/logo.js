import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ style }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div style={style}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    )}
  />
)

export default Logo
