import Image from 'next/image';
import Reveal from '../components/Reveal';
import FloatingSymbols from '../components/FloatingSymbols';
import YouTubeEmbed from '../components/YouTubeEmbed';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-gray-900 selection:text-white">
      
      {/* 1. NAVBAR (ไม่ใส่แอนิเมชัน ให้โหลดมาเห็นเลยทันที) */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-6 bg-white border-b-4 border-gray-900">
        <div className="w-1/3 flex justify-start items-center">
          <a href="#" className="block hover:scale-105 transition-transform duration-200">
            <Image src="/logo.png" alt="Tontae Logo" width={160} height={48} className="h-12 w-auto object-contain" priority />
          </a>
        </div>
        <div className="w-1/3 hidden md:flex justify-center items-center gap-12 font-bold text-lg">
          <a href="#projects" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Projects</a>
          <a href="#skills" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Skills</a>
          <a href="#contact" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Contact</a>
        </div>
        <div className="w-1/3 flex justify-end">
          <a href="mailto:dullayathit@gmail.com" className="px-6 py-2 bg-[#f8f9fa] border-4 border-gray-900 font-black text-gray-900 shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all hover:bg-red-500 hover:text-white">
            Email Me
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION (เพิ่ม relative และ overflow-hidden) */}
      <section className="relative py-32 px-6 flex flex-col items-center text-center bg-[#d43e35] border-b-4 border-gray-900 overflow-hidden">
        
        {/* 2. วาง Background Animation ไว้ชั้นล่างสุด */}
        <FloatingSymbols />

        {/* 3. ครอบเนื้อหาหลักด้วย relative z-10 เพื่อให้อยู่ด้านหน้าสุด */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <Reveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white">Hello, I'm Tontae.</h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            {/* เปลี่ยนข้อความเป็น text-white ให้เข้ากับพื้นแดง */}
            <p className="text-xl font-medium mb-10 max-w-2xl text-gray-1000 mx-auto">
              Game Developer & Programmer. I specialize in building immersive games and robust core systems using Unity, Roblox, and other modern game engines.
            </p>
          </Reveal>
          
          <Reveal delay={0.5} type="pop">
            <button className="px-8 py-4 bg-white border-4 border-gray-900 font-black text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-gray-900 hover:text-white">
              View My Resume
            </button>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-[#e9ecef] border-b-4 border-gray-900">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-5xl font-black mb-12 text-center text-gray-900 uppercase">Featured Projects</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1: Outlander MMO */}
            <Reveal delay={0.2}>
              <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                  <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">outlander_mmo.exe</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed">
                    <Image 
                      src="/outlander-cover.webp"
                      alt="Outlander MMO Cover"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827]">
                      Live Now
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight">Outlander MMO</h3>
                  <p className="font-bold text-[#d43e35] mb-4 uppercase text-xs italic tracking-widest">Professional Work @ KOS Design</p>
                  
                  <p className="mb-6 font-medium flex-grow text-gray-700">
                    Cross-platform MMORPG for iOS and Android. Engineered the core networking foundation using <span className="font-bold text-gray-900">FishNet</span>. Architected the game's data structures, managing complex player data pipelines from server initialization to UI binding and miscellaneous gameplay systems.
                  </p>
                  
                  {/* Tags สกิลที่ใช้ */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#F5792A] text-white">FishNet</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#f8f9fa] text-gray-900">Network</span>
                  </div>

                  {/* ปุ่ม Download Links */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href="https://apps.apple.com/us/app/outlanders-mmo/id6746841661" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-white border-4 border-gray-900 font-black text-xs shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all hover:bg-[#000000] hover:text-white uppercase"
                    >
                      App Store
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.outlanders.outlanders&hl=en_US" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-white border-4 border-gray-900 font-black text-xs shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all hover:bg-[#3DDC84] hover:text-[#111827] uppercase"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Project 2: Tales Twist */}
            <Reveal delay={0.4}>
              <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                  <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">tales_twist.exe</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed">
                    <YouTubeEmbed 
                      videoId="eovw5RUtvKw" 
                      coverSrc="/tales-twist-cover.png" 
                    />
                    <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827] pointer-events-none z-10">
                      Senior Project
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight">Tales Twist</h3>
                  <p className="font-bold text-[#9B4F96] mb-4 uppercase text-xs italic tracking-widest">Solo Developer • CMU</p>
                  
                  <p className="mb-6 font-medium flex-grow text-gray-700">
                    A story-driven puzzle game based on Aesop's Fables. Trapped in a corrupted fairy tale world, you must secretly intervene, solve puzzles, and alter events to restore the original storylines—all without letting the characters know you exist.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#00A2FF] text-white">Game Logic</span>
                    <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#f8f9fa] text-gray-900">Solo Dev</span>
                  </div>

                  {/* ปุ่ม Link ไป YouTube */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href="https://www.youtube.com/watch?v=eovw5RUtvKw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-[#FF0000] border-4 border-gray-900 font-black text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase flex items-center justify-center gap-2"
                    >
                      {/* แทรก SVG ของ YouTube */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 bg-white border-b-4 border-gray-900 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-5xl font-black mb-12 text-gray-900 uppercase italic">The Arsenal</h2>
        </Reveal>
        
        <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto">
          {[
            { name: "Unity", color: "hover:bg-[#222C37] hover:text-white" },
            { name: "C#", color: "hover:bg-[#9B4F96] hover:text-white" },
            { name: "Roblox Studio", color: "hover:bg-[#00A2FF] hover:text-white" },
            { name: "Lua", color: "hover:bg-[#000080] hover:text-white" },
            { name: "Next.js", color: "hover:bg-black hover:text-white" },
            { name: "Tailwind", color: "hover:bg-[#38B2AC] hover:text-white" },
            { name: "Blender", color: "hover:bg-[#F5792A] hover:text-white" }
          ].map((skill, index) => (
            // ตรงนี้ใช้ type="pop" เพื่อให้มันเด้งดึ๋งออกมาทีละอันตามลำดับ (index)
            <Reveal key={skill.name} delay={index * 0.1} type="pop">
              <div className={`px-6 py-3 bg-white border-4 border-gray-900 font-black text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all cursor-default ${skill.color}`}>
                {skill.name}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#e9ecef] text-center">
        <Reveal delay={0.1}>
          <h2 className="text-5xl font-black mb-6 text-gray-900 uppercase">Let's Build Magic</h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="mb-12 font-medium text-lg text-gray-700">Currently open for freelance projects and full-time opportunities.</p>
        </Reveal>
        
        <div className="flex justify-center gap-6">
          <Reveal delay={0.3} type="pop">
            {/* เปลี่ยนเป็นแท็ก a และใส่ mailto: */}
            <a 
              href="mailto:dullayathit@gmail.com" 
              className="px-8 py-3 bg-white border-4 border-gray-900 font-black shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-red-500 hover:text-white inline-block"
            >
              Email
            </a>
          </Reveal>
          
          <Reveal delay={0.4} type="pop">
            {/* เปลี่ยนเป็นแท็ก a และใส่ลิงก์ GitHub พร้อมสั่งให้เปิดแท็บใหม่ */}
            <a 
              href="https://github.com/Tontae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-4 border-gray-900 font-black shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-black hover:text-white inline-block"
            >
              GitHub
            </a>
          </Reveal>
          
          <Reveal delay={0.5} type="pop">
            {/* เปลี่ยนเป็นแท็ก a สำหรับ X (Twitter) */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-4 border-gray-900 font-black shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-[#1DA1F2] hover:text-white inline-block"
            >
              X
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}