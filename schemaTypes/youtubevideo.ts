// schemaTypes/youtubeVideo.ts
export default {
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
       validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
      
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail URL',
      type: 'url',
       validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Published Date',
      type: 'datetime',
    },
  ],
}