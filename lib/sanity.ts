import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-19',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Hero Section Query
export async function getHeroSection() {
  try {
    const data = await client.fetch(
      `*[_type == "hero"][0]{
        title,
        subtitle,
        "backgroundImage": backgroundImage.asset->url,
        primaryButton,
        secondaryButton
      }`
    )
    // console.log('Raw Sanity Hero Data:', data)
    return data
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

// Sermons Query
export async function getSermons() {
  return client.fetch(
    `*[_type == "sermon"] | order(date desc){
      _id,
      title,
      speaker,
      series,
      date,
      videoUrl,
      audioUrl,
      scripture,
      description,
      "thumbnail": thumbnail.asset->url,
      isFeatured
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Gallery Query
export async function getGallery() {
  return client.fetch(
    `*[_type == "gallery"][0]{
      images[]{
        "image": image.asset->url,
        alt,
        title
      }
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Nuggets Query
export async function getNuggets() {
  return client.fetch(
    `*[_type == "nugget"] | order(date desc){
      _id,
      title,
      content,
      verse,
      date,
      "imageUrl": imageUrl.asset->url
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Podcasts Query
export async function getPodcasts() {
  return client.fetch(
    `*[_type == "podcast"] | order(date desc){
      _id,
      title,
      speaker,
      series,
      date,
      audioUrl,
      description,
      "thumbnail": thumbnail.asset->url
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Articles Query
export async function getArticles() {
  return client.fetch(
    `*[_type == "article"] | order(publishedDate desc){
      _id,
      title,
      author,
      publishedDate,
      content,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Schedule Query
export async function getSchedule() {
  return client.fetch(
    `*[_type == "schedule"][0]{
      events[]{
        title,
        description,
        date,
        location,
        "image": image.asset->url
      }
    }`,
    {},
    { next: { revalidate: 60 } }
  )
} 

// YouTube Videos Query
// This query fetches YouTube videos from the ministry documents
export async function getYouTubeVideos() {
  return client.fetch(
    `*[_type == "youtubevideo"] | order(date desc){
      _id,
      title,
      url,
      "thumbnail": thumbnail.asset->url,
      date
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}