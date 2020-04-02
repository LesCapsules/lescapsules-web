import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { FiEdit3 as EditIcon } from 'react-icons/fi'
import { FiEye as PreviewIcon } from 'react-icons/fi'

import { makeAlbumPagePath } from '../../website/src/utils'

const previewUrl = 'https://capsules-preview.herokuapp.com'

const getFullPreviewURL = (schemaType, document) => {
  switch (schemaType.name) {
    case 'gallery':
      const date = new Date(document.displayed.date)
      const title = document.displayed.title
      return previewUrl + makeAlbumPagePath(title, date.getFullYear())
    case 'member':
      return previewUrl + '/drink-team/'
    case 'video':
      return previewUrl + '/videos/'
    default:
      return previewUrl
  }
}

const pingPreview = () => {
  fetch(previewUrl)
    .then((response) => response)
    .then((response) => {
      if (response.status === 200) {
        console.log('Fetch to %s completed OK', previewUrl)
      } else {
        console.error(
          'Fetch to %s replied with status code %s',
          previewUrl,
          response.status
        )
      }
    })
    .catch((err) => console.error('Error while fetching preview site %s', err))
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
