import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../ContextAPI/ThemeContext";

import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";

import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

import Projects from "./Projects";
import Contact from "./Contact";
import Quote from "./Quote";
import Footer from "./Footer";

import "../Styles/styles.css";

const roles: string[] = [
  "Frontend Developer",
  "Full-Stack Developer",
  "Business-Minded Developer",
  "Technology Enthusiast",
  "Problem Solver",
];

function Home() {
  const context = useTheme();
  const { theme } = context;
  const timePerWord = 3;
  const totalDuration = roles.length * timePerWord;

  const renderProfileComponent = () => (
    <div className="profile-component flex items-center gap-4 mb-10">
      <div className="bg-gray-600 h-15 w-15 rounded-sm">
        <img
          src="https://res.cloudinary.com/dpencg7d8/image/upload/v1795069403/645131aa-5e01-4ca6-a0fd-29d750df8e16_yeqk20.jpg"
          alt="profile"
          className="h-full w-full object-cover object-center scale-120 rounded-sm"
        />
      </div>
      <div className="profile-details">
        <h2
          className={`${
            theme === "light" ? "text-olive-950" : "text-white"
          } text-lg md:text-2xl font-bold`}
        >
          Tungabhadra Vivek
        </h2>
        <div className="relative h-5 md:h-6 w-48">
          {roles.map((role, index) => (
            <span
              key={index}
              className="absolute top-0 left-0 text-zinc-500 text-[12px] md:text-[14px] font-medium opacity-0 animate-role-rotate whitespace-nowrap"
              style={{
                animationDuration: `${totalDuration}s`,
                animationDelay: `${index * timePerWord}s`,
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileLocationComponent = () => (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10 mb-6">
      <div className="location text-zinc-600 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em]">
        Location
        <div
          className={`${theme === "light" ? "text-zinc-700" : "text-zinc-300"} text-[12px] md:text-[14px] font-medium flex items-center gap-1 capitalize mt-1 tracking-[0.02em]`}
        >
          <IoLocationOutline />
          Hyderabad, India
        </div>
      </div>
      <div className="email text-zinc-600 text-[10px] sm:text-[11px] font-medium tracking-[0.14em]">
        EMAIL
        <div
          className={`${theme === "light" ? "text-zinc-700" : "text-zinc-300"} text-[12px] md:text-[14px] font-medium flex items-center gap-1 text-zinc-300 mt-1 tracking-[0.02em]`}
        >
          <CiMail />
          tvivek92224@gmail.com
        </div>
      </div>
      <div className="pronouns text-zinc-600 text-[10px] sm:text-[11px] font-medium tracking-[0.14em] hidden md:block">
        PRONOUNS
        <div
          className={`${theme === "light" ? "text-zinc-700" : "text-zinc-300"} text-[12px] md:text-[14px] font-medium flex items-center gap-1 text-zinc-300 mt-1 tracking-[0.02em]`}
        >
          <FiUser />
          he/him
        </div>
      </div>
    </div>
  );

  const renderProfileWorkComponent = () => (
    <p
      className={`${theme === "light" ? "text-zinc-600" : "text-[#b2b2b2]"} font-[450] text-[13.5px] md:text-[15px] font-medium leading-[1.85] mb-8`}
    >
      I build full-stack web products end-to-end, obsessing over small details
      that make software feel right to use. Currently working with TypeScript,
      React, Next.js, and Tailwind CSS.
    </p>
  );

  const renderProfileIcons = () => (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative group inline-block">
        <a
          href="https://x.com/The_vivek26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-zinc-500 text-[20px] hover:text-neutral-400 transition-colors cursor-pointer" />
        </a>

        {/* Tooltip text (hidden by default, shows on group hover) */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
          X (Twitter)
        </span>
      </div>
      <div className="relative group inline-block">
        <a
          href="https://github.com/vivek2629/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="text-zinc-500 text-[20px] hover:text-neutral-400 transition-colors cursor-pointer" />
        </a>

        {/* Tooltip text (hidden by default, shows on group hover) */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
          GitHub
        </span>
      </div>
      <div className="relative group inline-block">
        <a
          href="https://vivek29.ccbp.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGlobe className="text-zinc-500 text-[20px] hover:text-neutral-400 transition-colors cursor-pointer" />
        </a>

        {/* Tooltip text (hidden by default, shows on group hover) */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
          Website
        </span>
      </div>
      <div className="relative group inline-block">
        <a
          href="mailto:vivek29.ccbp.tech@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMailOutline className="text-zinc-500 text-[22px] hover:text-neutral-400 transition-colors cursor-pointer" />
        </a>

        {/* Tooltip text (hidden by default, shows on group hover) */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
          Email
        </span>
      </div>
    </div>
  );

  const renderGitHubComponent = () => {
    const customTheme = {
      dark: ["#151515", "#333333", "#666666", "#999999", "#CCCCCC"],
      light: ["#c6c6c6", "#bbb9b9", "#9f9f9f", "#6a6a6a", "#444444"],
    };

    return (
      <div className="text-white flex flex-col items-center max-w-3xl mx-auto mb-8 mt-13">
        {/* This renders the graph automatically */}
        {/* 1. BULLETPROOF CSS: Hides scrollbars across all browsers and forces text color */}
        <style>{`
      .clean-calendar-wrapper {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .clean-calendar-wrapper::-webkit-scrollbar,
      .clean-calendar-wrapper *::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
      }
      /* Fallback to ensure month text is always visible */
      .clean-calendar-wrapper text {
        fill: #9ca3af !important; 
      }
    `}</style>
        <div className="w-full overflow-x-auto clean-calendar-wrapper">
          <div className="flex justify-center min-w-[650px]">
            <GitHubCalendar
              username="vivek2629"
              colorScheme={theme}
              theme={customTheme}
              blockSize={12}
              blockMargin={4}
              blockRadius={0}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderTechSkillsComponent = () => (
    <div className="mt-10">
      <h2 className="text-xs tracking-widest text-gray-500 mb-4">
        TECH SKILLS
      </h2>
      <div className="flex opacity-95 flex-wrap gap-3 sm:gap-4 items-center mt-5">
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="typescript"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            TypeScript
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            JavaScript
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="python"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Python
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nodejs-alt.png"
            alt="nodejs"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Node.js
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="reactjs"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            React.js
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="tailwindcss"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Tailwind CSS
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="git"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Git
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            alt="mongodb"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            MongoDB
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt="figma"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Figma
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
            alt="reactrouter"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            React Router
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
            alt="sqlite"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            SQLite
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            alt="vscode"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            VS Code
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/n8n.png"
            alt="n8n"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            n8n
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src={`${theme === "light" ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" : "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/vercel-light.png"}`}
            alt="Vercel"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Vercel
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src={`${theme === "light" ? "https://dashboardicons.com/api/icons/external/simpleicons/render/brand.png" : "https://dashboardicons.com/api/icons/external/simpleicons/render/dark.png"}`}
            alt="render"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Render
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/gemini-color.png"
            alt="Gemini"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Gemini
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src={`${theme === "light" ? "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/light/groq.png" : "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/groq.png"}`}
            alt="Groq"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Groq
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/chatgpt.png"
            alt="chatgpt"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            ChatGPT
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/light/antigravity-color.png"
            alt="antigravity"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Antigravity
          </span>
        </div>
        <div className="relative group inline-flex">
          <img
            src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/claude-ai.svg"
            alt="claude-ai"
            className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain cursor-pointer transition-transform group-hover:scale-110 rounded-sm"
            height={36}
            width={36}
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
            Claude
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen md:pt-36 pt-30 mb-0 md:p-12">
      <div className="relative w-full max-w-3xl mx-auto px-6 lg:px-0">
        {renderProfileComponent()}
        {renderProfileLocationComponent()}
        {renderProfileWorkComponent()}
        {renderProfileIcons()}
        {renderGitHubComponent()}
        {renderTechSkillsComponent()}
        <Projects />
        <Contact />
        <Quote />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
