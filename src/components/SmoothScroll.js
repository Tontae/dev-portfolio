'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. ตั้งค่า Lenis Engine
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. ใช้ Event Delegation ดักฟังการคลิกทั้งหน้าต่าง
    const handleClick = (e) => {
      // หาแท็ก <a> ที่ใกล้ที่สุดจากการคลิก
      const anchor = e.target.closest('a'); 
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