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
            <p className="text-xl font-medium mb-10 max-w-2xl text-gray-1000 mx-auto">
              Game Developer & Software Engineer. I specialize in building immersive games and robust core systems using Unity, Roblox, and other modern game engines.
            </p>
          </Reveal>
          
          <Reveal delay={0.5} type="pop">
            {/* เปลี่ยนจาก button เป็น a และใส่ path ไฟล์ resume */}
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
      <section id="projects" className="py-24 bg-[#e9ecef] border-b-4 border-gray-900">
        
        {/* หัวข้อ */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <Reveal delay={0.1}>
            <h2 className="text-5xl font-black text-center text-gray-900 uppercase">Featured Projects</h2>
          </Reveal>
        </div>
        
        <div className="w-full">
          <div className="flex overflow-x-auto gap-8 pt-4 pb-16 px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch lg:justify-center safe-area-padding">
            {/* ---------------- PROJECT 1: Outlander MMO ---------------- */}
            <div className="w-[85vw] md:w-[420px] shrink-0 snap-center md:snap-start flex flex-col [&>*]:h-full">
              <Reveal delay={0.2}>
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                  <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                    <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">outlander_mmo.exe</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed shrink-0">
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
                    <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight shrink-0">Outlander MMO</h3>
                    <p className="font-bold text-[#d43e35] mb-4 uppercase text-xs italic tracking-widest shrink-0">Professional Work @ KOS Design</p>
                    
                    <p className="mb-6 font-medium flex-grow text-gray-700">
                      Cross-platform MMORPG for iOS and Android. Engineered the core networking foundation using <span className="font-bold text-gray-900">FishNet</span>. Architected the game's data structures, managing complex player data pipelines from server initialization to UI binding and miscellaneous gameplay systems.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto shrink-0">
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#F5792A] text-white">Network</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#00A2FF] text-white">APIs</span>
                    </div>

                    <div className="flex gap-4 shrink-0">
                      <a 
                        href="https://apps.apple.com/us/app/outlanders-mmo/id6746841661" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-gray-800 border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                      >
                        App Store
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.outlanders.outlanders&hl=en_US" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-[#3DDC84] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-[#111827] shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                      >
                        Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---------------- PROJECT 2: Tales Twist ---------------- */}
            <div className="w-[85vw] md:w-[420px] shrink-0 snap-center md:snap-start flex flex-col [&>*]:h-full">
              <Reveal delay={0.4}>
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                  <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                    <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">tales_twist.exe</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed shrink-0">
                      <YouTubeEmbed 
                        videoId="eovw5RUtvKw" 
                        coverSrc="/tales-twist-cover.png" 
                      />
                      <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827] pointer-events-none z-10">
                        Senior Project
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight shrink-0">Tales Twist</h3>
                    <p className="font-bold text-[#9B4F96] mb-4 uppercase text-xs italic tracking-widest shrink-0">Solo Developer • CMU</p>
                    
                    <p className="mb-6 font-medium flex-grow text-gray-700">
                      A story-driven puzzle game based on Aesop's Fables. Trapped in a corrupted fairy tale world, you must secretly intervene, solve puzzles, and alter events to restore the original storylines—all without letting the characters know you exist.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto shrink-0">
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#00A2FF] text-white">Game Logic</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#f8f9fa] text-gray-900">Solo Dev</span>
                    </div>

                    <div className="flex gap-4 shrink-0">
                      <a 
                        href="https://www.youtube.com/watch?v=eovw5RUtvKw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-[#FF0000] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---------------- PROJECT 3: Not Me ---------------- */}
            <div className="w-[85vw] md:w-[420px] shrink-0 snap-center md:snap-start flex flex-col [&>*]:h-full">
              <Reveal delay={0.6}>
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                  <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                    <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">not_me_webgl.exe</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    
                    <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed shrink-0">
                      <Image 
                        src="/not-me-cover.png" 
                        alt="Not Me Gameplay"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827]">
                        Thailand Horror Jam 2023
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight shrink-0">Not Me</h3>
                    <p className="font-bold text-[#F5792A] mb-4 uppercase text-xs italic tracking-widest shrink-0">Solo Developer • Thailand Horror Jam</p>
                    
                    <p className="mb-6 font-medium flex-grow text-gray-700">
                      A stealth-action survival game where you play as a demon hiding among hunters. Maintain your human form by rolling the "Demon Dice" for extra time, or risk reverting to your true form! Use demonic powers to shoot, dash, and possess bodies to survive, or manually transform to rack up kill points.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto shrink-0">
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#E44D26] text-white">WebGL</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#f8f9fa] text-gray-900">Solo Dev</span>
                    </div>

                    <div className="flex gap-4 shrink-0">
                      <a 
                        href="https://tontae.itch.io/not-me" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-[#FA5C5C] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                      >
                        Play on Itch.io
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---------------- PROJECT 4: Fall Race ---------------- */}
            <div className="w-[85vw] md:w-[420px] shrink-0 snap-center md:snap-start flex flex-col [&>*]:h-full">
              <Reveal delay={0.8}>
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all h-full group">
                  <div className="bg-white border-b-4 border-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                    <span className="ml-2 font-mono text-xs font-bold text-gray-600 italic">fall_race.exe</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    
                    <div className="relative h-56 bg-gray-200 border-4 border-gray-900 mb-6 overflow-hidden group border-dashed shrink-0">
                      <Image 
                        src="/fall-race-cover.webp" 
                        alt="Fall Race Cover"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-2 py-1 font-black text-[10px] uppercase shadow-[2px_2px_0px_#111827]">
                        Live Now
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-1 text-gray-900 uppercase tracking-tight shrink-0">Fall Race</h3>
                    <p className="font-bold text-[#d43e35] mb-4 uppercase text-xs italic tracking-widest shrink-0">Professional Work @ KOS Design</p>
                    
                    <p className="mb-6 font-medium flex-grow text-gray-700">
                      A fast-paced multiplayer party game supporting up to 24 players in real-time. Navigate dynamic arenas, long race obstacles, and survivor platforms. I engineered the <span className="font-bold text-gray-900">core network</span>, <span className="font-bold text-gray-900">data structures</span>, authentication sign-in providers, and various REST API integrations.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto shrink-0">
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#222C37] text-white">Unity</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#9B4F96] text-white">C#</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#F5792A] text-white">Network</span>
                      <span className="text-xs font-bold border-2 border-gray-900 px-2 py-1 bg-[#00A2FF] text-white">APIs</span>
                    </div>

                    <div className="flex flex-col gap-3 shrink-0">
                      <a 
                        href="https://fallrace.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-center py-3 bg-[#00A2FF] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                      >
                        Official Website
                      </a>
                      <div className="flex gap-4">
                        <a 
                          href="https://apps.apple.com/th/app/fall-race-pro/id6751791249" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-gray-800 border-4 border-gray-900 font-black text-[10px] sm:text-xs text-white shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                        >
                          App Store
                        </a>
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.playnaka.fallrace&hl=th" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-[#3DDC84] border-4 border-gray-900 font-black text-[10px] sm:text-xs text-[#111827] shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block"
                        >
                          Google Play
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

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
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
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

      {/* 6. FOOTER (COPYRIGHT SECTION) */}
      <footer className="py-12 px-6 bg-white border-t-4 border-gray-900 text-center">
        <Reveal delay={0.1}>
          {/* ชื่อพอร์ตแบบดุดันตามสไตล์ Neobrutalism */}
          <h4 className="text-2xl font-black text-gray-900 uppercase italic">Tontae /// Software Engineer</h4>
        </Reveal>
        
        {/* เอา Reveal ออก เพื่อให้ข้อความโชว์ขึ้นมาทันที ไม่ต้องรอ Scroll เลื่อนมาโดน */}
        <p className="font-medium text-gray-700 max-w-xl mx-auto mb-2 mt-4">
          &copy; {new Date().getFullYear()} Dullayathit Phittayapanjarat. All rights reserved.
        </p>
        
        {/* กิมมิคเล็กๆ แบบ Game Dev */}
        <p className="text-xs font-mono text-gray-400 italic">
          Made with <span className="text-red-500 hover:scale-125 inline-block transition-transform duration-100">♥</span> and lots of Coffee in Chiang Mai.
        </p>
      </footer>
    </main>
  );
}