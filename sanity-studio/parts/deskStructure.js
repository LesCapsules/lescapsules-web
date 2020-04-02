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

export default S.defaults()
