import { MdPhoto } from 'react-icons/md'

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: MdPhoto,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
