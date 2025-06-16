// src/components/sections/MinistriesSection.tsx
import { Ministry } from '@/lib/types'
import { FaUsers, FaGraduationCap, FaMusic } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface MinistriesSectionProps {
  ministries: Ministry[]
  id?: string
}

export default function MinistriesSection({ ministries, id }: MinistriesSectionProps) {
  const getIcon = () => {
    return <FaUsers className="h-6 w-6 text-primary" />
  }

  return (
    <section id={id} className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Ministries</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {ministries.map((ministry) => (
            <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-50 rounded-full mr-4">
                    {getIcon()}
                  </div>
                  <h3 className="text-xl font-bold">{ministry.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/ministries/${ministry.id}`}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/ministries">
              View All Ministries
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}