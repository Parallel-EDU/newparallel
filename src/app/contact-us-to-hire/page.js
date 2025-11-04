"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import style from "@/styles/style.module.css";
// import Footer from "../components/footer";
import axios from "axios";
import Head from "next/head";
import Footer from "@/components/footer";

export default function Contact() {
  const [Name, setName] = useState("");
  const [Company_Name, setCompany_Name] = useState("");
  const [Work_Email, setWork_Email] = useState("");
  const [Designation, setDesignation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      Company_Name,
      Work_Email,
      Designation,
    };
    try {
      const response = await axios.post("/api/hire-from-us", data);
      console.log("Data sent successfully:", response.data);
      window.alert(
        "Thank you " + Name + "! Your form has been submitted successfully."
      );
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Head>
        <title>ParallelEdu | Contact Us</title>
        <link
          rel="canonical"
          href="https://www.paralleledu.com/contact-us-to-hire"
        />
        <meta
          name="description"
          content="Hire the best professionals at zero cost."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>

      <div className="absolute z-20 w-[100%] h-[822px] top-[-400px] overflow-hidden">
        <div className={style.backgroundcolor}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[422px] right-0 overflow-hidden">
        <div className={style.backgroundcolor3}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[422px] right-0 overflow-hidden">
        <div className={style.backgroundcolor2}></div>
      </div>
      <div className="absolute w-[100%] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.backgroundbox}></div>
      </div>
      <main className="px-[80px] max-md:px-[40px] max-sm:px-[20px] flex justify-center pb-[79.28px] z-20 relative pt-[130.71px]">
        <h1 className="text-[104.57px] widescreen:text-[114px] widestscreen:text-[125px] widescreen:leading-[120%] widestscreen:w-[900px] leading-[106.66px] tracking-[-5.2px] font-['Graphikthin'] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smalllaptop:leading-[102%] max-sm:text-left max-lg:w-full text-center text-[#E5E5E5] w-[799.41px]">
          Best candidates at zero cost{" "}
        </h1>
      </main>
      <div className="absolute w-[100%] h-[70vh] top-[100vh] left-0 overflow-x-hidden">
        <div className={style.backgroundcolor2}></div>
        <div className={style.backgroundbox2}></div>
      </div>
      <div className="py-[68.1px] max-sm:py-20 z-40 max-hamburger:px-[80px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:w-full relative z-20 pl-[80px] gap-[34px] flex-col items-center flex pr-[79px]">
        <h1 className="text-center text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[37.76px] font-['Graphikthin'] tracking-[-0.64px] text-[#E5E5E5]">
          Get in touch with us{" "}
        </h1>
        <div className="w-[442px] max-md:w-full flex widescreen:w-[40%] widescreen:h-auto flex-col z-40 gap-[32px] max-md:h-auto max-sm:gap-[20px] max-sm:p-[20px] h-[605px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Name
            </p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Company Name
            </p>
            <input
              type="text"
              onChange={(e) => setCompany_Name(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Work Email
            </p>
            <input
              type="email"
              onChange={(e) => setWork_Email(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Designation
            </p>
            <input
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] bg-[#30E29D] widescreen:h-auto widescreen:py-[12px] widestscreen:py-[18px] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
          >
            Hire from us{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col max-md:px-[40px] max-sm:py-0 max-sm:px-[20px] gap-[28.01px] z-20 relative items-center pt-[96.09px] pb-[121.9px]">
        <h1 className="text-center text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[30.84px] tracking-[-1.28px] font-['Graphikthin']">
          We love to see new mails in our inbox.
        </h1>
        <div className="w-[294.22px] widescreen:w-[400px] widestscreen:w-[450px] text-center relative z-[20]">
          <span className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[24px] text-white z-[20]">
            Mail us at{" "}
          </span>
          <a
            href="mailto:hello@parallel.com"
            className="text-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[24px] z-[20] border-b-[0.5px] border-[#30E29D]"
          >
            hello@parallel.com
          </a>
          <p className="text-[#FFFFFF99] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin']">
            We will get back to you within 2 hours during working hours.
          </p>
        </div>
      </div>
    </>
  );
}
