const slugify = require(`slugify`)

exports.makeAlbumPagePath = (title, year) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/photos/${year}/${slug}/`
}
