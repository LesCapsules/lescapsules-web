import { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'
import { makeAlbumPagePath, makeVideoPagePath } from '@/lib/utils'
import { siteMetadata } from '@/lib/metadata'

interface Gallery {
  title: string
  date: string
}

interface Video {
  title: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteMetadata.siteUrl

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/photos/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/videos/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/drink-team/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  try {
    // Fetch galleries
    const galleries = await sanityClient.fetch<Gallery[]>(
      `*[_type == "gallery"] {
      title,
      date
    }`
    )

    // Fetch videos
    const videos = await sanityClient.fetch<Video[]>(
      `*[_type == "video"] {
      title
    }`
    )

    // Gallery pages
    const galleryPages: MetadataRoute.Sitemap = galleries.map((gallery) => {
      const year = new Date(gallery.date).getFullYear().toString()
      const path = makeAlbumPagePath(gallery.title, year)
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }
    })

    // Video pages
    const videoPages: MetadataRoute.Sitemap = videos.map((video) => {
      const path = makeVideoPagePath(video.title)
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }
    })

    return [...staticPages, ...galleryPages, ...videoPages]
  } catch (error) {
    console.warn('Failed to fetch dynamic pages for sitemap:', error)
    // Return only static pages if fetching fails
    return staticPages
  }
}
