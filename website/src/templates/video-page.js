import { graphql, Link } from 'gatsby'
import React from 'react'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

import Container from '../components/container'
import GridCard from '../components/card-grid'
import Layout from '../components/layout'
import PageHeader from '../components/headings'
import Row from '../components/row'
import { LiteYouTubeEmbed, LiteYoutubeStatic } from '../components/youtube'
import { makeVideoPagePath } from '../utils'

const VideoPage = ({ data, pageContext }) => {
  const currentVideo = data.sanityVideo
  const videosArray = data.allSanityVideo.edges.filter((edge) => {
    return !currentVideo || edge.node.youtubeId !== currentVideo.youtubeId
  })
  const pageTitle = currentVideo ? currentVideo.title : 'Vidéos'
  return (
    <Layout
      title={pageTitle}
      description="Quelques vidéos retraçant des bons moments."
      path={pageContext.urlPath}
    >
      <Container>
        <PageHeader>{pageTitle}</PageHeader>
        {currentVideo && (
          <Row>
            <div className="col-md-12">
              <LiteYouTubeEmbed
                id={currentVideo.youtubeId}
                title={currentVideo.title}
              />
            </div>
          </Row>
        )}
        {currentVideo && (
          <Row className="pt-5">
            <h2 className="m-3">Plus de vidéos</h2>
          </Row>
        )}
        <Row>
          {videosArray.map(({ node }) => {
            const { id, title, youtubeId } = node
            return (
              <GridCard key={id} width={100} widthSm={100}>
                <Link to={makeVideoPagePath(title)}>
                  <LiteYoutubeStatic id={youtubeId} />
                  <div className="m-2">
                    <h4>{title}</h4>
                  </div>
                </Link>
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query VideoData($id: String!) {
    sanityVideo(id: { eq: $id }) {
      title
      youtubeId
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
`

export default VideoPage
