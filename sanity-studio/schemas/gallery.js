import { MdPhotoLibrary } from 'react-icons/md'

export default {
  name: 'gallery',
  title: 'Album',
  type: 'document',
  icon: MdPhotoLibrary,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'overview',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'mainPhoto',
      title: 'Photo principale',
      type: 'image',
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
  initialValue: () => ({
    date: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: 'title',
      datetime: 'date',
      photo: 'mainPhoto',
    },
    prepare(selection) {
      const { title, datetime, photo } = selection
      const date = datetime.split('T')[0]
      const year = date.split('-')[0]
      return {
        title: `${title} (${year})`,
        subtitle: date,
        media: photo,
      }
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'dateateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Ancienneté',
      name: 'dateateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
}
