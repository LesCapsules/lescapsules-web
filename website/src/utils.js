const slugify = require(`slugify`)

exports.makeAlbumPagePath = (title, year) => {
  const slug = slugify(title, {
    lower: true,
  })
  return `/photos/${year}/${slug}/`
}
