// src/components/sections/YouTubeVideosSection.tsx
"use client"
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

// Local type override to ensure _id is recognized
type YouTubeVideo = {
  _id?: string;
  url: string;
  title: string;
  thumbnail: string;
  date?: string;
};

interface YouTubeVideosSectionProps {
  youtubevideos: YouTubeVideo[];
  
}

export default function YouTubeVideosSection({ youtubevideos }: YouTubeVideosSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Use the youtubevideos array directly
  const allVideos = youtubevideos;
  console.log(allVideos,"ALL VIDEOS");
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    }
    return () => scrollContainer?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Messages</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className={`p-2 rounded-full transition-all duration-300 ${
                showLeftArrow 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
          >
            {allVideos.map(video => (
              <div 
                key={video._id || video.url} 
                className="flex-none w-[350px] snap-center group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative pt-[56.25%] cursor-pointer">
                    {playingId === (video._id || video.url) ? (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <button
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 transition-opacity duration-300"
                          onClick={() => setPlayingId(video._id || video.url)}
                          aria-label={`Play ${video.title}`}
                        >
                          <FaPlay className="w-12 h-12 text-white" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                    <button 
                      className="text-primary font-medium hover:text-primary-dark transition-colors"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      Watch on YouTube
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className="text-center mt-8">
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Messages
          </button>
        </div> */}
      </div>
    </section>
  );
}