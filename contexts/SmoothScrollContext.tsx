'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

interface SmoothScrollContextType {
  scrollTo: (target: string) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const smoother = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    // Initialize smooth scroll
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother.current?.kill()
    }
  }, [])

  const scrollTo = (target: string) => {
    const element = document.querySelector(target)
    if (element && smoother.current) {
      smoother.current.scrollTo(element, true, 'center center')
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      <div id="smooth-wrapper" className="fixed inset-0 overflow-hidden">
        <div id="smooth-content" className="relative">
          {children}
        </div>
      </div>
    </SmoothScrollContext.Provider>
  )
}

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
  }
  return context
} 