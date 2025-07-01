// schemaTypes/youtubeVideo.ts
export default {
  name: 'youtubevideo',
  title: 'YouTube Video',
  type: 'document',
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
      title: 'Thumbnail',
      type: 'image', // changed from 'url' to 'image'
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Published Date',
      type: 'datetime',
    },
  ],
}