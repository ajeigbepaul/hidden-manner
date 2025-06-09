// src/components/sections/ScheduleSection.tsx
import { CalendarDaysIcon } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { EventItem } from '@/lib/types'

interface ScheduleSectionProps {
  events: EventItem[]
  id?: string
}

export default function ScheduleSection({ events, id }: ScheduleSectionProps) {
  // Mock data - replace with your actual data
  

  // Group events by date
  const eventsByDate: Record<string, EventItem[]> = {}
  events.forEach(event => {
    if (!eventsByDate[event.date]) {
      eventsByDate[event.date] = []
    }
    eventsByDate[event.date].push(event)
  })

  return (
    <section id={id} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column (35%) - What's Happening */}
          <div className="lg:w-[35%]">
            <h2 className="text-3xl font-bold mb-6">What's Happening</h2>
            
            <p className="text-gray-600 mb-6">
              Here's what's happening this week at our church. Want to stay up to date on upcoming events, classes, and more? Follow us on social media!
            </p>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-primary transition">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (65%) - Events */}
          <div className="lg:w-[65%]">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CalendarDaysIcon className="h-6 w-6 text-primary mr-2" />
              EVENTS
            </h3>
            
            <div className="space-y-6">
              {events.map(event => (
                <div key={event.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <p className="font-bold text-gray-900">{event.date}</p>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="mt-2 text-sm text-gray-500">
                        {event.time && <p>{event.time}</p>}
                        {event.location && <p>{event.location}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/events">
                  View All Events
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}