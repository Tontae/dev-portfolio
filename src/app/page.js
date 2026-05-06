'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import FloatingSymbols from '../components/FloatingSymbols';
import YouTubeEmbed from '../components/YouTubeEmbed';

// 🌟 ข้อมูลโปรเจกต์ทั้งหมด
const projectsData = [
  {
    exe: "outlander_mmo.exe",
    coverImg: "/outlander-cover.webp",
    youtubeId: null,
    badge: "Live Now",
    title: "Outlander MMO",
    role: "Professional Work @ KOS Design",
    roleColor: "text-[#d43e35]",
    desc: <>Cross-platform MMORPG for iOS and Android. Engineered the core networking foundation using <span className="font-bold text-gray-900">FishNet</span>. Architected the game's data structures, managing complex player data pipelines from server initialization to UI binding and gameplay systems.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "FishNet", bg: "bg-[#F5792A]", text: "text-white" },
      { name: "Network", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-4 shrink-0 w-full mt-auto">
        <a href="https://apps.apple.com/us/app/outlanders-mmo/id6746841661" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-black border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=com.outlanders.outlanders&hl=en_US" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-[#3DDC84] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-[#111827] shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
      </div>
    )
  },
  {
    exe: "tales_twist.exe",
    coverImg: "/tales-twist-cover.png",
    youtubeId: "eovw5RUtvKw",
    badge: "Senior Project",
    title: "Tales Twist",
    role: "Solo Developer • CMU",
    roleColor: "text-[#9B4F96]",
    desc: <>A story-driven puzzle game based on Aesop's Fables. Trapped in a corrupted fairy tale world, you must secretly intervene, solve puzzles, and alter events to restore the original storylines—all without letting the characters know you exist.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "Game Logic", bg: "bg-[#00A2FF]", text: "text-white" },
      { name: "Solo Dev", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-4 shrink-0 w-full mt-auto">
        <a href="https://www.youtube.com/watch?v=eovw5RUtvKw" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-[#FF0000] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Watch on YouTube</a>
      </div>
    )
  },
  {
    exe: "not_me_webgl.exe",
    coverImg: "/not-me-cover.png",
    youtubeId: null,
    badge: "Horror Jam 2023",
    title: "Not Me",
    role: "Solo Developer • Horror Jam",
    roleColor: "text-[#F5792A]",
    desc: <>A stealth-action survival game where you play as a demon hiding among hunters. Maintain your human form by rolling the "Demon Dice" for extra time, or risk reverting to your true form! Use demonic powers to shoot, dash, and possess bodies to survive.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "WebGL", bg: "bg-[#E44D26]", text: "text-white" },
      { name: "Solo Dev", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-4 shrink-0 w-full mt-auto">
        <a href="https://tontae.itch.io/not-me" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-[#FA5C5C] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Play on Itch.io</a>
      </div>
    )
  },
  {
    exe: "fall_race.exe",
    coverImg: "/fall-race-cover.webp",
    youtubeId: null,
    badge: "Live Now",
    title: "Fall Race",
    role: "Professional Work @ KOS Design",
    roleColor: "text-[#d43e35]",
    desc: <>A fast-paced multiplayer party game supporting up to 24 players in real-time. Navigate dynamic arenas and survivor platforms. I engineered the <span className="font-bold text-gray-900">core network</span>, <span className="font-bold text-gray-900">data structures</span>, authentication, and REST APIs.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "Network", bg: "bg-[#F5792A]", text: "text-white" },
      { name: "APIs", bg: "bg-[#00A2FF]", text: "text-white" },
      { name: "IAP", bg: "bg-[#FFD700]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex flex-col gap-3 shrink-0 w-full mt-auto">
        <a href="https://fallrace.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-[#00A2FF] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Official Website</a>
        <div className="flex gap-4">
          <a href="https://apps.apple.com/th/app/fall-race-pro/id6751791249" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-black border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.playnaka.fallrace&hl=th" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-[#3DDC84] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-[#111827] shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
        </div>
      </div>
    )
  },
  {
    exe: "trick_or_seek.exe",
    coverImg: "/trick-or-seek-cover.png",
    youtubeId: null,
    badge: "Live Now",
    title: "Trick or Seek",
    role: "Professional Work @ KOS Design",
    roleColor: "text-[#d43e35]",
    desc: <>A delightful multiplayer hide-and-seek game with anime charm and retro-futuristic flair. I engineered the <span className="font-bold text-gray-900">core network</span>, authentication, REST APIs, <span className="font-bold text-gray-900">data structures</span>, and integrated <span className="font-bold text-gray-900">In-App Purchases (IAP)</span>.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "Network", bg: "bg-[#F5792A]", text: "text-white" },
      { name: "APIs", bg: "bg-[#00A2FF]", text: "text-white" }
    ],
    buttons: (
      <div className="flex flex-col gap-3 shrink-0 w-full mt-auto">
        <a href="https://www.trickorseek.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-[#00A2FF] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Official Website</a>
        <div className="flex gap-4">
          <a href="https://apps.apple.com/th/app/trick-or-seek/id6752919977?l=th" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-black border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.playnaka.trickorseek" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-[#3DDC84] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-[#111827] shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
        </div>
      </div>
    )
  }
];

// ทริค Infinite Loop
const extendedProjects = Array(10).fill(projectsData).flat();

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      // ดึงความกว้างของการ์ด 1 ใบ (รวม padding ในตัวมันแล้ว)
      const cardWidth = scrollRef.current.children[0].offsetWidth; 
      // กระโดดมาที่ชุดที่ 5 เพื่อให้มีของเลื่อนซ้ายขวาได้ไม่รู้จบ
      scrollRef.current.scrollLeft = cardWidth * 25;
    }
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-gray-900 selection:text-white">
      
      {/* 1. NAVBAR */}
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

      {/* 2. HERO SECTION */}
      <section className="relative py-32 px-6 flex flex-col items-center text-center bg-[#d43e35] border-b-4 border-gray-900 overflow-hidden">
        <FloatingSymbols />
        <div className="relative z-10 flex flex-col items-center w-full">
          <Reveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white">Hello, I'm Tontae.</h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl font-medium mb-10 max-w-2xl text-gray-1000 mx-auto">
              Game Developer & Software Engineer. I specialize in building immersive games and robust core systems using Unity, Roblox, and other modern game engines.
            </p>
          </Reveal>
          <Reveal delay={0.5} type="pop">
            <a 
              href="https://drive.google.com/file/d/1p_Ud6gYNlnPSNI1tUibuTWzLQ93mBzXp/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-4 border-gray-900 font-black text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-gray-900 hover:text-white inline-block"
            >
              View My Resume
            </a>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-[#e9ecef] border-b-4 border-gray-900 overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <Reveal delay={0.1}>
            <h2 className="text-5xl font-black text-center text-gray-900 uppercase">Featured Projects</h2>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          {/* 🌟 ปรับระยะห่างระหว่างปุ่มกับ Container ให้พอดี */}
          <div className="flex w-full items-center justify-between px-2 sm:px-6 lg:px-12 max-w-[1600px] mx-auto gap-2 md:gap-4">
            
            {/* ปุ่มเลื่อนซ้าย: ปรับขนาดให้เล็กลงในมือถือ จะได้ไม่กินที่ */}
            <button onClick={handlePrev} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border-4 border-gray-900 font-black text-xl md:text-3xl shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all flex items-center justify-center hover:bg-[#d43e35] hover:text-white z-10" aria-label="Previous Project">
              &larr;
            </button>

            {/* พื้นที่แสดง Project Panel */}
            <div className="flex-1 overflow-hidden">
              {/* 🌟 ลบคำสั่ง gap ทิ้งไปเลย! ใช้ padding ภายในบัตรแทน */}
              <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4">
                
                {extendedProjects.map((project, index) => (
                  /* 
                    🌟 โครงสร้างใหม่ที่แก้บั๊ก 100%: 
                    - w-full ในมือถือ ทำให้การ์ดกว้าง 100% พอดีเป๊ะ ไม่ดันปุ่ม
                    - md:w-1/2 โชว์ 2 กล่องในแท็บเล็ต
                    - lg:w-1/3 โชว์ 3 กล่องในคอม
                    - px-3 คือเคล็ดลับ! ทำหน้าที่เป็นทั้ง gap และกันเงาโดนตัด!
                  */
                  <div 
                    key={index} 
                    className="flex-none snap-start w-full md:w-1/2 lg:w-1/3 px-3 py-4"
                  >
                    <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col h-full hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all group">
                      
                      <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                        <span className="ml-2 font-mono text-[10px] sm:text-xs font-bold text-gray-600 italic">{project.exe}</span>
                      </div>
                      
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        
                        <div className="relative aspect-video flex-none w-full bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden border-dashed">
                          {project.youtubeId ? (
                            <YouTubeEmbed videoId={project.youtubeId} coverSrc={project.coverImg} />
                          ) : (
                            <Image 
                              src={project.coverImg} 
                              alt={project.title} 
                              fill 
                              className="object-cover" 
                            />
                          )}
                          <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827] z-10 pointer-events-none">
                            {project.badge}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight shrink-0">{project.title}</h3>
                        <p className={`font-bold ${project.roleColor} mb-4 uppercase text-[10px] sm:text-xs italic tracking-widest shrink-0`}>{project.role}</p>
                        
                        <p className="mb-6 text-sm sm:text-base font-medium text-gray-700 leading-relaxed">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8 shrink-0 mt-auto">
                          {project.tags.map((tag, i) => (
                            <span key={i} className={`text-[10px] sm:text-xs font-bold border-2 border-gray-900 px-2 py-1 ${tag.bg} ${tag.text}`}>{tag.name}</span>
                          ))}
                        </div>

                        {project.buttons}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ปุ่มเลื่อนขวา */}
            <button onClick={handleNext} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border-4 border-gray-900 font-black text-xl md:text-3xl shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all flex items-center justify-center hover:bg-[#00A2FF] hover:text-white z-10" aria-label="Next Project">
              &rarr;
            </button>

          </div>
        </Reveal>
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
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <Reveal delay={0.3} type="pop">
            <a 
              href="mailto:dullayathit@gmail.com" 
              className="px-8 py-3 bg-white border-4 border-gray-900 font-black shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-red-500 hover:text-white inline-block"
            >
              Email
            </a>
          </Reveal>
          
          <Reveal delay={0.4} type="pop">
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

      {/* 6. FOOTER */}
      <footer className="py-12 px-6 bg-white border-t-4 border-gray-900 text-center">
        <Reveal delay={0.1}>
          <h4 className="text-2xl font-black text-gray-900 uppercase italic">Tontae /// Software Engineer</h4>
        </Reveal>
        
        <p className="font-medium text-gray-700 max-w-xl mx-auto mb-2 mt-4">
          &copy; {new Date().getFullYear()} Dullayathit Phittayapanjarat. All rights reserved.
        </p>
        
        <p className="text-xs font-mono text-gray-400 italic">
          Made with <span className="text-red-500 hover:scale-125 inline-block transition-transform duration-100">♥</span> and lots of Coffee in Chiang Mai.
        </p>
      </footer>
    </main>
  );
}