import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './youtube.css'

export const getPosterUrl = (videoId) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

export const LiteYouTubeEmbed = ({ id, title }) => {
  const [preconnected, setPreconnected] = useState(false)
  const [iframe, setIframe] = useState(false)
  const videoId = encodeURIComponent(id)
  const posterUrl = getPosterUrl(videoId)
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const refVideo = useRef()

  const warmConnections = () => {
    if (preconnected) return
    setPreconnected(true)
  }

  const addIframe = () => {
    if (iframe) return
    setIframe(true)
  }

  useEffect(() => {
    const { current } = refVideo
    current.style.backgroundImage = `url('${posterUrl}')`
    current.addEventListener('pointerover', warmConnections, true)
    current.addEventListener('click', addIframe, true)

    return () => {
      current.removeEventListener('pointerover', warmConnections)
      current.removeEventListener('click', addIframe)
    }
  })

  return (
    <Fragment>
      <link rel="preload" href={posterUrl} as="image" />
      <>
        {preconnected && (
          <>
            <link rel="preconnect" href="https://www.youtube.com" />
            <link rel="preconnect" href="https://www.google.com" />
          </>
        )}
      </>
      <div
        className={`yt-lite ${iframe && 'lyt-activated'}`}
        data-title={title}
        ref={refVideo}
      >
        <div className="lty-playbtn" />
        {iframe && (
          <iframe
            title={title}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={iframeSrc}
          />
        )}
      </div>
    </Fragment>
  )
}

LiteYouTubeEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const LiteYoutubeStatic = ({ id }) => {
  const videoId = encodeURIComponent(id)
  const posterUrl = getPosterUrl(videoId)

  return (
    <div
      className="yt-lite"
      style={{ backgroundImage: `url('${posterUrl}')` }}
    />
  )
}

LiteYoutubeStatic.propTypes = {
  id: PropTypes.string.isRequired,
}
