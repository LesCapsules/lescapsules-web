import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './youtube.css'
import Modal from 'react-modal'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const LiteYouTubeEmbed = ({ id, title }) => {
  const [preconnected, setPreconnected] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const videoId = encodeURIComponent(id)
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const refVideo = useRef()

  const warmConnections = () => {
    if (preconnected) return
    setPreconnected(true)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  useEffect(() => {
    const { current } = refVideo
    current.style.backgroundImage = `url('${posterUrl}')`
    current.addEventListener('pointerover', warmConnections, true)
    current.addEventListener('click', openModal, true)

    return () => {
      current.removeEventListener('pointerover', warmConnections)
      current.removeEventListener('click', openModal)
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
      <div className="yt-lite" data-title={title} ref={refVideo}>
        <div className="lty-playbtn" />
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel={title}
        >
          <iframe
            title={title}
            width="1120"
            height="630"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={iframeSrc}
          />
        </Modal>
      </div>
    </Fragment>
  )
}

LiteYouTubeEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default LiteYouTubeEmbed
