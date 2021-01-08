const slugify = require(`slugify`)

exports.makeAlbumPagePath = (title, year) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/photos/${year}/${slug}/`
}

exports.makeVideoPagePath = (title) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/videos/${slug}/`
}
