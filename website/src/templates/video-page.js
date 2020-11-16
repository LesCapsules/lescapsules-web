import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import CardCaption from '../components/card-caption'
import Container from '../components/container'
import GridCard from '../components/card-grid'
import Layout from '../components/layout'
import PageHeader from '../components/headings'
import Row from '../components/row'
import { LiteYouTubeEmbed, LiteYoutubeStatic } from '../components/youtube'
import { makeVideoPagePath } from '../utils'

const SectionTitle = styled.h2`
  padding-top: ${(props) => props.theme.spacings[4]};
  padding-bottom: ${(props) => props.theme.spacings[2]};
`

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
          <LiteYouTubeEmbed
            id={currentVideo.youtubeId}
            title={currentVideo.title}
          />
        )}
        {currentVideo && <SectionTitle>Plus de vidéos</SectionTitle>}
        <Row>
          {videosArray.map(({ node }) => {
            const { id, title, youtubeId } = node
            return (
              <GridCard key={id} width={100} widthSm={100}>
                <Link to={makeVideoPagePath(title)}>
                  <LiteYoutubeStatic id={youtubeId} />
                  <CardCaption>{title}</CardCaption>
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
