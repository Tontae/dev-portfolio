'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function YouTubeEmbed({ videoId, coverSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe 
        className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-auto"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`} 
        title="Gameplay Video" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <Image 
        src={coverSrc}
        alt="Video Cover"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
        <div className="w-16 h-16 bg-[#FF0000] border-4 border-gray-900 flex items-center justify-center rounded-full pl-2 group-hover:scale-110 transition-transform">
          <span className="text-white text-2xl">▶</span>
        </div>
      </div>
    </div>
  );
}