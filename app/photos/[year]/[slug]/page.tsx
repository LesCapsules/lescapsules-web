import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityClient, urlFor } from '@/lib/sanity'
import { makeAlbumPagePath } from '@/lib/utils'
import { GalleryPageClient } from './gallery-client'

interface GalleryData {
  _id: string
  title: string
  date: string
  overview: any
  photos: Array<{
    asset: {
      _ref: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }>
  mainPhoto: {
    asset: {
      _ref: string
    }
  }
}

async function getGallery(year: string, slug: string) {
  // First get all galleries to find the matching one
  const galleries = await sanityClient.fetch<GalleryData[]>(
    `*[_type == "gallery"] | order(date desc) {
      _id,
      title,
      date,
      overview,
      photos[] {
        asset-> {
          _ref,
          url,
          metadata {
            dimensions
          }
        }
      },
      mainPhoto
    }`
  )

  // Find the gallery that matches the slug and year
  const gallery = galleries.find((g) => {
    const gYear = new Date(g.date).getFullYear().toString()
    const gPath = makeAlbumPagePath(g.title, gYear)
    const expectedPath = `/photos/${year}/${slug}/`
    return gPath === expectedPath
  })

  return gallery
}

export async function generateStaticParams() {
  const galleries = await sanityClient.fetch<
    Array<{ title: string; date: string }>
  >(
    `*[_type == "gallery"] {
      title,
      date
    }`
  )

  return galleries.map((gallery) => {
    const year = new Date(gallery.date).getFullYear().toString()
    const path = makeAlbumPagePath(gallery.title, year)
    // Extract slug from path: /photos/2024/my-slug/ -> my-slug
    const parts = path.split('/')
    const slug = parts[parts.length - 2]

    return {
      year,
      slug,
    }
  })
}

interface PageProps {
  params: {
    year: string
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const gallery = await getGallery(params.year, params.slug)

  if (!gallery) {
    return {
      title: 'Gallery Not Found',
    }
  }

  const year = new Date(gallery.date).getFullYear().toString()

  return {
    title: gallery.title,
    description: `Album photo: ${gallery.title} (${year})`,
  }
}

export default async function GalleryPage({ params }: PageProps) {
  const gallery = await getGallery(params.year, params.slug)

  if (!gallery) {
    notFound()
  }

  const year = new Date(gallery.date).getFullYear().toString()
  const mainPhotoUrl = urlFor(gallery.mainPhoto).width(1200).height(600).url()

  return (
    <GalleryPageClient
      title={gallery.title}
      year={year}
      overview={gallery.overview}
      mainPhotoUrl={mainPhotoUrl}
      photos={gallery.photos}
    />
  )
}
