// src/components/sections/FullscreenGallery.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import Swiper styles
import 'swiper/css'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/gal1.jpg', alt: 'Worship service' },
  { src: '/gal2.jpg', alt: 'Community gathering' },
  { src: '/gal3.jpg', alt: 'Youth event' },
  { src: '/gal1.jpg', alt: 'Community outreach' },
]

export default function FullscreenGallery({ id }: { id?: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id={id} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Navigation Banner - Fixed at top */}
      {/* <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl">THE MUSLIM STONE</div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-primary transition">HOME</a>
            <a href="#" className="hover:text-primary transition">GIVE</a>
            <a href="#" className="hover:text-primary transition">GET INVOLVED</a>
          </nav>
        </div>
      </div> */}

      {/* Swiper Gallery */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-[80vh] w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!w-[400px] h-full">
              <div className="h-full w-full relative rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 ref={titleRef} className="text-white text-3xl font-bold text-center px-4">
                    {image.alt.toUpperCase()}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}