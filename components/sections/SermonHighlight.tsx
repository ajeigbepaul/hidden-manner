import { Sermon } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaPlay, FaMusic } from 'react-icons/fa'
import Image from 'next/image'

interface SermonHighlightProps {
  sermon: Sermon
}

export default function SermonHighlight({ sermon }: SermonHighlightProps) {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Sermon</h2>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-200">
              <Image 
                src={sermon.thumbnail} 
                alt={sermon.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:w-2/3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">
                  {formatDate(sermon.date)}
                </span>
                {sermon.series && (
                  <span className="px-2 py-1 text-xs bg-primary text-white rounded">
                    {sermon.series}
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{sermon.title}</h3>
              <p className="text-gray-600 mb-4">{sermon.speaker}</p>
              <p className="text-gray-700 mb-6">{sermon.description}</p>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={sermon.videoUrl} className="flex items-center">
                    <FaPlay className="h-4 w-4 mr-2" />
                    Watch Sermon
                  </Link>
                </Button>
                {sermon.audioUrl && (
                  <Button variant="outline" asChild>
                    <Link href={sermon.audioUrl} className="flex items-center">
                      <FaMusic className="h-4 w-4 mr-2" />
                      Listen
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}