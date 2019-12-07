import { MdPeople } from 'react-icons/md'

export default {
  name: 'member',
  title: 'Membre de la drink team',
  type: 'document',
  icon: MdPeople,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'favouritePlace',
      title: 'Lieu Favori',
      type: 'string',
    },
    {
      name: 'hobbies',
      title: 'Hobbies',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
  ],
}
