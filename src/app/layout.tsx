import type { Metadata } from 'next'; // 🌟 1. นำเข้า Type ของ Metadata จาก Next.js
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 
import CustomCursor from "../components/CustomCursor";

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});

// 🌟 2. กำหนด Type เป็น : Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://tontae-developer-portfolio.vercel.app/'),
  title: 'Tontae | Game Developer & Software Engineer',
  description: 'Portfolio of Tontae, specializing in Unity, Roblox, and Full-Stack Game Development. Explore my featured projects and technical skills.',
  keywords: ['Game Developer', 'Unity', 'Roblox', 'C#', 'Software Engineer', 'Thailand'],
  openGraph: {
    title: 'Tontae | Game Developer Portfolio',
    description: 'Game Developer & Software Engineer specializing in Unity, Roblox, and robust multiplayer systems. Explore my portfolio of immersive projects.',
    url: 'https://tontae-developer-portfolio.vercel.app/',
    siteName: 'Tontae Portfolio',
    images: [
      {
        url: '/cover-display.png',
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
    images: ['/cover-display.png'], // 💡 แนะนำ: ใช้รูป cover-display เหมือน OpenGraph จะสวยกว่าโลโก้เพียวๆ ครับ
  },
};

// 🌟 3. บอกว่า children เป็นก้อน React (React.ReactNode)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/cover-display.png" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#d43e35" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased bg-[#f8f9fa] text-gray-900`}>
        
        {/* Performance monitoring in development */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                  }, 0);
                });
              `,
            }}
          />
        )}
        
        {/* 2. เรียกใช้งาน Custom Cursor ให้ทำงานครอบคลุมทั้งเว็บ */}
        <CustomCursor /> 
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}