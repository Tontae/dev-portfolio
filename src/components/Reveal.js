'use client';

import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, type = 'up' }) {
  // ตั้งค่ารูปแบบการโผล่ (up = เลื่อนขึ้น, pop = เด้งขยาย)
  let initialStyle = { opacity: 0 };
  if (type === 'up') initialStyle.y = 50;
  if (type === 'pop') initialStyle.scale = 0.5;

  return (
    <motion.div
      initial={initialStyle}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }} // ให้เล่นแค่ครั้งเดียวตอนเลื่อนมาถึง
      transition={{ 
        type: "spring", // ใช้ระบบฟิสิกส์สปริงให้ดูมีน้ำหนัก
        stiffness: 260, 
        damping: 20, 
        delay: delay 
      }}
      className={type === 'up' ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}