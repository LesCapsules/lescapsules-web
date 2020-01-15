import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import Container from '../components/container'
import LiteYouTubeEmbed from '../components/youtube'

const VideosIndexPage = ({ data, path }) => {
  const videosArray = data.allSanityVideo.edges
  return (
    <Layout
      title="Vidéos"
      description="Quelques vidéos retraçant des bons moments."
      path={path}
    >
      <Container yPadding={true}>
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
