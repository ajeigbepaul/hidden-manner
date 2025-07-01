import HeroSection from '@/components/sections/HeroSection'
import SermonHighlight from '@/components/sections/SermonHighlight'
import LocationsSection from '@/components/sections/LocationsSection'
import MinistriesSection from '@/components/sections/MinistriesSection'
import YouTubeVideosSection from '@/components/sections/YouTubeVideosSection'
import NuggetsSection from '@/components/sections/NuggetsSection'
import ScheduleSection from '@/components/sections/ScheduleSection'
import FullscreenGallery from '@/components/sections/FullscreenGallery'
import LatestContentSection from '@/components/sections/LatestContentSection'
import { getHeroSection, getSermons, getGallery, getNuggets, getSchedule, getPodcasts, getArticles,getYouTubeVideos } from '@/lib/sanity'
import { Sermon } from '@/lib/types'
import youtubevideo from '@/schemaTypes/youtubevideo'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const [heroData, sermons, galleryData, nuggets, scheduleData, podcasts, articles, youtubeVideos] = await Promise.all([
    getHeroSection(),
    getSermons(),
    getGallery(),
    getNuggets(),
    getSchedule(),
    getPodcasts(),
    getArticles(),
    getYouTubeVideos()
  ])

  // console.log('Hero Data:', heroData)
  // console.log('Background Image URL:', heroData?.backgroundImage)
  // console.log("sermons:", sermons)

  const featuredSermon = sermons.find((sermon: Sermon) => sermon.isFeatured)
  
  return (
    <div className="space-y-16 pb-16">
      <HeroSection id="hero" {...heroData} />
      
      {featuredSermon && <SermonHighlight sermon={featuredSermon} />}

      <FullscreenGallery images={galleryData?.images || []} />
      
      <LatestContentSection sermons={sermons} podcasts={podcasts} articles={articles} />
      
      <YouTubeVideosSection youtubevideos={youtubeVideos} />
      
      <NuggetsSection nuggets={nuggets} />
      
      <ScheduleSection id="schedule" events={scheduleData?.events || []} />
      
      {/* <LocationsSection id="locations" /> */}
      
      {/* <MinistriesSection id="ministries" ministries={[]} /> */}
    </div>
  )
}