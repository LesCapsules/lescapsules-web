import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const previewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE === '1'

export const sanityClient = createClient({
  projectId: '9xyjnlvq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: !previewMode,
  perspective: previewMode ? 'previewDrafts' : 'published',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
