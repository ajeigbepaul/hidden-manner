// src/lib/types.ts
export interface Sermon {
    thumbnail: string ;
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
    imageUrl?: string;
  }
  
  // export interface Ministry {
  //   id: string;
  //   name: string;
  //   description: string;
  //   youtubeVideos?: {
  //     id: string;
  //     title: string;
  //     url: string;
  //     thumbnail: string;
  //   }[];
  // }
  
  export interface Nugget {
    id: string;
    title: string;
    content: string;
    verse: string;
    date: string;
    imageUrl?: string;
  }
  
  export interface ScheduleItem {
    id: string;
    title: string;
    time: string;
    location: string;
    description: string;
  }

  export interface MenuItem {
    title: string
    href?: string
    items?: MenuItem[]
  }
  
  export interface MenuProps {
    title: string
    items: MenuItem[]
  }

  export interface Location {
    id: string
    name: string
    address: string
    serviceTimes: string[]
    imageUrl?: string
  }

  export interface LocationProps {
    locations: Location[]
  }

  // src/lib/types/index.ts
export interface Location {
  id: string
  name: string
  address: string
  serviceTimes: string[]
  imageUrl?: string
  slug?: string
}

export interface Ministry {
  id: string
  name: string
  description: string
  category?: string
  meetingTime?: string
  youtubeVideos?: {
    id: string
    title: string
    url: string
    thumbnail: string
  }[]
}

// src/lib/types/index.ts
export interface EventItem {
  id: string
  date: string
  title: string
  description: string
  time?: string
  location?: string
  image?: string
}