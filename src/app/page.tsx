'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import { projectsData, skillsData } from '../data/portfolioData';

const FloatingSymbols = dynamic(() => import('../components/FloatingSymbols'), { ssr: false });
const YouTubeEmbed = dynamic(() => import('../components/YouTubeEmbed'), { ssr: false });

const extendedProjects = Array(10).fill(projectsData).flat();

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 🌟 State สำหรับระบบ Terminal
  const [activeTab, setActiveTab] = useState('All');
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(true);

  // 🌟 แอนิเมชันพิมพ์คำสั่ง (Typing Effect) จะทำงานทุกครั้งที่เปลี่ยน Tab
  useEffect(() => {
    const cmd = `fetch_skills --category "${activeTab}"`;
    let currentIndex = 0;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowOutput(false);
    setTypedCommand('');

    const typingInterval = setInterval(() => {
      setTypedCommand(cmd.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === cmd.length) {
        clearInterval(typingInterval);
        // พิมพ์เสร็จ รอ 400ms จำลองการโหลด แล้วค่อยโชว์ผลลัพธ์
        setTimeout(() => setShowOutput(true), 400); 
      }
    }, 50); // ความเร็วในการพิมพ์ (ms)

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
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

  // ตัวแปรรวมสกิลที่ถูกกรองแล้ว
  const filteredSkills = skillsData.filter((skill) => activeTab === 'All' || skill.category === activeTab);

  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-gray-900 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 sm:p-6 bg-white border-b-4 border-gray-900">
        <div className="flex-1 flex justify-start items-center">
          <a href="#" className="block hover:scale-105 transition-transform duration-200">
            <img 
              src="/logo.svg"
              alt="Tontae Logo" 
              className="h-10 sm:h-12 w-auto object-contain" 
              loading="eager"
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
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[90vh] justify-center px-6 flex flex-col items-center text-center bg-[#d43e35] border-b-4 border-gray-900 overflow-hidden">
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
                  <div key={index} className="flex-none snap-start w-full md:w-1/2 lg:w-1/3 px-2 sm:px-3 py-2 sm:py-4">
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
                        <p className="mb-4 sm:mb-6 text-[11px] sm:text-base font-medium text-gray-700 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-4">{project.desc}</p>
                        <div className="flex overflow-x-auto gap-1.5 sm:gap-2 mb-4 sm:mb-8 shrink-0 mt-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

      {/* 4. SKILLS SECTION (Terminal / CLI Mode) */}
      <section id="skills" className="py-16 sm:py-24 px-6 bg-[#f8f9fa] border-b-4 border-gray-900 text-center min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-6 mb-8 sm:mb-12 flex flex-col items-center justify-center w-full">
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase italic text-center w-full">
              Technical Expertise
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-widest max-w-2xl mx-auto text-center w-full">
              Filter my skills and technical workflow using the terminal interface.
            </p>
          </Reveal>
        </div>
        
        {/* ปุ่มคำสั่งด้านบน */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto">
            {['All', 'Engine', 'Web', 'Languages', 'Tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (activeTab !== tab) setActiveTab(tab);
                }}
                className={`px-4 sm:px-6 py-2 border-[3px] border-gray-900 font-mono font-bold text-xs sm:text-sm transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-900 text-green-400 translate-y-1 translate-x-1 shadow-[0px_0px_0px_#111827]'
                    : 'bg-white text-gray-900 shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] hover:bg-gray-200' // สไตล์ปกติ
                }`}
              >
                ./run --{tab.toLowerCase()}
              </button>
            ))}
          </div>
        </Reveal>

        {/* 🌟 หน้าต่าง Terminal Neo-brutalism */}
        <Reveal delay={0.4} className="w-full">
          <div className="bg-black border-[3px] sm:border-4 border-gray-900 shadow-[6px_6px_0px_#111827] sm:shadow-[8px_8px_0px_#111827] overflow-hidden max-w-4xl mx-auto w-full text-left flex flex-col h-[400px] sm:h-[450px]">
            
            {/* Top Bar แบบ UI คอมพิวเตอร์ */}
            <div className="bg-[#e9ecef] border-b-[3px] sm:border-b-4 border-gray-900 px-4 py-2 sm:py-3 flex items-center justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 border-2 border-gray-900"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 border-gray-900"></div>
              </div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-gray-600">tontae@server: ~/skills</span>
              <div className="w-12"></div> {/* spacer ให้อยู่ตรงกลาง */}
            </div>

            {/* เนื้อหา Terminal */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-base text-gray-300 flex-grow overflow-y-auto selection:bg-green-500 selection:text-black">
              
              <div className="mb-4">
                <span className="text-green-500 font-bold">tontae@skills</span>:<span className="text-blue-400">~</span>$ {typedCommand}
                
                {/* Cursor กระพริบตอนกำลังพิมพ์ */}
                {!showOutput && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }} 
                    className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-gray-300 ml-1 align-middle"
                  ></motion.span>
                )}
              </div>

              {/* แสดงผลลัพธ์หลังจากพิมพ์คำสั่งเสร็จ */}
              {showOutput && (
                <div>
                  <p className="text-gray-500 mb-4">{'// Found ' + filteredSkills.length + ' dependencies for target "' + activeTab + '"'}</p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <AnimatePresence>
                      {filteredSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-green-500/40 bg-green-900/20 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition-colors cursor-default"
                        >
                          <span className="opacity-50 mr-2 text-[10px]">[{skill.category}]</span> 
                          <span className="font-bold">{skill.name}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Cursor รอรับคำสั่งใหม่ */}
                  <div className="mt-6 flex items-center">
                    <span className="text-green-500 font-bold">tontae@skills</span>:<span className="text-blue-400">~</span>$ 
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }} 
                      className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-gray-300 ml-1 align-middle"
                    ></motion.span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. CONTACT & FOOTER SECTION */}
      <section id="contact" className="min-h-[calc(100dvh-70px)] sm:min-h-[calc(100vh-100px)] flex flex-col bg-[#e9ecef] selection:bg-gray-900 selection:text-white">
        
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-24 w-full">
          <div className="w-full max-w-5xl mx-auto text-center">
            
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-3 sm:mb-6 text-gray-900 uppercase tracking-tight">
                Let&apos;s Build Magic
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="mb-8 sm:mb-14 lg:mb-16 font-medium text-xs sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
                Currently open for freelance projects and full-time opportunities.
              </p>
            </Reveal>
            
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 mb-8 sm:mb-16 w-full max-w-5xl mx-auto">
              <Reveal delay={0.3} type="pop" className="w-[48%] sm:w-auto">
                <a href="https://www.linkedin.com/in/dullayathit/" target="_blank" rel="noopener noreferrer" className="w-full px-2 sm:px-10 py-3 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-[11px] sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white">LinkedIn</a>
              </Reveal>
              <Reveal delay={0.4} type="pop" className="w-[48%] sm:w-auto">
                <a href="https://github.com/Tontae" target="_blank" rel="noopener noreferrer" className="w-full px-2 sm:px-10 py-3 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-[11px] sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 flex items-center justify-center hover:bg-black hover:text-white">GitHub</a>
              </Reveal>
              <Reveal delay={0.5} type="pop" className="w-[48%] sm:w-auto">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-full px-2 sm:px-10 py-3 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-[11px] sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 flex items-center justify-center hover:bg-black hover:text-white">X</a>
              </Reveal>
              <Reveal delay={0.6} type="pop" className="w-[48%] sm:w-auto">
                <a href="https://www.facebook.com/tontae.programmer" target="_blank" rel="noopener noreferrer" className="w-full px-2 sm:px-10 py-3 sm:py-4 bg-white border-[3px] sm:border-4 border-gray-900 font-black text-[11px] sm:text-lg shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all text-gray-900 flex items-center justify-center hover:bg-[#1877F2] hover:text-white">Facebook</a>
              </Reveal>
            </div>

            <Reveal delay={0.7} className="w-full">
              <div className="w-full max-w-3xl mx-auto pt-6 sm:pt-10 border-t-[3px] border-dashed border-gray-400/50 flex flex-col items-center">
                <div className="flex flex-col items-start gap-4 sm:gap-6 w-fit mx-auto">
                  <a href="tel:+66889168192" className="flex items-center gap-4 sm:gap-6 text-gray-800 hover:text-red-500 transition-colors group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-rotate-12 transition-transform duration-200"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.76 0 .99-.66.99-1.21v-3.42c0-.54-.45-.99-.99-.99z"/></svg>
                    <span className="font-bold text-lg sm:text-2xl tracking-tight">+66 88 916 8192</span>
                  </a>
                  <a href="mailto:dullayathit@gmail.com" className="flex items-center gap-4 sm:gap-6 text-gray-800 hover:text-[#d43e35] transition-colors group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <span className="font-bold text-lg sm:text-2xl tracking-tight">dullayathit@gmail.com</span>
                  </a>
                  {/* LINE */}
                  <a 
                    href="https://line.me/ti/p/~tontae_p" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 sm:gap-6 text-gray-800 hover:text-[#00C300] transition-colors group"
                  >
                    {/* 🌟 ปรับปรุงจากไฟล์ SVG จริงที่คุณส่งมา */}
                    <svg 
                      viewBox="0 0 2307.57 2198.74" 
                      fill="currentColor" 
                      className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"
                    >
                      <path d="M1153.78,0C517.58,0,0,420.03,0,936.31c0,462.85,410.95,850.55,964.86,923.76,37.63,8.11,88.78,24.77,101.65,56.88,11.68,29.2,7.68,74.95,3.79,104.36,0,0-13.52,81.44-16.44,98.74-5.08,29.2-23.25,114.09,99.92,62.29,123.18-51.8,664.44-391.26,906.46-669.95,167.19-183.3,247.33-369.74,247.33-576.08,0-516.28-517.58-936.31-1153.79-936.31ZM746.3,1212.83c0,11.95-9.68,21.63-21.63,21.63l.33-.32h-324.44c-11.94,0-21.62-9.69-21.62-21.63v-503.2c0-11.94,9.68-21.62,21.62-21.62h82.19c11.95,0,21.63,9.68,21.63,21.62v400.14h220.29c11.95,0,21.63,9.68,21.63,21.62v81.76ZM941.82,1212.4c0,12.18-9.87,22.06-22.06,22.06h-81.75c-12.19,0-22.07-9.88-22.07-22.06v-503.52c0-12.18,9.88-22.06,22.07-22.06h81.75c12.19,0,22.06,9.88,22.06,22.06v503.52ZM1498.44,1211.1c0,11.95-9.68,21.63-21.63,21.63h-81.32c-1.97-.03-3.93-.29-5.84-.76h-3.36l-1.08-.54h-.65l-1.29-.86c-2.21-1.51-4.12-3.42-5.63-5.63l-230.67-311.45v302.04c0,11.95-9.68,21.63-21.63,21.63h-81.86c-11.95,0-21.63-9.68-21.63-21.63v-503.51c0-11.95,9.68-21.63,21.63-21.63h91.6l1.19.65h.64l1.19.86h.65l1.19.98,1.3,1.29c.7.69,1.31,1.45,1.84,2.28l230.34,311.12v-299.12c0-11.95,9.69-21.63,21.63-21.63h81.76c.15,0,.29,0,.44.01,11.94.23,21.43,10.11,21.19,22.05v502.22h0ZM1924.43,1234.45c-.26.01-.51.01-.77.01h-324.43c-11.95,0-21.63-9.68-21.63-21.63v-503.41c0-11.94,9.68-21.63,21.63-21.63h324.43c11.94,0,21.63,9.69,21.63,21.63v81.87c0,11.94-9.69,21.63-21.63,21.63h-220.29v84.89h220.29c11.94,0,21.63,9.68,21.63,21.63v82.62c0,11.94-9.69,21.63-21.63,21.63h-220.29v85h220.29c11.94,0,21.63,9.68,21.63,21.63v81.75c.42,11.94-8.92,21.96-20.86,22.38h0Z"/>
                    </svg>
                    <span className="font-bold text-lg sm:text-2xl tracking-tight">tontae_p</span>
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* --- Footer --- */}
        <footer className="shrink-0 py-6 sm:py-8 px-4 sm:px-6 bg-white border-t-[3px] sm:border-t-4 border-gray-900 text-center overflow-hidden w-full z-10 relative">
          <h4 className="text-sm sm:text-xl font-black text-gray-900 uppercase italic whitespace-nowrap tracking-tighter sm:tracking-normal">
            Tontae /// Software Engineer
          </h4>
          <p className="font-medium text-[10px] sm:text-sm text-gray-700 max-w-xl mx-auto mb-1 mt-2 sm:mt-3 whitespace-nowrap">
            © {new Date().getFullYear()} Dullayathit Phittayapanjarat.
          </p>
          <p className="text-[9px] sm:text-[11px] font-mono text-gray-400 italic whitespace-nowrap">
            Made with <span className="text-red-500 hover:scale-125 inline-block transition-transform duration-100">♥</span> and lots of Coffee in Chiang Mai.
          </p>
        </footer>

      </section>
    </main>
  );
}