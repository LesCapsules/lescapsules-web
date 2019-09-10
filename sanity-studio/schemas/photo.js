import photoIcon from 'react-icons/lib/md/photo'

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: photoIcon,
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
