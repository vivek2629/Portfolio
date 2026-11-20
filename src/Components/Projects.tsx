import { FiGlobe } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { useTheme } from "../ContextAPI/ThemeContext";

function Projects() {
  const context = useTheme();
  const { theme } = context;
  return (
    <section className="mt-20">
      <div>
        <h2 className="text-xs tracking-widest text-gray-500 mb-4">
          FEATURED PROJECTS
        </h2>
      </div>
      <div
        className={`${theme === "light" ? "" : "border border-[#1E1E1E]"} "p-2 rounded-md flex flex-col gap-10 md:flex-row md:justify-between"`}
      >
        <div
          className={`${theme === "light" ? "border border-[#999999]/20" : "bg-[#D9D9D9]/3"} w-[100%] md:w-90 rounded-md flex flex-col gap-5`}
        >
          <div className="project-image h-50 w-[100%]">
            <img
              src="https://res.cloudinary.com/dpencg7d8/image/upload/v1792487313/Screenshot_2026-09-15_231854_s75n1g.png"
              alt="recipe ai"
              className="h-full w-full rounded-md"
            />
          </div>
          <div className="project-info flex flex-col gap-5 pl-4 pr-4 pb-3">
            <div className="flex flex-col gap-1">
              <h2
                className={`${theme === "light" ? "text-[#050505] font-normal text-[14px] md:text-[15px]" : "text-white text-[14px] md:text-[15px]"}`}
              >
                Recipe AI
              </h2>
              <p
                className={`${theme === "light" ? "text-[#333333] text-[10px] md:text-[12px] leading-[1.85]" : "text-white text-[10px] md:text-[12px] leading-[1.85]"} `}
              >
                An AI-powered recipe assistant that helps users discover
                personalized recipes through an interactive chat interface,
                built with React, Node.js, MongoDB, and Groq.
              </p>
            </div>
            <div className="card-footer flex justify-between">
              <div className="flex gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="reactjs"
                  className="h-5"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="tailwindcss"
                  className="h-5"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg"
                  alt="nodejs"
                  className="h-5"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="mongodb"
                  className="h-5"
                />

                <img
                  src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/groq.png"
                  alt="groq"
                  className="h-5"
                />
              </div>

              <div className="demos flex gap-4">
                <a href="https://recipe-ai-v3-0.vercel.app/" target="_blank">
                  <FiGlobe className="text-[#5781ff] text-[18px]" />
                </a>
                <a
                  href="https://github.com/vivek2629/Recipe-AI-V3.0"
                  target="_blank"
                >
                  <LuGithub className="text-[#8915b3] text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${theme === "light" ? "border border-[#999999]/20" : "bg-[#D9D9D9]/3"} w-[100%] md:w-90 rounded-md flex flex-col gap-5`}
        >
          <div className="project-image h-50 w-[100%]">
            <img
              src="https://res.cloudinary.com/dpencg7d8/image/upload/v1793428052/1788883789324_xq9tpb.jpg"
              alt="nxtwatch"
              className="h-full w-full rounded-md"
            />
          </div>
          <div className="project-info flex flex-col gap-5 pl-4 pr-4 pb-3">
            <div className="flex flex-col gap-1">
              <h2
                className={`${theme === "light" ? "text-[#050505] font-normal text-[14px] md:text-[15px]" : "text-white text-[14px] md:text-[15px]"} `}
              >
                Nxtwatch
              </h2>
              <p
                className={`${theme === "light" ? "text-[#333333] text-[10px] md:text-[12px] leading-[1.85]" : "text-white text-[10px] md:text-[12px] leading-[1.85]"} `}
              >
                ID: rahul, Password: rahul@2021 A YouTube-inspired video
                streaming application featuring video browsing, category-based
                filtering, search, and a responsive interface built with React.
              </p>
            </div>
            <div className="card-footer flex justify-between">
              <div className="flex gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="reactjs"
                  className="h-5"
                />

                <img
                  src="https://res.cloudinary.com/dpencg7d8/image/upload/v1793428263/CSS3_q0jtcf.png"
                  alt="css"
                  className="h-5"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg"
                  alt="nodejs"
                  className="h-5"
                />
              </div>

              <div className="demos flex gap-4">
                <a href="https://nxtwatchvk26.ccbp.tech/login" target="_blank">
                  <FiGlobe className="text-[#5781ff] text-[18px]" />
                </a>
                <a href="https://github.com/vivek2629/Nxtwatch" target="_blank">
                  <LuGithub className="text-[#8915b3] text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
