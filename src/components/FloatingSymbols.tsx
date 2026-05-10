'use client';

import { useEffect, useState } from 'react';

// 🌟 1. สร้าง Interface เพื่อบอกว่าข้อมูลสัญลักษณ์ 1 ตัว มีตัวเลขอะไรบ้าง
interface FloatingSymbol {
  id: number;
  shapeId: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingSymbols() {
  // 🌟 2. ใส่ <FloatingSymbol[]> เพื่อบอกว่า symbols เป็น Array ของข้อมูลด้านบนนะ
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const count = 12;
    const laneWidth = 100 / count; 

    // 🌟 3. บอกว่า Array.from นี้จะคืนค่าออกมาเป็น FloatingSymbol[]
    const generatedSymbols: FloatingSymbol[] = Array.from({ length: count }).map((_, i) => {
      const randomOffset = Math.random() * (laneWidth * 0.5); 
      const leftPosition = (i * laneWidth) + randomOffset;

      return {
        id: i,
        shapeId: Math.floor(Math.random() * 4),
        left: leftPosition, 
        size: Math.random() * 40 + 40, 
        duration: Math.random() * 15 + 20, 
        delay: Math.random() * 30, 
      };
    });
    
    setSymbols(generatedSymbols.sort(() => Math.random() - 0.5));
  }, []);

  // 🌟 4. ระบุว่ารับค่า id เป็นตัวเลข (number)
  const renderShape = (id: number) => {
    const svgProps = {
      viewBox: "0 0 24 24",
      className: "w-full h-full fill-none stroke-current",
      strokeWidth: "2", 
      strokeLinecap: "round" as const, // 🌟 ทริค TS: ใส่ as const เพื่อยืนยันว่ามันคือคำว่า round เป๊ะๆ ไม่ใช่ string ธรรมดา
      strokeLinejoin: "round" as const,
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
          10% { opacity: 0.2; } 
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