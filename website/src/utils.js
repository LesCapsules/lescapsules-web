const slugify = require(`slugify`)

exports.makeAlbumPagePath = (node) => {
  if (process.env.PREVIEW_MODE === '1') {
    console.log(`Preview mode, using ${node.sanityId}`)
    return `/preview/${node.sanityId}`
  }
  const slug = slugify(node.title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
  return `/photos/${node.year}/${slug}/`
}
