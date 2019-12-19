import React from 'react'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import { graphql } from 'gatsby'

import Container from '../components/container'

const VideosIndexPage = ({ location, data }) => {
  const videosArray = data.allSanityVideo.edges
  return (
    <Layout location={location}>
      <Container>
        <h1>Vidéos:</h1>
        <Row>
          {videosArray.map(({ node }) => {
            const { id, title, youtubeId } = node
            return (
              <GridCard key={id}>
                <img
                  src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
                  alt={`Preview of ${title}`}
                />
                <div className="m-2">
                  <h4>{title}</h4>
                </div>
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default VideosIndexPage

export const pageQuery = graphql`
  query MyQuery {
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
`
