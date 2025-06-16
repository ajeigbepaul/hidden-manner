export default {
  name: 'podcast',
  title: 'Podcasts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'speaker',
      title: 'Speaker/Host',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'series',
      title: 'Podcast Series',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date Published',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Podcast Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
} 