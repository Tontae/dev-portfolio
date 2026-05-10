'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

// 🌟 1. กำหนด Type ให้ Props
interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // 1. ตั้งค่า Lenis Engine
    const lenis = new Lenis({
      duration: 1.2, 
      // 🌟 2. กำหนดให้ t เป็นตัวเลข (number)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    // 🌟 3. กำหนดให้ time เป็นตัวเลข (number)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. ใช้ Event Delegation ดักฟังการคลิกทั้งหน้าต่าง
    // 🌟 4. กำหนดให้ e เป็น MouseEvent
    const handleClick = (e: MouseEvent) => {
      // 🌟 5. ยืนยันว่า e.target คือ HTMLElement เพื่อให้ใช้คำสั่ง .closest() ได้
      const target = e.target as HTMLElement;
      
      // หาแท็ก <a /> ที่ใกล้ที่สุดจากการคลิก
      const anchor = target.closest('a'); 
      if (!anchor) return; // ถ้าไม่ได้คลิกโดนลิงก์ ให้ผ่านไป

      const href = anchor.getAttribute('href');
      
      // ถ้าลิงก์เริ่มต้นด้วย # ให้รัน Smooth Scroll
      if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
      } else if (href && href.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -100, duration: 1.2 });
      }
    };

    // แปะตัวดักฟังไว้ที่ document เลย (ทำงานได้ชัวร์แม้ปุ่มจะโหลดทีหลัง)
    document.addEventListener('click', handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <>{children}</>;
}