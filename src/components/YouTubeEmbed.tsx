'use client';

import { useState } from 'react';
import Image from 'next/image';

// 🌟 1. สร้าง Interface กำหนดชนิดของ Props
interface YouTubeEmbedProps {
  videoId: string;
  coverSrc: string;
}

// 🌟 2. นำ Interface มาครอบ Props ของ Component
export default function YouTubeEmbed({ videoId, coverSrc }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // เมื่อกดเล่น โหลด YouTube Embed ปกติ
  if (isPlaying) {
    return (
      <iframe 
        className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-auto z-20"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`} 
        title="Gameplay Video" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    );
  }

  // ตอนยังไม่กดเล่น โชว์รูปหน้าปกและปุ่ม Play แบบ Custom
  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer group z-10"
      onClick={() => setIsPlaying(true)}
    >
      <Image 
        src={coverSrc} 
        alt="Video cover" 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover" 
      />
      
      {/* พื้นหลังจางๆ ตอนเอาเมาส์มาชี้ */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
        
        {/* CONTAINER ปุ่ม PLAY (วงกลมแดง) */}
        <div className="w-16 h-16 bg-[#FF0000] flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
          
          {/* ไอคอนสามเหลี่ยม (จัดกึ่งกลางเป๊ะ) */}
          <div className="text-white text-3xl translate-x-0.5">
            ▶
          </div>

        </div>
      </div>
    </div>
  );
}