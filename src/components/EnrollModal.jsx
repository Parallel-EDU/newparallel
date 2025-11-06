"use client";
import { useModal } from "@/app/context/ModalContext";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function EnrollModal() {
  const { isOpen, closeModal } = useModal();

  const clientanimation = useRef(null);
  const [Role, setRole] = useState("Select an option");
  const leadinganimation = useRef(null);
  const [filled, setfilled] = useState("");
  const [isOpenn, setIsOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  // const clientanimation = useRef(null);
  // const leadinganimation = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpenn);
  };

  const handleClose = () => {
    closeModal(); // from context
    setIsOpen(false); // your local state
  };

  const handleOptionSelect = (option) => {
    setRole(option);
    setIsOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name === "") {
      setfilled("name");
    } else if (Email === "") {
      setfilled("email");
    } else if (Phonenumber === "") {
      setfilled("phone");
    } else if (Role === "Select an option") {
      setfilled("I am");
    } else {
      const data = {
        Name,
        Email,
        Phonenumber,
        Role,
      };
      try {
        const response = await axios.post("/api/home", data);
        setfilled("done");
      } catch (error) {
        console.error("Error sending data:", error);
      }
    }
  };

  // const { openModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top40 z-[999999999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="relative h-[695px] widescreen:h-auto max-md:overflow-scroll mt-10 max-md:mt-0 bg-[#000] text-white rounded-2xl p-10 w-full max-w-[1100px] mx-4 shadow-xl border border-white/10">
        {/* Close Icon */}
        <button
          // onClick={closeModal}
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-10 max-md:flex max-md:items-center max-md:flex-col max-md:items-center">
          {/* Left side */}
          <div>
            <h2
              style={{
                background:
                  "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-[52px] max-md:text-[24px] font-['Graphikthin'] tracking-tight  leading-tight mb-4"
            >
              Level Up Your Tech Skills
            </h2>
            <p className="text-[#FFFFFFE5] font-['Graphikthin'] text-[22px] mb-6">
              Explore hands-on courses in cloud, data, and code—grow your skills
              now.
            </p>
            <div className="w-full hfull rounded-xl flex items-center justify-center text-4xl font-bold">
              <Image
                src="/home/Frame 1000003247.svg"
                alt="kjdsf"
                width={400}
                height={436}
              />
            </div>
          </div>

          {/* Right side - form */}

          <div className="w[457px]   h-full  relative max-sm:w-full z-30 backdrop-blur-sm max-hamburger:w-[70%] flex flex-col z-20 gap-[32px] max-sm:gap-[20px] max-sm:h-auto h-589px] px-[16px] max-sm:px-[20px] max-sm:py-[16px] py-[16px] rounded-[14px] bg-[#000]">
            <div className="flex flex-col gap-[16px]">
              {/* <p className="text-[24px]  mb10   font-['Graphikmid']   widescreen:leading-[150%] mb[12px] w-[80%] leading-6 text-[#fff]">
                Looking out for a job ?
              </p> */}
              <div className="flex justify-between">
                <p
                  className={
                    filled === "name"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Name *
                </p>
                <p
                  className={
                    filled === "name"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] hidden leading-[19.2px]"
                  }
                >
                  This field is required
                </p>
              </div>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className={
                  filled === "name"
                    ? "h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                    : "h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between">
                <p
                  className={
                    filled === "email"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Email *
                </p>
                <p
                  className={
                    filled === "email"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] hidden leading-[19.2px]"
                  }
                >
                  This field is required
                </p>
              </div>{" "}
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className={
                  filled === "email"
                    ? "h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                    : "h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between">
                <p
                  className={
                    filled === "phone"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Phone Number *
                </p>
                <p
                  className={
                    filled === "phone"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px]   widescreen:leading-[150%] hidden leading-[19.2px]"
                  }
                >
                  This field is required
                </p>
              </div>{" "}
              <input
                type="number"
                onChange={(e) => setPhonenumber(e.target.value)}
                className={
                  filled === "phone"
                    ? "h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                    : "h-[54px]  widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
                }
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col relative gap-[16px]">
              <div className="flex justify-between">
                <p
                  className={
                    filled === "I am"
                      ? "text-[16px] font-[400]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] font-[400]   widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  I am *
                </p>
                <p
                  className={
                    filled === "I am"
                      ? "text-[16px]   widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] font-[400]   widescreen:leading-[150%] hidden leading-[19.2px]"
                  }
                >
                  This field is required
                </p>
              </div>{" "}
              <div
                onClick={() => toggleMenu()}
                className={
                  filled === "I am" && Role === "Select an option"
                    ? "pl-[17.51px] pr-[18px] flex justify-between h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] bg-[transparent] text-[##FF4C4C] cursor-pointer w-full border-[1px] border-[#FF4C4C] rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
                    : "pl-[17.51px] font-[400] pr-[18px] flex justify-between h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] bg-[transparent] text-[#ffffff99] cursor-pointer w-full border-[1px] border-white rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
                }
              >
                {Role}

                <Image
                  alt="arrow"
                  src="/arrowdown.svg"
                  width={19.98}
                  height={10.75}
                />
              </div>
              {isOpenn && (
                <div className="bg-[#FFFFFF] w-full absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] bottom-[54px] z-[9999999999999] cursor-pointer">
                  <ul>
                    <li
                      onClick={() =>
                        handleOptionSelect("Student - Enrolled in College")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Student - Enrolled in College
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Student - Final Year College")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                    >
                      Student - Final Year College
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Passed Out - Looking for a Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Passed Out - Looking for a Job
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Working - Technical Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Working - Technical Job
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Working - Non Technical Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Working - Non Technical Job
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full h-[53px] widescreen:h-auto widescreen:py-[12px] widescreen:py-[16px] border-[#30E29D] hover:bg-[#30E29D] hover:text-[#292929] transition-all border-[1px] rounded-[8px] font-semibold text-[#30E29D] text-[16px]   widescreen:leading-[150%] font-[19.2px]"
            >
              Enroll Now
            </button>
            {filled === "done" && (
              <div className="flex items-center justify-center gap-[12.87px] absolute w-[299px] z-30 max-sm:w-full max-sm:static h-[75px] bg-[white] rounded-[9px] bottom-0 left-[-347px]">
                <Image
                  alt="right check"
                  src="/blackcheck.svg"
                  width={34.57}
                  height={34.57}
                />
                <p className="w-[210px] text-black text-[14px] leading-[21px] font-semibold">
                  Thanks for submitting the form! We’ll call you within 24
                  hours.
                </p>
              </div>
            )}
          </div>
          {/* <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm">Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md bg-transparent border border-white/30 px-3 py-2 text-sm focus:outline-none focus:border-[#00b0ff]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-transparent border border-white/30 px-3 py-2 text-sm focus:outline-none focus:border-[#00b0ff]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone Number *</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-md bg-transparent border border-white/30 px-3 py-2 text-sm focus:outline-none focus:border-[#00b0ff]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Im *</label>
              <select className="w-full rounded-md bg-transparent border border-white/30 px-3 py-2 text-sm focus:outline-none focus:border-[#00b0ff]">
                <option value="">Select an option</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full border border-[#00b0ff] text-[#00b0ff] rounded-md py-2 font-medium hover:bg-[#00b0ff]/10 transition"
            >
              Enroll Now
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
