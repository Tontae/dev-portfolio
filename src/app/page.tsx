'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import FloatingSymbols from '../components/FloatingSymbols';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { projectsData, skillsData } from '../data/portfolioData';

const extendedProjects = Array(10).fill(projectsData).flat();

export default function Home() {
  // 🌟 1. บอก TypeScript ว่า ref นี้เอาไปแปะกับแท็ก <div> นะ (HTMLDivElement)
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      // 🌟 2. บอก TypeScript ว่า children[0] คือ Element ของ HTML ปกติ (as HTMLElement) จะได้เรียกใช้ offsetWidth ได้แบบไม่ Error
      const cardWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth; 
      scrollRef.current.scrollLeft = cardWidth * 25;
    }
  }, []);

  const handleNext = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const cardWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const cardWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-gray-900 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 sm:p-6 bg-white border-b-4 border-gray-900">
        <div className="flex-1 flex justify-start items-center">
          <a href="#" className="block hover:scale-105 transition-transform duration-200">
            <img 
              src="/logo.svg"
              alt="Tontae Logo" 
              className="h-14 sm:h-16 w-auto object-contain" 
            />
          </a>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center gap-12 font-bold text-lg">
          <a href="#projects" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Projects</a>
          <a href="#skills" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Skills</a>
          <a href="#contact" className="text-[#222222] hover:text-[#d43e35] transition-colors duration-300 no-underline">Contact</a>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="mailto:dullayathit@gmail.com" className="px-4 sm:px-6 py-2 bg-[#f8f9fa] border-4 border-gray-900 font-black text-xs sm:text-base text-gray-900 shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all hover:bg-red-500 hover:text-white whitespace-nowrap">
            Email Me
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative py-24 sm:py-32 px-6 flex flex-col items-center text-center bg-[#d43e35] border-b-4 border-gray-900 overflow-hidden">
        <FloatingSymbols />
        <div className="relative z-10 flex flex-col items-center w-full">
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight text-white">Hello, I&apos;m Tontae.</h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg sm:text-xl font-medium mb-10 max-w-2xl text-gray-1000 mx-auto">
              Game Developer & Software Engineer. I specialize in building immersive games and robust core systems using Unity, Roblox, and other modern game engines.
            </p>
          </Reveal>
          <Reveal delay={0.5} type="pop">
            <a 
              href="https://drive.google.com/file/d/1p_Ud6gYNlnPSNI1tUibuTWzLQ93mBzXp/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-4 border-gray-900 font-black text-base sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-gray-900 hover:text-white inline-block"
            >
              View My Resume
            </a>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-16 sm:py-24 bg-[#e9ecef] border-b-4 border-gray-900 overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-6 mb-8 sm:mb-12 flex flex-col items-center justify-center w-full">
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase text-center w-full">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-widest max-w-2xl mx-auto text-center w-full">
              Selected works. Many more projects delivered successfully.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="flex w-full items-center justify-between px-2 sm:px-6 lg:px-12 max-w-[1600px] mx-auto gap-1 sm:gap-4">
            
            <button onClick={handlePrev} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border-[3px] sm:border-4 border-gray-900 shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all flex items-center justify-center hover:bg-[#d43e35] hover:text-white z-10" aria-label="Previous Project">
              <svg className="w-5 h-5 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>

            <div className="flex-1 overflow-hidden">
              <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2 sm:py-4">
                
                {extendedProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="flex-none snap-start w-full md:w-1/2 lg:w-1/3 px-2 sm:px-3 py-2 sm:py-4"
                  >
                    <div className="bg-white border-[3px] sm:border-4 border-gray-900 shadow-[4px_4px_0px_#111827] sm:shadow-[8px_8px_0px_#111827] flex flex-col h-full hover:translate-y-1 hover:translate-x-1 sm:hover:translate-y-2 sm:hover:translate-x-2 hover:shadow-[0px_0px_0px_#111827] transition-all group">
                      
                      <div className="bg-white border-b-[3px] sm:border-b-4 border-gray-900 px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 border-2 border-gray-900"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                        <span className="ml-1 sm:ml-2 font-mono text-[9px] sm:text-xs font-bold text-gray-600 italic">{project.exe}</span>
                      </div>
                      
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        
                        <div className="relative aspect-video flex-none w-full bg-gray-200 border-[3px] sm:border-4 border-gray-900 mb-3 sm:mb-6 overflow-hidden border-dashed">
                          {project.youtubeId ? (
                            <YouTubeEmbed videoId={project.youtubeId} coverSrc={project.coverImg} />
                          ) : (
                            <Image 
                              src={project.coverImg} 
                              alt={project.title} 
                              fill 
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                              priority={index === 0}
                            />
                          )}
                          <div className="absolute top-2 right-2 bg-white border-2 border-gray-900 px-1.5 py-0.5 sm:px-2 sm:py-1 font-black text-[8px] sm:text-[10px] uppercase shadow-[2px_2px_0px_#111827] z-10 pointer-events-none">
                            {project.badge}
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-3xl font-black mb-0.5 sm:mb-1 text-gray-900 uppercase tracking-tight shrink-0">{project.title}</h3>
                        <p className={`font-bold ${project.roleColor} mb-2 sm:mb-4 uppercase text-[9px] sm:text-xs italic tracking-widest shrink-0`}>{project.role}</p>
                        
                        <p className="mb-4 sm:mb-6 text-[11px] sm:text-base font-medium text-gray-700 leading-snug sm:leading-relaxed">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-8 shrink-0 mt-auto">
                          {project.tags.map((tag, i) => (
                            <span key={i} className={`text-[9px] sm:text-xs font-bold border-2 border-gray-900 px-1.5 py-0.5 sm:px-2 sm:py-1 ${tag.bg} ${tag.text}`}>{tag.name}</span>
                          ))}
                        </div>

                        {project.buttons}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleNext} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border-[3px] sm:border-4 border-gray-900 shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all flex items-center justify-center hover:bg-[#00A2FF] hover:text-white z-10" aria-label="Next Project">
               <svg className="w-5 h-5 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </button>

          </div>
        </Reveal>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-16 sm:py-24 px-6 bg-white border-b-4 border-gray-900 text-center">
        <div className="max-w-[1400px] mx-auto px-6 mb-8 sm:mb-12 flex flex-col items-center justify-center w-full">
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase italic text-center w-full">
              Skills
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-widest max-w-2xl mx-auto text-center w-full">
              My core technologies. Highly adaptable to any engine or pipeline required.
            </p>
          </Reveal>
        </div>
        
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.05} type="pop">
              <div className={`px-5 sm:px-8 py-2.5 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-sm sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all cursor-default whitespace-nowrap ${skill.color}`}>
                {skill.name}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 px-6 bg-[#e9ecef] text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 text-gray-900 uppercase">Let&apos;s Build Magic</h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="mb-8 sm:mb-12 font-medium text-sm sm:text-lg text-gray-700">Currently open for freelance projects and full-time opportunities.</p>
        </Reveal>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <Reveal delay={0.3} type="pop">
            <a 
              href="mailto:dullayathit@gmail.com" 
              className="px-5 sm:px-8 py-2.5 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-sm sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-red-500 hover:text-white flex items-center justify-center min-w-[140px] md:min-w-0"
            >
              Email
            </a>
          </Reveal>
          
          <Reveal delay={0.4} type="pop">
            <a 
              href="https://github.com/Tontae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 sm:px-8 py-2.5 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-sm sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-black hover:text-white flex items-center justify-center min-w-[140px] md:min-w-0"
            >
              GitHub
            </a>
          </Reveal>
          
          <Reveal delay={0.5} type="pop">
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 sm:px-8 py-2.5 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-sm sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 cursor-pointer hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center min-w-[140px] md:min-w-0"
            >
              X
            </a>
          </Reveal>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-white border-t-4 border-gray-900 text-center overflow-hidden">
          <h4 className="text-sm sm:text-2xl font-black text-gray-900 uppercase italic whitespace-nowrap tracking-tighter sm:tracking-normal">
            Tontae /// Software Engineer
          </h4>
        <p className="font-medium text-xs sm:text-base text-gray-700 max-w-xl mx-auto mb-2 mt-2 sm:mt-4 whitespace-nowrap">
          © {new Date().getFullYear()} Dullayathit Phittayapanjarat.
        </p>
        <p className="text-[10px] sm:text-xs font-mono text-gray-400 italic whitespace-nowrap">
          Made with <span className="text-red-500 hover:scale-125 inline-block transition-transform duration-100">♥</span> and lots of Coffee in Chiang Mai.
        </p>
      </footer>
    </main>
  );
}