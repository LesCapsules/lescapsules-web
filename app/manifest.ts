import { MetadataRoute } from 'next'
import { siteMetadata } from '@/lib/metadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.title,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f0eb',
    theme_color: '#0054c7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
