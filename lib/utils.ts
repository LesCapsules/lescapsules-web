import slugify from 'slugify'

export function makeAlbumPagePath(title: string, year: string): string {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/photos/${year}/${slug}/`
}

export function makeVideoPagePath(title: string): string {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/videos/${slug}/`
}
