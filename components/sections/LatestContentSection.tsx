'use client'

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Sermon, Podcast, Article } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

interface LatestContentSectionProps {
  id?: string
  sermons: Sermon[]
  podcasts: Podcast[]
  articles: Article[]
}

const tabs = ['SERMONS']
// const tabs = ['SERMONS', 'VIDEOS', 'MUSIC', 'PODCASTS', 'ARTICLES', 'RESOURCES']
export default function LatestContentSection({ id, sermons }: LatestContentSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'SERMONS':
        return (
          <div className="space-y-8">
            {sermons.map((sermon,idx) => (
              <Link href={sermon.videoUrl} key={idx} className="relative group cursor-pointer">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={sermon.thumbnail} 
                    alt={sermon.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-1">{formatDate(sermon.date)} | {sermon.scripture}</p>
                    <h3 className="text-3xl font-bold leading-tight">{sermon.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm">{formatDate(sermon.date)} | {sermon.scripture}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900">{sermon.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )
    //   case 'VIDEOS':
    //     return <p>Content for Videos goes here...</p>
    //   case 'MUSIC':
    //     return <p>Content for Music goes here...</p>
      // case 'PODCASTS':
      //   return (
      //     <div className="space-y-8">
      //       {podcasts.map((podcast) => (
      //         <div key={podcast._id} className="relative group cursor-pointer">
      //           <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
      //             <Image
      //               src={podcast.thumbnail || '/placeholder.jpg'}
      //               alt={podcast.title}
      //               fill
      //               className="object-cover transition-transform duration-500 group-hover:scale-105"
      //               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      //             />
      //             <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      //               <p className="text-sm mb-1">{podcast.date} | {podcast.speaker}</p>
      //               <h3 className="text-3xl font-bold leading-tight">{podcast.title}</h3>
      //             </div>
      //           </div>
      //           <div className="mt-4">
      //             <p className="text-gray-600 text-sm">{podcast.date} | {podcast.speaker}</p>
      //             <h3 className="text-2xl font-bold mt-1 text-gray-900">{podcast.title}</h3>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   )
      // case 'ARTICLES':
      //   return (
      //     <div className="space-y-8">
      //       {articles.map((article) => (
      //         <div key={article._id} className="relative group cursor-pointer">
      //           <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
      //             <Image
      //               src={article.mainImage || '/placeholder.jpg'}
      //               alt={article.title}
      //               fill
      //               className="object-cover transition-transform duration-500 group-hover:scale-105"
      //               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      //             />
      //             <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      //               <p className="text-sm mb-1">{article.publishedDate} | {article.author}</p>
      //               <h3 className="text-3xl font-bold leading-tight">{article.title}</h3>
      //             </div>
      //           </div>
      //           <div className="mt-4">
      //             <p className="text-gray-600 text-sm">{article.publishedDate} | {article.author}</p>
      //             <h3 className="text-2xl font-bold mt-1 text-gray-900">{article.title}</h3>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   )
    //   case 'RESOURCES':
    //     return <p>Content for Resources goes here...</p>
      default:
        return null
    }
  }

  return (
    <section ref={sectionRef} id={id} className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">
      {/* Left Column - Fixed */}
      <div className="lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-64px)] flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
          Latest <br />Content
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-md">
          Created to help you meditate on the truths of Scripture, these resources
          address different aspects of the Christian life, unpack theology, and provide
          encouragement as you work to live for the glory of God.
        </p>
        {/* <a
          href="/about"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          Learn More
        </a> */}
      </div>

      {/* Right Column - Tabs and Scrollable Content */}
      <div className="lg:pl-12">
        {/* Tab Navigation */}
        <div className="flex items-center justify-between border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`inline-block py-4 px-6 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          <span className="ml-2 text-gray-500 text-sm hidden md:inline">
            Watch some of our messages, created to edify you
          </span>
        </div>

        {/* Scrollable Content Area */}
        <div ref={contentRef} className="max-h-[calc(100vh-150px)] lg:max-h-[calc(100vh-150px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}