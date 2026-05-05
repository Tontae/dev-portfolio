import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 

// 1. นำเข้าฟอนต์จาก Google Fonts (เลือกได้ตามใจชอบ)
import { Space_Grotesk } from 'next/font/google';

// 2. ตั้งค่าฟอนต์
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  // กำหนดน้ำหนักฟอนต์ที่เราใช้ในเว็บ (ปกติ 400 คือธรรมดา, 700 หนา, 900 หนามาก)
  weight: ['400', '500', '700'], 
});

export const metadata = {
  title: "Tontae | Game Developer Portfolio",
  description: "Portfolio of Dullayathit Phittayapanjarat (Tontae), a Game Developer specializing in Unity and Web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. แทรก spaceGrotesk.className ลงไปใน tag body */}
      <body className={`${spaceGrotesk.className} antialiased bg-[#f8f9fa] text-gray-900`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}