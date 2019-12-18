import { MdVideocam } from 'react-icons/md'

export default {
  name: 'video',
  title: 'Vidéo',
  type: 'document',
  icon: MdVideocam,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'youtubeId',
      title: 'ID Youtube',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'title', youtubeId: 'youtubeId' },
    prepare(selection) {
      const { title, youtubeId } = selection
      const media = `https://img.youtube.com/vi/${youtubeId}/0.jpg`
      return {
        title: title,
        media: media,
      }
    },
  },
}
