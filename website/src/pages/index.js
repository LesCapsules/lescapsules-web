import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../components/container'
import Layout from '../components/layout'
import Row from '../components/row'

const IndexPage = ({ data, path }) => {
  console.log(path)
  return (
    <Layout
      title="Acceuil"
      description="Bienvenue sur le site des Capsules, le comité des fêtes de Sauclières"
      path={path}
    >
      <div>
        <Img fluid={data.photo.image.asset.full} />
      </div>
      <Container>
        <Row>
          <div className="col">
            <div className="p-5 pb-0">
              <h2 className="text-center text-primary">
                Bienvenue sur le site de la Bandade!
              </h2>
              <p className="lead mt-5">
                Ce site a pour vocation de réunir une bande de collègues autour
                d'un centre d'intérêt : l'art de la fête !!! Cette passion les
                rassemble au sein du comité des fêtes de Sauclières, où les
                Capsules peuvent donner libre cours à leur imagination pour
                faire bouger ce petit village du sud Aveyron. Vous trouverez ici
                des photos de leurs plus célèbres exploits !!
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    photo: sanityPhoto(name: { eq: "all-staff-big" }) {
      name
      title
      image {
        asset {
          full: fluid(maxWidth: 1024, maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
