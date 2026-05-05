import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 
import CustomCursor from "../components/CustomCursor"; // 1. นำเข้า Custom Cursor

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});

export const metadata = {
  title: "Tontae | Game Developer Portfolio",
  description: "Portfolio of Dullayathit Phittayapanjarat (Tontae), a Game Developer specializing in Unity and Web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased bg-[#f8f9fa] text-gray-900`}>
        
        {/* 2. เรียกใช้งาน Custom Cursor ให้ทำงานครอบคลุมทั้งเว็บ */}
        <CustomCursor /> 
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}