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
      title: 'Overview',
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
}
