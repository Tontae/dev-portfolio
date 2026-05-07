import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 
import CustomCursor from "../components/CustomCursor"; // 1. นำเข้า Custom Cursor

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});

export const metadata = {
  title: 'Tontae | Game Developer & Software Engineer',
  description: 'Portfolio of Tontae, specializing in Unity, Roblox, and Full-Stack Game Development. Explore my featured projects and technical skills.',
  keywords: ['Game Developer', 'Unity', 'Roblox', 'C#', 'Software Engineer', 'Thailand'],
  openGraph: {
    title: 'Tontae | Game Developer Portfolio',
    description: 'Game Developer & Software Engineer specializing in Unity, Roblox, and robust multiplayer systems. Explore my portfolio of immersive projects.',
    url: 'http://tontae-developer-portfolio.vercel.app/', // เปลี่ยนเป็น URL จริงของคุณ
    siteName: 'Tontae Portfolio',
    images: [
      {
        url: '/logo.png', // รูปที่จะโชว์ตอนแชร์ลิงก์ (แนะนำขนาด 1200x630)
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tontae | Game Developer Portfolio',
    description: 'Game Developer & Software Engineer specializing in Unity, Roblox, and robust multiplayer systems. Explore my portfolio of immersive projects.',
    images: ['/logo.png'], 
  },
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