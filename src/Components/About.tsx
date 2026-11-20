import { useTheme } from "../ContextAPI/ThemeContext";
import Footer from "./Footer";

function About() {
  const context = useTheme();
  const { theme } = context;

  return (
    <section className="relative min-h-screen md:pt-36 pt-30 mb-0 md:p-12">
      <div className="relative w-full max-w-3xl mx-auto px-6 lg:px-0">
        {/* Background Image */}
        <div
          className={`${theme === "light" ? "hidden" : "block"} "pointer-events-none absolute right-0 top-0 z-0
                        h-[400px] w-full max-w-[370px]
                        overflow-hidden opacity-40 md:opacity-80"`}
        >
          <img
            src="https://res.cloudinary.com/dpencg7d8/image/upload/v1794639611/download_xvthzs.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center
                       grayscale"
          />

          {/* Dark overlay / fade effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-black via-black/30 to-black/50"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-black via-transparent to-black/20"
          />
        </div>

        {/* About Content */}
        <div className="relative z-10 max-w-[650px]">
          {/* Heading */}
          <div>
            <h1
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } text-xl md:text-xl`}
            >
              Hello I'm <span className="text-3xl md:text-4xl">Vivek</span>
            </h1>

            <h5
              className={`${theme === "light" ? "text-[#4a4a4a]" : "text-neutral-300"} mt-4 text-base md:text-lg`}
            >
              Where technology meets business innovation
            </h5>
          </div>

          {/* Description */}
          <div className="mt-7">
            <p
              className={`text-[13px] leading-[1.8] md:text-sm ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              I'm a developer passionate about building clean, responsive, and
              user-friendly web applications. I enjoy turning ideas into
              practical digital experiences using React, JavaScript, TypeScript,
              and modern web technologies.
              <br />
              <br />
              With a background in Business Administration and as an NxtWave
              CCBP Fellow, I've developed an interest in combining technology,
              creativity, and problem-solving. I'm continuously exploring
              full-stack development and AI integration while building projects
              that help me learn, experiment, and grow as a developer.
              <br />
              <br />
              I'm always curious to learn something new, take on challenges, and
              create meaningful solutions through code.
            </p>
          </div>

          {/* Let's Connect */}
          <div
            className={`${theme === "light" ? "bg-[#b8b8b8]" : "bg-[#D9D9D9]/3"} mt-16 p-3 max-w-[480px] pl-3 text-[13px] text-neutral-300 rounded-md`}
          >
            <h4
              className={`${theme === "light" ? "text-black" : "text-white"} mb-1`}
            >
              Let's connect
            </h4>
            <p
              className={`${theme === "light" ? "text-[#5e5e5e]" : "text-[#adacac]"} leading-relaxed`}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to chat about tech, I'd love to hear from you.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default About;
