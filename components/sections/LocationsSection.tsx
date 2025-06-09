// src/components/sections/LocationsSection.tsx
import { Location } from '@/lib/types'
import { FaMapPin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data type - replace with your actual Location type
interface MockLocation {
  id: string
  name: string
  address: string
  serviceTimes: string[]
  imageUrl?: string
}

interface LocationsSectionProps {
  id?: string;
}

export default function LocationsSection({ id }: LocationsSectionProps) {
  // Mock data - replace with your actual data fetching
  const locations: MockLocation[] = [
    {
      id: '1',
      name: 'Main Campus',
      address: '123 Church St, Cityville, ST 12345',
      serviceTimes: ['Sunday 9:00 AM', 'Sunday 11:00 AM', 'Wednesday 7:00 PM'],
      imageUrl: '/images/location-main.jpg',
    },
    {
      id: '2',
      name: 'Downtown Campus',
      address: '456 Worship Ave, Cityville, ST 12345',
      serviceTimes: ['Sunday 10:00 AM', 'Tuesday 7:00 PM'],
      imageUrl: '/images/location-downtown.jpg',
    },
  ]

  return (
    <section id={id} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              {location.imageUrl && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={location.imageUrl} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <FaMapPin className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-medium">Service Times:</h4>
                  <ul className="space-y-1">
                    {location.serviceTimes.map((time, index) => (
                      <li key={index} className="text-gray-700">{time}</li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/locations/${location.id}`}>
                    View Location
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/locations">
              View All Locations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}