import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeroSectionProps {
  id?: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black/50">
        <Image 
          src="/hero.jpg" 
          alt="Church congregation" 
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Church
          </h1>
          <p className="text-xl mb-8">
            A community of believers growing together in faith and love.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/visit">Plan a Visit</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/watch" className='text-gray-900'>Watch Online</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}