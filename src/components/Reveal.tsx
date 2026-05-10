'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// 🌟 1. สร้าง Interface กำหนดหน้าตาของ Props
interface RevealProps {
  children: ReactNode;
  delay?: number; // เครื่องหมาย ? หมายถึง ไม่จำเป็นต้องส่งมาก็ได้ (เพราะมีค่าเริ่มต้นเป็น 0 อยู่แล้ว)
  type?: 'up' | 'pop'; // 🌟 ล็อกให้ใส่ได้แค่ 2 คำนี้เท่านั้น
  className?: string;
}

export default function Reveal({ children, delay = 0, type = 'up', className = '' }: RevealProps) {
  
  // 🌟 2. กำหนดโครงสร้างให้ initialStyle ว่าสามารถมี y กับ scale ซ่อนอยู่ได้นะ (ใส่ ? ไว้)
  let initialStyle: { opacity: number; y?: number; scale?: number } = { opacity: 0 };
  
  if (type === 'up') initialStyle.y = 50;
  if (type === 'pop') initialStyle.scale = 0.5;

  return (
    <motion.div
      className={`${type === 'up' ? "w-full" : ""} ${className}`.trim()}
      initial={initialStyle}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}