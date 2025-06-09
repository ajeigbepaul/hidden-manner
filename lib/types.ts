// src/lib/types.ts
export interface Sermon {
    id: string;
    title: string;
    speaker: string;
    series?: string;
    date: string;
    videoUrl: string;
    audioUrl?: string;
    scripture: string;
    description: string;
    isFeatured?: boolean;
  }
  
  export interface Ministry {
    id: string;
    name: string;
    description: string;
    youtubeVideos?: {
      id: string;
      title: string;
      url: string;
      thumbnail: string;
    }[];
  }
  
  export interface Nugget {
    id: string;
    title: string;
    content: string;
    verse: string;
    date: string;
  }
  
  export interface ScheduleItem {
    id: string;
    title: string;
    time: string;
    location: string;
    description: string;
  }