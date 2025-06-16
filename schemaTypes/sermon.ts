export default {
  name: 'sermon',
  title: 'Sermons',
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
      title: 'Speaker',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'series',
      title: 'Series',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
    },
    {
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: 'Featured Sermon',
      type: 'boolean',
      initialValue: false,
    },
  ],
} 