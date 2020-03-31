import S from '@sanity/desk-tool/structure-builder'
import { FiEdit3 as EditIcon } from 'react-icons/fi'
import { FiEye as PreviewIcon } from 'react-icons/fi'
import WebPreview from '../previews/WebPreview'

const previewUrl = 'https://capsules-preview.herokuapp.com'

export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
  if (schemaType === 'gallery') {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view
        .component(WebPreview)
        .options({ previewUrl: `${previewUrl}/preview/${documentId}` })
        .title('Web Preview')
        .icon(PreviewIcon),
    ])
  }
  return S.document().views([S.view.form()])
}

export default () =>
  S.list()
    .title('Content')
    .items([...S.documentTypeListItems()])
