import { ReactNode } from 'react';

// 🌟 1. สร้างโครงสร้าง (Interface) ให้กับข้อมูล Project
export interface Project {
  exe: string;
  coverImg: string;
  youtubeId: string | null;
  badge: string;
  title: string;
  role: string;
  roleColor: string;
  desc: ReactNode; // ใช้ ReactNode เพราะใน desc มีแท็ก <span> และ <> </>
  tags: { 
    name: string; 
    bg: string; 
    text: string; 
  }[];
  buttons: ReactNode; // ใช้ ReactNode เพราะปุ่มเป็นก้อน HTML (div, a)
}

// 🌟 2. สร้างโครงสร้างให้ข้อมูล Skill
export interface Skill {
  name: string;
  color: string;
}

// 🌟 3. เอา Interface มาบังคับใช้กับตัวแปร (สังเกต : Project[] และ : Skill[])
export const projectsData: Project[] = [
  {
    exe: "tales_twist.exe",
    coverImg: "/project-cover/tales-twist-cover.png",
    youtubeId: "eovw5RUtvKw",
    badge: "Senior Project",
    title: "Tales Twist",
    role: "Solo Developer • CMU",
    roleColor: "text-[#9B4F96]",
    desc: <>A story-driven puzzle game based on Aesop&apos;s Fables. Trapped in a corrupted fairy tale world, you must secretly intervene, solve puzzles, and alter events to restore the original storylines—all without letting the characters know you exist.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "Game Logic", bg: "bg-[#00A2FF]", text: "text-white" },
      { name: "Solo Dev", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-2 sm:gap-4 shrink-0 w-full mt-auto">
        <a href="https://www.youtube.com/watch?v=eovw5RUtvKw" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-[#FF0000] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Watch on YouTube</a>
      </div>
    )
  },
  {
    exe: "outlander_mmo.exe",
    coverImg: "/project-cover/outlander-cover.webp",
    youtubeId: null,
    badge: "Live Now",
    title: "Outlander MMO",
    role: "Professional Work @ KOS Design",
    roleColor: "text-[#d43e35]",
    desc: <>Cross-platform MMORPG for iOS and Android. Engineered the core networking foundation using <span className="font-bold text-gray-900">FishNet</span>. Architected the game&apos;s data structures, managing complex player data pipelines from server initialization to UI binding and gameplay systems.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "FishNet", bg: "bg-[#F5792A]", text: "text-white" },
      { name: "Network", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-2 sm:gap-4 shrink-0 w-full mt-auto">
        <a href="https://apps.apple.com/us/app/outlanders-mmo/id6746841661" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-gray-800 border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=com.outlanders.outlanders&hl=en_US" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-[#3DDC84] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-[#111827] shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
      </div>
    )
  },
  {
    exe: "not_me_webgl.exe",
    coverImg: "/project-cover/not-me-cover.png",
    youtubeId: null,
    badge: "Horror Jam 2023",
    title: "Not Me",
    role: "Solo Developer • Horror Jam",
    roleColor: "text-[#F5792A]",
    desc: <>A stealth-action survival game where you play as a demon hiding among hunters. Maintain your human form by rolling the &quot;Demon Dice&quot; for extra time, or risk reverting to your true form! Use demonic powers to shoot, dash, and possess bodies to survive.</>,
    tags: [
      { name: "Unity", bg: "bg-[#222C37]", text: "text-white" },
      { name: "C#", bg: "bg-[#9B4F96]", text: "text-white" },
      { name: "WebGL", bg: "bg-[#E44D26]", text: "text-white" },
      { name: "Solo Dev", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-2 sm:gap-4 shrink-0 w-full mt-auto">
        <a href="https://tontae.itch.io/not-me" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-[#FA5C5C] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Play on Itch.io</a>
      </div>
    )
  },
  {
    exe: "fall_race.exe",
    coverImg: "/project-cover/fall-race-cover.webp",
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
      <div className="flex flex-col gap-2 sm:gap-3 shrink-0 w-full mt-auto">
        <a href="https://fallrace.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 sm:py-3 bg-[#00A2FF] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Official Website</a>
        <div className="flex gap-2 sm:gap-4">
          <a href="https://apps.apple.com/th/app/fall-race-pro/id6751791249" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-gray-800 border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.playnaka.fallrace&hl=th" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-[#3DDC84] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-[#111827] shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
        </div>
      </div>
    )
  },
  {
    exe: "trick_or_seek.exe",
    coverImg: "/project-cover/trick-or-seek-cover.png",
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
      <div className="flex flex-col gap-2 sm:gap-3 shrink-0 w-full mt-auto">
        <a href="https://www.trickorseek.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 sm:py-3 bg-[#00A2FF] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Official Website</a>
        <div className="flex gap-2 sm:gap-4">
          <a href="https://apps.apple.com/th/app/trick-or-seek/id6752919977?l=th" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-gray-800 border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-white shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.playnaka.trickorseek" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 sm:py-3 bg-[#3DDC84] border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-[#111827] shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all uppercase block">Google Play</a>
        </div>
      </div>
    )
  },
  {
    exe: "siam_playground.exe",
    coverImg: "/project-cover/siam-playground-cover.png",
    youtubeId: null,
    badge: "Roblox",
    title: "Siam Playground",
    role: "Roblox Developer @ KOS Design",
    roleColor: "text-[#00A2FF]",
    desc: <>A multiplayer &quot;Thai Countryside&quot; experience blending traditional games with a rural slow-life simulator. Players can hang out, earn Merit (Boon), and join Temple Fair minigames. I engineered the <span className="font-bold text-gray-900">shop and inventory systems</span>, <span className="font-bold text-gray-900">player data saving</span> (DataStore), game settings, and programmed various <span className="font-bold text-gray-900">UI interactions</span>.</>,
    tags: [
      { name: "Roblox Studio", bg: "bg-[#222C37]", text: "text-white" },
      { name: "Luau", bg: "bg-[#000080]", text: "text-white" },
      { name: "Data Store", bg: "bg-[#F5792A]", text: "text-white" },
      { name: "UI/UX", bg: "bg-[#f8f9fa]", text: "text-gray-900" }
    ],
    buttons: (
      <div className="flex gap-2 sm:gap-4 shrink-0 w-full mt-auto">
        <a 
          href="https://www.roblox.com/share?code=b3f75a4f6a8e6b479c54e349a3255b50&type=ExperienceDetails&stamp=1778142994360" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 text-center py-2 sm:py-3 bg-white border-2 sm:border-4 border-gray-900 font-black text-[9px] sm:text-xs text-gray-900 shadow-[2px_2px_0px_#111827] sm:shadow-[4px_4px_0px_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#111827] transition-all hover:bg-black hover:text-white uppercase block"
        >
          Play on Roblox
        </a>
      </div>
    )
  }
];

export const skillsData: Skill[] = [
  { name: "Unity", color: "hover:bg-[#222C37] hover:text-white" },
  { name: "Roblox Studio", color: "hover:bg-[#00A2FF] hover:text-white" },
  { name: "C#", color: "hover:bg-[#9B4F96] hover:text-white" },
  { name: "Luau", color: "hover:bg-[#000080] hover:text-white" },
  { name: "JavaScript", color: "hover:bg-[#F7DF1E] hover:text-black" },
  { name: "Next.js", color: "hover:bg-black hover:text-white" },
  { name: "Tailwind", color: "hover:bg-[#38B2AC] hover:text-white" },
  { name: "Dedicated Server", color: "hover:bg-[#4A5568] hover:text-white" },
  { name: "Firebase", color: "hover:bg-[#FFCA28] hover:text-black" },
  { name: "Xsolla", color: "hover:bg-[#FF0033] hover:text-white" },
  { name: "Blender", color: "hover:bg-[#F5792A] hover:text-white" }
];