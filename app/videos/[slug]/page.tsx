import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityClient } from '@/lib/sanity'
import { makeVideoPagePath } from '@/lib/utils'
import { VideosClient } from '../videos-client'

interface Video {
  id: string
  title: string
  youtubeId: string
}

async function getVideo(slug: string) {
  try {
    const videos = await sanityClient.fetch<Video[]>(
      `*[_type == "video"] {
      "id": _id,
      title,
      youtubeId
    }`
    )

    const video = videos.find((v) => {
      const path = makeVideoPagePath(v.title)
      const expectedPath = `/videos/${slug}/`
      return path === expectedPath
    })

    return { video, allVideos: videos }
  } catch (error) {
    console.error('Failed to fetch video:', error)
    return { video: undefined, allVideos: [] }
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const videos = await sanityClient.fetch<Array<{ title: string }>>(
      `*[_type == "video"] {
      title
    }`
    )

    return videos.map((video) => {
      const path = makeVideoPagePath(video.title)
      // Extract slug from path: /videos/my-slug/ -> my-slug
      const parts = path.split('/')
      const slug = parts[parts.length - 2]

      return {
        slug,
      }
    })
  } catch (error) {
    console.warn('Failed to fetch videos for static params:', error)
    // Return a placeholder to satisfy Next.js export requirement
    // In production with Sanity access, real pages will be generated
    return [{ slug: 'placeholder' }]
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { video } = await getVideo(params.slug)

  if (!video) {
    return {
      title: 'Video Not Found',
    }
  }

  return {
    title: video.title,
    description: 'Quelques vidéos retraçant des bons moments.',
  }
}

export default async function VideoPage({ params }: PageProps) {
  const { video, allVideos } = await getVideo(params.slug)

  if (!video) {
    notFound()
  }

  return <VideosClient currentVideo={video} allVideos={allVideos} />
}
