'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 🌟 1. บอก TypeScript ว่า e คือข้อมูลจากเมาส์ (MouseEvent)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 🌟 2. บอก TypeScript ว่า e คือ MouseEvent
    const handleMouseOver = (e: MouseEvent) => {
      // 🌟 3. บอกว่าเป้าหมายที่เมาส์ชี้อยู่คือ HTMLElement เพื่อให้เรียกใช้ tagName และ closest ได้
      const target = e.target as HTMLElement;
      
      if (
        target?.tagName?.toLowerCase() === 'button' || 
        target?.closest('a') || 
        target?.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      // เพิ่ม hidden md:flex เพื่อซ่อนในมือถือ (จอเล็ก) และค่อยโชว์เป็น flex ในจอ PC (md ขึ้นไป)
      className="hidden md:flex fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference items-center justify-center"
      animate={{
        x: mousePosition.x - 16, // ลบ 16 เพื่อให้จุดศูนย์กลางอยู่ตรงกลางเมาส์พอดี (ขนาด 32/2)
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1, // ขยายขนาดเมื่อชี้ปุ่ม
        rotate: isHovering ? 45 : 0, // หมุนเป็นตัว X เมื่อชี้ปุ่ม
      }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 30,
        mass: 0.2
      }}
    >
      {/* วาดรูปเป้าเล็ง (Crosshair) */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* จุดตรงกลาง */}
        <div className="w-1 h-1 bg-white rounded-full absolute" />
        {/* เส้นบน */}
        <div className="w-0.5 h-3 bg-white absolute top-0" />
        {/* เส้นล่าง */}
        <div className="w-0.5 h-3 bg-white absolute bottom-0" />
        {/* เส้นซ้าย */}
        <div className="h-0.5 w-3 bg-white absolute left-0" />
        {/* เส้นขวา */}
        <div className="h-0.5 w-3 bg-white absolute right-0" />
      </div>
    </motion.div>
  );
}