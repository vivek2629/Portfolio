import { CiMail } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa6";

import { useState } from "react";

import { useTheme } from "../ContextAPI/ThemeContext";

import emailjs from "@emailjs/browser";

function Contact() {
  const context = useTheme();
  const { theme } = context;

  type FormData = {
    user_name: string;
    user_email: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [mailStatus, setMailStatus] = useState<boolean>();

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formValidation = () => {
    let tempError: any = {};

    // user name validation

    if (!formData.user_name.trim()) {
      tempError.user_name = "Name is require";
    }

    // email validation using regex pattern

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.user_email.trim()) {
      tempError.user_email = "Email is require";
    } else if (!emailRegex.test(formData.user_email)) {
      tempError.user_email = "Please enter a valid email address";
    }

    // message validation

    if (!formData.message.trim()) {
      tempError.message = "Message cannot be empty";
    } else if (formData.message.trim().length > 2000) {
      tempError.message = "Message cannot exceed 2000 characters";
    }

    setFormErrors(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailStatus(undefined);

    if (formValidation()) {
      console.log("Form submitted successfully:", formData);

      try {
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;
        console.log(publicKey, serviceId, templateId);
        const response = await emailjs.send(serviceId, templateId, formData, {
          publicKey,
        });

        if (response.status === 200) {
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setMailStatus(true);
        }
      } catch (error) {
        console.error("FAILED TO SEND EMAIL:", error);
        setMailStatus(false);
      }
    }
  };

  return (
    <section className="mt-20">
      <div className="mb-5">
        <h2 className="text-xs tracking-widest text-gray-500 mb-4">
          LET'S WORK TOGETHER
        </h2>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-[100%] md:w-100 bg-[#565656]/9 rounded-xl">
          <div className="header flex flex-col gap-2 p-4">
            <h2
              className={`${theme === "light" ? "text-black" : "text-white "} "text-[15px]"`}
            >
              Get in Touch
            </h2>
            <p
              className={`${theme === "light" ? "text-[#575757] text-[12px]" : "text-[#BABABA] text-[12px]"} `}
            >
              Choose your preferred method to connect and let's discuss your
              project.
            </p>
          </div>
          <hr
            className={`${theme === "light" ? "border border-[#999999]/20" : "border border-[#FFFFFF]/9"}`}
          />
          <div
            className={`${
              theme === "light"
                ? "hover:bg-black/[0.04]"
                : "hover:bg-white/[0.05]"
            } group flex justify-between p-4 items-center rounded-lg cursor-pointer transition-all duration-300 ease-out`}
          >
            <div className="flex items-center gap-4">
              <CiMail
                className={`${theme === "light" ? "text-black" : "text-[#BABABA] group-hover:text-white"}"transition-colors duration-300
           "`}
              />
              <a
                href="mailto:vivek29.ccbp.tech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h4
                    className={`${theme === "light" ? "text-[#4a4a4a] text-[12px]" : "text-white text-[12px] "} " transition-colors duration-300"`}
                  >
                    tvivek92224@gmail.com
                  </h4>
                  <p
                    className={`${theme === "light" ? "text-[#808080]" : "text-[#BABABA]"} "m-0 text-[12px] transition-colors duration-300
           group-hover:text-gray-300"`}
                  >
                    Quick inquiries & questions
                  </p>
                </div>
              </a>
            </div>
            <FiArrowUpRight
              className={`${
                theme === "light"
                  ? "text-[#666666] group-hover:text-black"
                  : "text-[#BABABA] group-hover:text-white"
              } text-[15px] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}
            />
          </div>
          <hr
            className={`${theme === "light" ? "border border-[#999999]/20" : "border border-[#FFFFFF]/9"}`}
          />
          <div
            className="group flex justify-between p-4 items-center
           rounded-lg cursor-pointer
           transition-all duration-300 ease-out
           hover:bg-white/[0.05]"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin
                className={`${theme === "light" ? "text-black" : "text-[#BABABA] group-hover:text-white"}"transition-colors duration-300
           "`}
              />
              <a
                href="https://www.linkedin.com/in/t-vivek-757234250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h4
                    className={`${theme === "light" ? "text-[#4a4a4a] text-[12px]" : "text-white text-[12px] "} " transition-colors duration-300"`}
                  >
                    Connect on LinkedIn
                  </h4>
                  <p
                    className={`${theme === "light" ? "text-[#808080]" : "text-[#BABABA]"} "m-0 text-[12px] transition-colors duration-300
           group-hover:text-gray-300"`}
                  >
                    Let's connect professionally
                  </p>
                </div>
              </a>
            </div>
            <FiArrowUpRight
              className={`${
                theme === "light"
                  ? "text-[#666666] group-hover:text-black"
                  : "text-[#BABABA] group-hover:text-white"
              } text-[15px] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}
            />
          </div>
          <hr
            className={`${theme === "light" ? "border border-[#999999]/20" : "border border-[#FFFFFF]/9"}`}
          />
          <div
            className="group flex justify-between p-4 items-center
           rounded-lg cursor-pointer
           transition-all duration-300 ease-out
           hover:bg-white/[0.05]"
          >
            <div className="flex items-center gap-4">
              <BsTwitterX
                className={`${theme === "light" ? "text-black" : "text-[#BABABA] group-hover:text-white"}"transition-colors duration-300
           "`}
              />
              <a
                href="https://x.com/The_vivek26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h4
                    className={`${theme === "light" ? "text-[#4a4a4a] text-[12px]" : "text-white text-[12px] "} " transition-colors duration-300"`}
                  >
                    Connect on X
                  </h4>
                  <p
                    className={`${theme === "light" ? "text-[#808080]" : "text-[#BABABA]"} "m-0 text-[12px] transition-colors duration-300
           group-hover:text-gray-300"`}
                  >
                    Follow my updates & insights
                  </p>
                </div>
              </a>
            </div>
            <FiArrowUpRight
              className={`${
                theme === "light"
                  ? "text-[#666666] group-hover:text-black"
                  : "text-[#BABABA] group-hover:text-white"
              } text-[15px] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}
            />
          </div>
          <hr
            className={`${theme === "light" ? "border border-[#999999]/20" : "border border-[#FFFFFF]/9"}`}
          />
          <div className="p-4 mt-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <IoMdTime className="text-[#404040] text-[14px]" />
              <p className="text-[#616161] text-[11px] ">
                Replies within 24 hours
              </p>
            </div>
            <div className="flex items-center gap-2">
              <SiTicktick className="text-[#404040] text-[14px]" />
              <p className="text-[#616161] text-[11px] ">
                Open to remote, freelance & full-time
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-100 bg-[#565656]/9 rounded-xl">
          <div className="header p-4 flex flex-col gap-2">
            <h2
              className={`${theme === "light" ? "text-black text-[15px]" : "text-white text-[15px]"} `}
            >
              Send a Message
            </h2>
            <p
              className={`${theme === "light" ? "text-[#575757] text-[14px]" : "text-[#BABABA] text-[14px]"} `}
            >
              Prefer to write? Fill out the form and I'll get back to you within
              24 hours.
            </p>
          </div>

          <form
            className="flex flex-col gap-4 p-4 mt-5"
            onSubmit={handleFormSubmission}
          >
            <div className="w-[100%]">
              <input
                type="text"
                name="user_name"
                placeholder="full name"
                onChange={handleFormData}
                value={formData.user_name}
                className={`${
                  theme === "light"
                    ? "border border-[#8a8a8a] text-[#474747]"
                    : "border border-[#1E1E1E] text-white"
                } " w-[100%] bg-transparent outline-none rounded-md p-2 text-[14px] placeholder:text-[#BABABA] placeholder:text-[14px]"`}
              />
              {formErrors.user_name && (
                <p className="text-red-600 text-[10px] m-0 p-0 pl-2">
                  {formErrors.user_name}
                </p>
              )}
            </div>
            <div className="w-[100%]">
              <input
                type="email"
                name="user_email"
                placeholder="email address"
                onChange={handleFormData}
                value={formData.user_email}
                className={`${
                  theme === "light"
                    ? "border border-[#8a8a8a] text-[#474747]"
                    : "border border-[#1E1E1E] text-white"
                } " w-[100%] bg-transparent outline-none rounded-md p-2 text-[14px] placeholder:text-[#BABABA] placeholder:text-[14px]"`}
              />
              {formErrors.user_email && (
                <p className="text-red-600 text-[10px] m-0 p-0 pl-2">
                  {formErrors.user_email}
                </p>
              )}
            </div>
            <div className="w-[100%]">
              <textarea
                name="message"
                placeholder="your message"
                onChange={handleFormData}
                value={formData.message}
                className={`${
                  theme === "light"
                    ? "border border-[#8a8a8a] text-[#474747]"
                    : "border border-[#1E1E1E] text-white"
                } " w-[100%] bg-transparent outline-none rounded-md p-2 text-[14px] placeholder:text-[#BABABA] placeholder:text-[14px]"`}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-600 text-[10px] m-0 p-0 pl-2">
                  {formErrors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`${theme === "light" ? "text-[#474747]" : "text-white"} " bg-transparent border border-[#1E1E1E] outline-none cursor-pointer text-[12px] h-10 rounded-md hover:bg-[#000000] transition-all duration-300 ease-out"`}
            >
              Send Message
            </button>
          </form>
          {mailStatus === true ? (
            <p className="text-[#3483eb] text-[12px] pl-4">Sent Successfully</p>
          ) : mailStatus === false ? (
            <p className="text-red-600 text-[12px] pl-4">
              Failed to send message
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Contact;
