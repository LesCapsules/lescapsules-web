import React, { useState, useRef, useLayoutEffect } from 'react'
import './youtube.css'

export const getPosterUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

interface LiteYouTubeEmbedProps {
  id: string
  title: string
}

export const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({
  id,
  title,
}) => {
  const [preconnected, setPreconnected] = useState(false)
  const [iframe, setIframe] = useState(false)
  const videoId = encodeURIComponent(id)
  const posterUrl = getPosterUrl(videoId)
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const refVideo = useRef<HTMLDivElement>(null)

  const warmConnections = () => {
    if (preconnected) return
    setPreconnected(true)
  }

  const addIframe = () => {
    if (iframe) return
    setIframe(true)
  }

  useLayoutEffect(() => {
    const { current } = refVideo
    if (current !== null) {
      current.style.backgroundImage = `url('${posterUrl}')`
      current.addEventListener('pointerover', warmConnections, true)
      current.addEventListener('click', addIframe, true)

      return () => {
        current.removeEventListener('pointerover', warmConnections)
        current.removeEventListener('click', addIframe)
      }
    } else {
      return () => {}
    }
  })

  return (
    <>
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
    </>
  )
}

export const LiteYoutubeStatic: React.FC<{ id: string }> = ({ id }) => {
  const videoId = encodeURIComponent(id)
  const posterUrl = getPosterUrl(videoId)

  return (
    <div
      className="yt-lite"
      style={{ backgroundImage: `url('${posterUrl}')` }}
    />
  )
}
