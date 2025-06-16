// src/components/sections/NuggetsSection.tsx
"use client"
import { Nugget } from '@/lib/types';
import { useRef, useState, useEffect, useCallback, memo } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

interface NuggetsSectionProps {
  nuggets: Nugget[];
  id?: string;
}

// Memoized Nugget Card component for better performance
const NuggetCard = memo(({ nugget }: { nugget: Nugget }) => (
  <div className="flex-none w-[350px] snap-center group">
    <article className="relative rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full">
      {/* Background Image with Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: nugget.imageUrl 
            ? `url(${nugget.imageUrl})` 
            : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-pink-900/70" />
      </div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <time 
            dateTime={nugget.date} 
            className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
          >
            {nugget.date}
          </time>
        </div>
        <div className="relative">
          <FaQuoteLeft 
            className="absolute -top-2 -left-2 text-white/30 w-8 h-8" 
            aria-hidden="true"
          />
          <h3 className="font-bold text-xl mb-4 pl-6 text-white">{nugget.title}</h3>
        </div>
        <p className="text-white/90 mb-6 leading-relaxed flex-grow">{nugget.content}</p>
        <div className="border-t border-white/20 pt-4">
          <blockquote className="text-sm text-white/80 font-medium italic">
            {nugget.verse}
          </blockquote>
        </div>
      </div>
    </article>
  </div>
));

NuggetCard.displayName = 'NuggetCard';

export default function NuggetsSection({ nuggets, id }: NuggetsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      // Check on resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      scrollContainer?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true);
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 500);
    }
  }, [isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && showLeftArrow) {
        scroll('left');
      } else if (e.key === 'ArrowRight' && showRightArrow) {
        scroll('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scroll, showLeftArrow, showRightArrow]);

  return (
    <section 
      id={id}
      className="relative py-12"
      aria-label="Daily Nuggets Section"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-pink-900/70" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Daily Nuggets</h2>
          <div className="flex gap-2" role="navigation" aria-label="Nuggets navigation">
            <button 
              onClick={() => scroll('left')}
              className={`p-2 rounded-full transition-all duration-300 ${
                showLeftArrow 
                  ? 'bg-white/20 text-white hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900' 
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className={`p-2 rounded-full transition-all duration-300 ${
                showRightArrow 
                  ? 'bg-white/20 text-white hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900' 
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="list"
            aria-label="Daily Nuggets"
          >
            {nuggets.map(nugget => (
              <NuggetCard key={nugget.id} nugget={nugget} />
            ))}
          </div>
        </div>
{/*         
        <div className="text-center mt-8">
          <button 
            className="px-8 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900"
            onClick={() => window.location.href = '/nuggets'}
          >
            View All Nuggets
          </button>
        </div> */}
      </div>
    </section>
  );
}