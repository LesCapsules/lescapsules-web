import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import Container from '../components/container'
import LiteYouTubeEmbed from '../components/youtube'

const VideosIndexPage = ({ location, data }) => {
  const videosArray = data.allSanityVideo.edges
  return (
    <Layout location={location}>
      <Container>
        <div className="py-5">
          <h1>Vidéos</h1>
          <Row>
            {videosArray.map(({ node }) => {
              const { id, title, youtubeId } = node
              return (
                <GridCard key={id} width={100} widthSm={100}>
                  <LiteYouTubeEmbed id={youtubeId} title={title} />
                  <div className="m-2">
                    <h4>{title}</h4>
                  </div>
                </GridCard>
              )
            })}
          </Row>
        </div>
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
