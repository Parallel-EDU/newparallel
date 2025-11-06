"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";
import { Linear, gsap } from "gsap";
import axios from "axios";
import Head from "next/head";
import StatsBar from "../Home/StatsBar";
import { useModal } from "@/app/context/ModalContext";
// import StatsBar from "../StatsBar";

const HeroBoot = () => {
  const clientanimation = useRef(null);
  const [Role, setRole] = useState("Select an option");
  const leadinganimation = useRef(null);
  const [filled, setfilled] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  // const clientanimation = useRef(null);
  // const leadinganimation = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  const { openModal } = useModal();
  return (
    <>
      <div className="overflowhidden relative">
        <div className="absolute z-20 w-[100%] h-[1022px] top-[0px] overflow-hidden">
          <div className={style.backgroundbox123}></div>
        </div>
        {/* <div className="absolute z-20 w-[120%] h-[822px] top-[622px] -right-20 overflow-hidden">
          <div className={style.backgroundcolor3}></div>
        </div> */}
        {/* <div className="absolute z-20 w-[100%] h-[1022px] top-[622px] right-0 overflow-hidden">
          <div className={style.backgroundcolor2}></div>
        </div> */}
        {/* <div className="absolute w-[100%] h-[1022px] top-0 left-0 overflow-hidden">
          <div className={style.backgroundbox}></div>
        </div> */}
        <main className="px-[80px] max-xl:p-[40px] z-50 relative max-md:px-[40px] max-sm:px-[20px] max-md:pt-[50px] max-sm:pb-0 max-sm:pt-[30px] flex justify-between max-hamburger:items-center max-smalllaptop:gap-[20px] max-hamburger:flex-col pb-[29.5px] pt-[76.5px]">
          <div className="max-hamburger:w-full widescreen:w-[60%] max-xl:w-[73%] w-[60%]">
            <div className="relative z-30 w-full">
              <h1 className="w-[685.41px] widescreen:w-full text-[56.07px] widescreen:text-[84px] widestscreen:text-[94px] widescreen:leading-[100px] font-medium max-hamburger:w-[100%]  max-smalllaptop:w-[510px] max-bigscreen:w-[676px] max-smalllaptop:tracking-[-4.5px] max-smalllaptop:text-[66px] max-sm:text-[60px] max-smallphone:text-[42px] max-sm:tracking-normal max-sm:mb-[12px] max-smalllaptop:leading-[102%] font-light tracking-[-3.5px] leading-[65.73px] text-[#E5E5E5] font-['Graphikthin'] mb-[20px]">
                Become a job-ready DevOps{" "}
                <span className="font-['system-ui'] font-[100]">& </span> Cloud
                engineer and get placed in just 6-9 months
                {/* <span className="font-['Graphik'] font-semibold">
                  {" "}
                  an affordable price.
                </span> */}
              </h1>
              <p className="text-[16px] font-['Graphikthin']   mt-6  font-[400] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] mb[12px] w-[80%] leading-[24px] text-[#C7C7C7]">
                Master DevOps, Cloud, CI/CD, Containers, and Automation with
                GenAI tools.Build real deployment pipelines, automate
                infrastructure, and launch your tech career with hands-on
                projects, expert mentorship, and dedicated placement support.
              </p>
              <button
                onClick={openModal}
                className="w-[128px] mt-12 mb-20 font-['Graphikmid'] h-[40px] widescreen:h-auto widescreen:py-[12px] widescreen:w-[170px] widescreen:py-[16px]  widescreen:px-[16px] border[#30E29D] bg-[#30E29D] text-[#292929] transition-all border[1px] rounded-lg   text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
              >
                Enroll Now
              </button>
            </div>

            <StatsBar />
          </div>
          <div className="w-[457px] widescreen:h-[calc(100%-110px)] widescreen:p-10 h-full widescreen:w-[35%] relative max-sm:w-full z-30 backdrop-blur-md max-hamburger:w-[70%] flex flex-col z-20 gap-[32px] max-sm:gap-[20px] max-sm:h-auto h-589px] px-[16px] max-sm:px-[20px] max-sm:py-[16px] py-[16px] rounded-[14px] bg-[#FFFFFF1A]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[24px]  mb10   font-['Graphikmid'] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] mb[12px] w-[80%] leading-6 text-[#fff]">
                Looking out for a job ?
              </p>
              <div className="flex justify-between">
                <p
                  className={
                    filled === "name"
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Name *
                </p>
                <p
                  className={
                    filled === "name"
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hidden leading-[19.2px]"
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
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Email *
                </p>
                <p
                  className={
                    filled === "email"
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hidden leading-[19.2px]"
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
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  Phone Number *
                </p>
                <p
                  className={
                    filled === "phone"
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hidden leading-[19.2px]"
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
                      ? "text-[16px] font-[400] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] font-[400] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]"
                  }
                >
                  I{"'"}m *
                </p>
                <p
                  className={
                    filled === "I am"
                      ? "text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#FF4C4C] leading-[19.2px]"
                      : "text-[16px] font-[400] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hidden leading-[19.2px]"
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
              {isOpen && (
                <div className="bg-[#FFFFFFF2] w-full absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] bottom-[54px] z-[22222] cursor-pointer">
                  <ul>
                    <li
                      onClick={() =>
                        handleOptionSelect("Student - Enrolled in College")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Student - Enrolled in College
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Student - Final Year College")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w-[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                    >
                      Student - Final Year College
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Passed Out - Looking for a Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Passed Out - Looking for a Job
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Working - Technical Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Working - Technical Job
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("Working - Non Technical Job")
                      }
                      className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Working - Non Technical Job
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full h-[53px] widescreen:h-auto widescreen:py-[12px] widescreen:py-[16px] border-[#30E29D] hover:bg-[#30E29D] hover:text-[#292929] transition-all border-[1px] rounded-[8px] font-semibold text-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
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
        </main>
      </div>
    </>
  );
};

export default HeroBoot;
