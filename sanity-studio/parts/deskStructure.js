import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { FiEdit3 as EditIcon } from 'react-icons/fi'
import { FiEye as PreviewIcon } from 'react-icons/fi'

import { makeAlbumPagePath, makeVideoPagePath } from 'website/src/utils'

const previewUrl = 'https://capsules-preview.herokuapp.com'

const getFullPreviewURL = (schemaType, document) => {
  switch (schemaType.name) {
    case 'gallery':
      const date = new Date(document.displayed.date)
      const albumTitle = document.displayed.title
      return previewUrl + makeAlbumPagePath(albumTitle, date.getFullYear())
    case 'member':
      return previewUrl + '/drink-team/'
    case 'video':
      const videoTitle = document.displayed.title
      return previewUrl + makeVideoPagePath(videoTitle)
    default:
      return previewUrl
  }
}

let fetchRequest = null

const pingPreview = () => {
  if (fetchRequest !== null) {
    console.debug('Skipping ping: request already in progress %s', fetchRequest)
    return
  }
  fetchRequest = new Request(previewUrl)
  console.debug('Starting fetch request: %s', fetchRequest)
  fetch(fetchRequest)
    .then((fetchResponse) => fetchResponse)
    .then((response) => {
      if (response.status === 200) {
        fetchRequest = null
        console.log('Fetch to %s completed OK', previewUrl)
      } else {
        fetchRequest = null
        console.error(
          'Fetch to %s replied with status code %s',
          previewUrl,
          response.status
        )
      }
    })
    .catch((err) => {
      console.error('Error while fetching preview site %s', err)
      fetchRequest = null
    })
}

const WebPreview = ({ schemaType, document }) => {
  const fullPreviewUrl = getFullPreviewURL(schemaType, document)
  return (
    <div>
      <iframe
        src={fullPreviewUrl}
        width="100%"
        style={{ position: 'absolute', height: '100%' }}
        frameBorder={0}
      />
    </div>
  )
}

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form().icon(EditIcon),
    S.view.component(WebPreview).title('Preview').icon(PreviewIcon),
  ])
}

export default () => {
  // Ping the preview server to wake up dynos
  pingPreview()
  return S.defaults()
}
