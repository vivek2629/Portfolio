import { MdFormatQuote } from "react-icons/md";

import { useTheme } from "../ContextAPI/ThemeContext";

function Quote() {
  const context = useTheme();
  const { theme } = context;
  return (
    <section className="mt-16 sm:mt-20">
      <div
        className={`${theme === "light" ? "bg-[#565656]/9" : "bg-[#D9D9D9]/3"} " rounded-lg p-6 flex flex-col gap-5"`}
      >
        <div className="flex gap-7 items-start">
          <MdFormatQuote className="text-[#b0b0b0] text-[40px]" />
          <p
            className={`${theme === "light" ? "text-[#363535]" : "text-[#b0b0b0]"} " mt-2 tracking-widest text-[12px] md:text-[14px] italic leading-[1.70]"`}
          >
            I can do all things through Christ who strengthens me.
          </p>
        </div>
        <p
          className={`${theme === "light" ? "text-black" : "text-white"} " self-end text-[12px] md:text-[14px]"`}
        >
          — Philippians 4:13
        </p>
      </div>
    </section>
  );
}

export default Quote;
