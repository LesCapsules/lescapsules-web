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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
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
    },
    prepare(selection) {
      const { title, datetime } = selection
      const date = datetime.split('T')[0]
      const year = date.split('-')[0]
      return {
        title: `${title} (${year})`,
        subtitle: date,
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
