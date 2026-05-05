'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSymbols() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    // สัญลักษณ์ปุ่มจอยสติ๊ก
    const shapes = ['✕', '○', '△', '□'];
    
    // สุ่มสร้างขึ้นมา 15 ตัว
    const generatedSymbols = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      left: Math.random() * 100, // สุ่มตำแหน่งแนวนอน (0-100%)
      size: Math.random() * 30 + 20, // สุ่มขนาด (20px - 50px)
      delay: Math.random() * 5, // สุ่มดีเลย์เริ่มลอย
      duration: Math.random() * 10 + 15, // สุ่มความเร็วลอยขึ้น (15-25 วินาที จะลอยช้าๆ)
    }));
    
    setSymbols(generatedSymbols);
  }, []);

  return (
    // z-0 ทำให้อยู่หลังสุด และ pointer-events-none ทำให้เมาส์ทะลุได้ (ไม่บังปุ่ม)
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {symbols.map((sym) => (
        <motion.div
          key={sym.id}
          className="absolute text-white/20 font-black select-none" // ลายน้ำสีขาวจางๆ 20%
          style={{ left: `${sym.left}%`, fontSize: sym.size, top: '110%' }}
          animate={{ 
            top: '-20%', // ลอยจากล่างขึ้นบนสุด
            rotate: 360, // หมุนรอบตัวเองช้าๆ
            opacity: [0, 1, 1, 0] // ค่อยๆ เฟดเข้าตอนเกิด และเฟดออกตอนตาย
          }}
          transition={{
            duration: sym.duration,
            repeat: Infinity,
            delay: sym.delay,
            ease: "linear"
          }}
        >
          {sym.shape}
        </motion.div>
      ))}
    </div>
  );
}