import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { MdMailOutline } from "react-icons/md";

import { useTheme } from "../ContextAPI/ThemeContext";

function Footer() {
  const context = useTheme();
  const { theme } = context;
  return (
    <footer className="mt-16 pb-10">
      <div
        className={`${theme === "light" ? "border-t border-[#999999]" : "border-t border-[#FFFFFF]/9"}`}
      >
        <div className="mt-5 flex justify-between items-center">
          <h1 className="text-[#5c5c5c] text-[14px]">
            &copy; 2026 Vivek. All rights reserved.
          </h1>
          <div className="flex gap-3 items-center">
            <div className="relative group inline-block">
              <a
                href="https://x.com/The_vivek26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-[#5c5c5c] text-[20px] hover:text-neutral-400 transition-colors cursor-pointer" />
              </a>

              {/* Tooltip text (hidden by default, shows on group hover) */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
                X (Twitter)
              </span>
            </div>
            <div className="relative group inline-block">
              <a
                href="mailto:vivek29.ccbp.tech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdMailOutline className="text-[#5c5c5c] text-[22px] hover:text-neutral-400 transition-colors cursor-pointer" />
              </a>

              {/* Tooltip text (hidden by default, shows on group hover) */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
                Email
              </span>
            </div>
            <div className="relative group inline-block">
              <a
                href="https://github.com/vivek2629/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-[#5c5c5c] text-[20px] hover:text-neutral-400 transition-colors cursor-pointer" />
              </a>

              {/* Tooltip text (hidden by default, shows on group hover) */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-neutral-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
