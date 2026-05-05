'use client';

import { useEffect, useState } from 'react';

export default function FloatingSymbols() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    // ลดจำนวนลงเหลือ 12 ตัว (เพราะสัญลักษณ์ใหญ่ขึ้น ถ้ามีเยอะไปจะดูลายตา)
    const count = 12;
    const laneWidth = 100 / count; // ซอยหน้าจอเป็น 12 เลน (เลนละ ~8.33%)

    const generatedSymbols = Array.from({ length: count }).map((_, i) => {
      // พระเอกของเรา! บังคับให้อยู่ในเลนของตัวเอง (i * laneWidth) 
      // บวกค่าสุ่มนิดหน่อย (ไม่เกินครึ่งเลน) ให้ไม่ดูเรียงเป็นแถวทหารเกินไป
      const randomOffset = Math.random() * (laneWidth * 0.5); 
      const leftPosition = (i * laneWidth) + randomOffset;

      return {
        id: i,
        shapeId: Math.floor(Math.random() * 4),
        left: leftPosition, // อยู่ในเลนใครเลนมัน รับประกันว่าไม่ทับกันแนวนอน
        size: Math.random() * 40 + 40, // ขยายขนาดใหญ่ขึ้น (สุ่มระหว่าง 40px - 80px)
        duration: Math.random() * 15 + 20, // ลอยช้าลงนิดนึงเพื่อความสมูท (20-35 วินาที)
        delay: Math.random() * 30, // เวลาเริ่มติดลบ ให้ลอยตั้งแต่เปิดเว็บ
      };
    });
    
    // สลับตำแหน่งใน Array แบบสุ่ม เพื่อให้แอนิเมชันเกิดการเหลื่อมกันดูมีมิติมากขึ้น
    setSymbols(generatedSymbols.sort(() => Math.random() - 0.5));
  }, []);

  const renderShape = (id) => {
    const svgProps = {
      viewBox: "0 0 24 24",
      className: "w-full h-full fill-none stroke-current",
      // 👇 เปลี่ยนตรงนี้จาก "3" เป็น "2" เพื่อให้เส้นบางและคลีนขึ้นครับ
      strokeWidth: "2", 
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    
    switch(id) {
      case 0:
        return (
          <svg {...svgProps}>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        );
      case 1:
        return (
          <svg {...svgProps}>
            <circle cx="12" cy="12" r="7" />
          </svg>
        );
      case 2:
        return (
          <svg {...svgProps}>
            <polygon points="12,5 19,17.12 5,17.12" />
          </svg>
        );
      case 3:
        return (
          <svg {...svgProps}>
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (symbols.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes floatAndSpin {
          0% { top: 110%; transform: rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; } /* ลายน้ำจางๆ 20% เพื่อความคลีน ไม่แย่งซีนตัวหนังสือ */
          90% { opacity: 0.2; }
          100% { top: -30%; transform: rotate(360deg); opacity: 0; }
        }
      `}</style>

      {symbols.map((sym) => (
        <div
          key={sym.id}
          className="absolute text-white"
          style={{ 
            left: `${sym.left}%`, 
            width: `${sym.size}px`, 
            height: `${sym.size}px`,
            animation: `floatAndSpin ${sym.duration}s linear infinite`,
            animationDelay: `-${sym.delay}s`, 
            opacity: 0, 
          }}
        >
          {renderShape(sym.shapeId)}
        </div>
      ))}
    </div>
  );
}