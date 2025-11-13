import type { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity'
import { VideosClient } from './videos-client'

interface Video {
  id: string
  title: string
  youtubeId: string
}

async function getAllVideos() {
  try {
    const videos = await sanityClient.fetch<Video[]>(
      `*[_type == "video"] {
      "id": _id,
      title,
      youtubeId
    }`
    )
    return videos
  } catch (error) {
    console.error('Failed to fetch videos:', error)
    return []
  }
}

export const metadata: Metadata = {
  title: 'Vidéos',
  description: 'Quelques vidéos retraçant des bons moments.',
}

export default async function VideosPage() {
  const allVideos = await getAllVideos()

  return <VideosClient allVideos={allVideos} />
}
