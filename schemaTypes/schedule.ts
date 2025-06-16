export default {
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'datetime',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Event Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
} 