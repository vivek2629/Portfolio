import { useTheme } from "../ContextAPI/ThemeContext";
import { Link } from "react-router-dom";

import { CiLight, CiDark } from "react-icons/ci";

function Headers() {
  const context = useTheme();
  const { theme, toggleTheme } = context;

  return (
    <header
      className={`${theme === "light" ? "bg-olive-100" : "bg-black"} fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out`}
    >
      <nav className="relative w-full max-w-3xl mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between h-15">
          <ul className="flex gap-10">
            <li
              className={`${theme === "light" ? "text-gray-950" : "text-white"}`}
            >
              <Link to="/"> Home </Link>
            </li>
            <li
              className={`${theme === "light" ? "text-gray-950" : "text-white"}`}
            >
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <div> 
            {theme === "light" ? (
              <CiDark
                className="text-black text-[18px]"
                onClick={toggleTheme}
              />
            ) : (
              <CiLight
                className="text-white text-[18px]"
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
