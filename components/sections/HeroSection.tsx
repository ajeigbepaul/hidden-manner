import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeroSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export default function HeroSection({ 
  id, 
  title, 
  subtitle, 
  backgroundImage, 
  primaryButton, 
  secondaryButton 
}: HeroSectionProps) {
  return (
    <section id={id} className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black/50">
        <Image 
          src={backgroundImage || '/hero.jpg'} 
          alt={title || 'Church congregation'} 
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          priority
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl mb-8">
            {subtitle}
          </p>
          <div className="flex space-x-4">
            {primaryButton && (
              <Button asChild>
                <Link href={primaryButton.link}>{primaryButton.text}</Link>
              </Button>
            )}
            {secondaryButton && (
              <Button variant="outline" asChild>
                <Link href={secondaryButton.link} className='text-gray-900'>{secondaryButton.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}