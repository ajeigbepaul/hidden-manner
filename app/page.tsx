import HeroSection from '@/components/sections/HeroSection'
import SermonHighlight from '@/components/sections/SermonHighlight'
import LocationsSection from '@/components/sections/LocationsSection'
import MinistriesSection from '@/components/sections/MinistriesSection'
import YouTubeVideosSection from '@/components/sections/YouTubeVideosSection'
import NuggetsSection from '@/components/sections/NuggetsSection'
import ScheduleSection from '@/components/sections/ScheduleSection'
import { sermons, ministries, nuggets, schedules, events } from '@/lib/mocks'
import FullscreenGallery from '@/components/sections/FullscreenGallery'
import LatestContentSection from '@/components/sections/LatestContentSection'

export default function Home() {
  const featuredSermon = sermons.find(sermon => sermon.isFeatured)
  
  return (
    <div className="space-y-16 pb-16">
      <HeroSection id="hero" />
      
      {featuredSermon && <SermonHighlight sermon={featuredSermon} />}

      <FullscreenGallery />
      
      <LatestContentSection />
      
      <YouTubeVideosSection ministries={ministries} />
      
      <NuggetsSection nuggets={nuggets} />
      
      <ScheduleSection id="schedule" events={events} />
      
      {/* <LocationsSection id="locations" /> */}
      
      {/* <MinistriesSection id="ministries" ministries={ministries} /> */}
    </div>
  )
}