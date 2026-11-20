import { ThemeContext } from "./ContextAPI/ThemeContext";
import { useState } from "react";
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Headers />

        <main
          className={`${theme === "light" ? "bg-olive-100" : "bg-black"} relative z-10 transition-colors duration-300 ease-in-out`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
