"use client";
import Image from "next/image";
import style from "@/styles/style.module.css";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import Success from "@/components/success";
import Head from "next/head";

export default function Workshop() {
  const [Name, setName] = useState("");
  const [College_Name, setCollege_Name] = useState("");
  const [College_Email, setCollege_Email] = useState("");
  const [Designation, setDesignation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      College_Name,
      College_Email,
      Designation,
    };
    try {
      const response = await axios.post("/api/workshop", data);
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
        <title>ParallelEdu | Workshops</title>
        <link rel="canonical" href="https://www.paralleledu.com/workshops" />
        <meta
          name="description"
          content="Upskill and get placed at an affordable price."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>

      <div className="absolute w-[100vw] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.fullgrid}></div>
      </div>
      <main className="w-[100%] relative z-[2] pl-[80px] pt-[171.5px] max-hamburger:py-[100px] max-md:py-[80px] max-sm:py-[50px] pb-[272.5px] relative max-sm:px-[20px] max-md:px-[40px] max-smalllaptop:h-[1150px] max-hamburger:h-auto max-smalllaptop:overflow-hidden">
        <h1 className="w-[665.36px] widescreen:w-[785px] widestscreen:w-[900px] z-[2] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-smalllaptop:w-full max-hamburger:text-[48px] max-sm:text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:tracking-tight max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px] max-sm:tracking-tight">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <div className="flex mt-[49px] gap-[32px]">
          <Link href={"/contact-us"} className="max-md:w-full">
            <button className="w-[165px] max-md:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          alt="workshop"
          src="/workshop.png"
          className="w-[817.08px] widescreen:w-[40%] widescreen:h-auto max-xl:w-[600px] max-xl:top-[0px] max-smalllaptop:right-0 max-smalllaptop:left-[10%] max-hamburger:hidden max-smalllaptop:w-[60%] max-smalllaptop:relative absolute right-[20px] top-[-80px]"
          width={817.08}
          height={107.16}
        />
        <Image
          alt="Rocket hero"
          src="/rocket.png"
          className="max-hamburger:block hidden w-[calc(100%-80px)] max-sm:w-full z-[10]"
          width={507.16}
          height={107.16}
        />
      </main>
      <section className="pb-[52px] pl-[80px] max-sm:px-[20px] max-md:px-[40px] maxmd:py-[80px] pr-[79px] pt-[118.84px]">
        <h1 className="mb-[80.56px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] leading-[61.68px] text-[#E5E5E5] font-['Graphikthin'] tracking-[-2.56px] max-sm:tracking-tight w-[1130px] widescreen:w-[1330px] widestscreen:w-[1540px] max-xl:w-full max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
          Hands-on workshop on using <br />
          <span className="font-['Graphik']">AI</span> to get a job, optimize
          resume and more.
        </h1>
        <p className="text-[20px] widescreen:text-[25px] widestscreen:text-[30px] leading-[25.2px] tracking-[-0.2px] font-medium mb-[21.6px]">
          This workshop contains
        </p>
        <div className="flex gap-[84px] max-hamburger:flex-nowrap max-md:flex-wrap-reverse max-smalllaptop:flex-wrap-reverse max-smalllaptop:items-start mb-[80.56px] max-xl:ml-0 max-xl:gap-[32px] items-center">
          <div
            className={`${style.coloredborder} w-[934px] max-xl:w-full widescreen:w-[1250px] widestscreen:w-[1550px]`}
          >
            <div className="bg-black rounded-[9px]">
              <div className="flex w-full py-[31.82px] z-20 relative max-hamburger:flex-col max-hamburger:h-auto max-hamburger:w-full gap-[31.04px] h-[289px] bg-[#95FF931A] px-[18px] rounded-[10px]">
                <Image
                  alt="workshop contains"
                  src="/workshop2.svg"
                  width={107.16}
                  className="w-[290.96px] h-[225.36px] max-hamburger:h-auto max-hamburger:w-full"
                  height={107.16}
                />
                <div>
                  <p className="mt-[9.68px] w-[489.3px] max-sm:text-[28px] max-sm:leading-[34px] text-[36.63px] widescreen:text-[44px] widestscreen:text-[50px] widescreen:w-full widescreen:leading-[120%] max-hamburger:h-auto max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                    Current market and introduction to AI.{" "}
                  </p>
                  <p className="text-white opacity-80 w-[542.5px] widescreen:w-full max-bigscreen:w-[100%] mb-[32px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin']">
                    Industry insights into the current job market. Learn how to
                    use AI to increase your productivity.
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="pb-[6.4px] pt-[4.8px] px-[8px] font-['Graphikthin'] border-[#30FF51] opacity-60 border-[1px] rounded-[5px]">
                      <p className="text-[#30FF51] leading-[19.2px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                        15 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[276.38px] widescreen:text-[320px] widestscreen:text-[370px] font-['Clash'] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#022301] font-bold">
            1
          </h1>
        </div>
        <div className="flex ml-[58.09px] max-hamburger:items-start max-hamburger:flex-row gap-[84px] max-md:flex-col max-md:items-end max-smalllaptop:flex-col max-smalllaptop:items-end max-xl:ml-0 max-xl:gap-[32px] max-bigscreen:ml-[30px] my-[80.56px] items-center justify-end">
          <h1 className="text-[276.38px] widescreen:text-[320px] widestscreen:text-[370px] font-['Clash'] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#262002] font-bold">
            2
          </h1>{" "}
          <div
            className={`${style.yellowcoloredborder} w-[934px] max-xl:w-full widescreen:w-[1250px] widestscreen:w-[1550px]`}
          >
            <div className="bg-black rounded-[9px]">
              <div className="flex py-[31.82px] max-hamburger:h-auto max-hamburger:w-full max-hamburger:flex-col gap-[31.04px] h-[289px] bg-[#FFD7071A] px-[18px] max-md:w-full rounded-[10px]">
                <Image
                  alt="Prompt Engineering"
                  src="/yellowpic.svg"
                  width={107.16}
                  className="w-[290.96px] max-hamburger:h-auto max-hamburger:w-full h-[225.36px]"
                  height={107.16}
                />
                <div>
                  <p className="mt-[9.68px] max-sm:text-[28px] max-sm:leading-[34px] max-hamburger:h-auto max-hamburger:w-full w-[487.05px] text-[36.63px] widescreen:text-[44px] widestscreen:text-[50px] widescreen:w-full widescreen:leading-[120%] font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                    Prompt Engineering{" "}
                    <span className="max-smallphone:hidden">101</span>. 4-step
                    structured formula.{" "}
                  </p>
                  <p className="text-white opacity-80 w-[542.5px] widescreen:w-full max-bigscreen:w-[100%] mb-[32px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin']">
                    Get a hands-on experience on optimizing prompts. Get AI to
                    do exactly what you want it to do.{" "}
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="pb-[6.4px] pt-[4.8px] px-[8px] font-['Graphikthin'] border-[#FFDB06] opacity-60 border-[1px] rounded-[5px]">
                      <p className="text-[#FFDB06] leading-[19.2px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                        15 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[84px] max-hamburger:items-start max-hamburger:flex-nowrap max-md:flex-wrap-reverse max-md:items-start max-smalllaptop:flex-wrap-reverse max-smalllaptop:items-start my-[80.56px] max-xl:ml-0 max-xl:gap-[32px] items-center">
          <div
            className={`${style.purplecoloredborder} w-[934px] max-xl:w-full widescreen:w-[1250px] widestscreen:w-[1550px]`}
          >
            <div className="bg-black rounded-[9px]">
              <div className="flex py-[26.5px] max-hamburger:flex-col max-hamburger:h-auto gap-[31.04px] h-[289px] w-[934px] max-xl:w-full widescreen:w-full bg-[#FF41D51A] px-[18px] max-md:w-full rounded-[10px]">
                <Image
                  alt=" Learning 10 free AI"
                  src="/workshop4.svg"
                  width={107.16}
                  className="w-[290.96px] mt-[5.52px] h-[225.36px]"
                  height={107.16}
                />
                <div>
                  <p className="w-[485.22px] text-[36.63px] widescreen:text-[44px] widestscreen:text-[50px] widescreen:w-full widescreen:leading-[120%] max-sm:text-[28px] max-sm:leading-[34px] max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                    Learning 10 free AI tools to increase productivity.
                  </p>
                  <p className="text-white opacity-80 w-[542.5px] widescreen:w-full max-bigscreen:w-[100%] mb-[32px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin']">
                    Get to know and use a free AI tool to increase productivity.
                    This session will be tailored to each branch.
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="pb-[6.4px] pt-[4.8px] px-[8px] font-['Graphikthin'] border-[#FF01E6] opacity-60 border-[1px] rounded-[5px]">
                      <p className="text-[#FF01E6] leading-[19.2px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                        30 minutes{" "}
                      </p>
                    </div>
                    <div className="pb-[6.4px] pt-[4.8px] px-[8px] font-['Graphikthin'] border-[#FF01E6] opacity-60 border-[1px] rounded-[5px]">
                      <p className="text-[#FF01E6] leading-[19.2px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                        {" "}
                        Tailored to each branch{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[276.38px] widescreen:text-[320px] widestscreen:text-[370px] font-['Clash'] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#210016] font-bold">
            3
          </h1>
        </div>
        <div className="flex ml-[58.09px] max-hamburger:items-start max-hamburger:flex-row max-md:flex-col max-md:items-end max-smalllaptop:flex-col max-smalllaptop:items-end gap-[84px] max-xl:ml-0 max-xl:gap-[32px] max-bigscreen:ml-[30px] my-[80.56px] items-center justify-end">
          <h1 className="text-[276.38px] widescreen:text-[320px] widestscreen:text-[370px] font-['Clash'] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#021E22] font-bold">
            4
          </h1>{" "}
          <div
            className={`${style.bluecoloredborder} max-biggerscreen:w-[880px] w-[934px] max-xl:w-full widescreen:w-[1250px] widestscreen:w-[1550px]`}
          >
            <div className="bg-black rounded-[9px]">
              <div className="flex py-[31.82px] max-hamburger:flex-col gap-[31.04px] max-hamburger:h-auto w-full h-[289px] w-[934px] max-xl:w-full widescreen:w-full bg-[#07E1FF1A] px-[18px] max-md:w-full rounded-[10px]">
                <Image
                  alt="5-step approach to land a job."
                  src="/cube.svg"
                  width={107.16}
                  className="w-[290.96px] h-[225.36px]"
                  height={107.16}
                />
                <div>
                  <p className="mt-[9.68px] w-[482.94px] max-sm:text-[28px] max-sm:leading-[34px] text-[36.63px] widescreen:text-[44px] widestscreen:text-[50px] widescreen:w-full widescreen:leading-[120%] max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                    5-step approach to land a job.{" "}
                  </p>
                  <p className="text-white opacity-80 w-[542.5px] widescreen:w-full max-bigscreen:w-[100%] mb-[32px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin']">
                    Discover how learning new, relevant skills will help you
                    stay ahead of the competition
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="pb-[6.4px] pt-[4.8px] px-[8px] font-['Graphikthin'] border-[#0CC2FF] opacity-60 border-[1px] rounded-[5px]">
                      <p className="text-[#0CC2FF] leading-[19.2px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                        30 minutes{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[107.84px] pb-[56px] max-md:py-[30px] px-[80px] max-md:px-[40px] max-sm:px-[20px]">
        <h1 className="text-[64px] text-center mb-[74.16px] max-hamburger:text-[48px] max-sm:text-[36px] widescreen:text-[70px] widestscreen:text-[80px] widescreen:leading-[120%] max-sm:tracking-tighter max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px] max-sm:tracking-tight">
          What your students will get{" "}
        </h1>
        <div className="flex gap-[21px] flex-wrap">
          <div
            className={`${style.coloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor1}`}>
                <Image
                  alt="Insider knowledge "
                  src="/abstract1.svg"
                  width={107.64}
                  className="w-[107.64px] ml-[26.86px] mt-[28.34px] h-[126.64px] mb-[34.06px]"
                  height={126.64}
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] h-[60px] max-bigscreen:w-[calc(100%-50px)] max-sm:h-auto">
                  Insider knowledge on current market trends
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Get never heard before information on the current job market
                  trends, where it is heading in the future.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.coloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor1}`}>
                <Image
                  alt="Information on how AI"
                  src="/abstract1.svg"
                  width={107.64}
                  className="w-[107.64px] ml-[26.86px] mt-[28.34px] h-[126.64px] mb-[34.06px]"
                  height={126.64}
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] tracking-[-0.24px] h-[60px]">
                  Information on how AI will affect the upcoming workforce{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Learn the impact of AI, how you should leverage its potential
                  instead of being afraid of getting replaced by it.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.yellowcoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor2}`}>
                <Image
                  alt="Introduction to Prompt Engineering"
                  src="/abstract3.svg"
                  width={180.64}
                  className="w-[180.64px] mt-[28.34px] h-[126.64px] mb-[34.06px]"
                  height={126.64}
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] h-[60px] max-bigscreen:w-[calc(100%-50px)] max-sm:h-auto">
                  Introduction to Prompt Engineering{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Prompts is the way you communicate with an AI. Learn how to do
                  it the best.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.yellowcoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor2}`}>
                <Image
                  alt="4-step structured formula "
                  src="/abstract3.svg"
                  width={180.64}
                  className="w-[180.64px] mt-[28.34px] h-[126.64px] mb-[34.06px]"
                  height={126.64}
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] h-[60px] max-bigscreen:w-[calc(100%-50px)] max-sm:h-auto">
                  4-step structured formula to writing prompts{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Writing good prompts is not a matter of luck. Learn how to use
                  the full potential of AI through prompts.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Use AI to write better code"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Use AI to write better code{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Writing a code is much easier with an assistant. Learn how to
                  leverage leading AI assistants like GitHub Co-pilot to up your
                  coding game.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Faster content curation "
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Faster content curation through ChatGPT, Gemini{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Generate content like it’s written by a copywriter working at
                  Google, Apple! Use it to write blogs, articles, emails,
                  messages and much more.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Generate breath-taking imagery using AI"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Generate breath-taking imagery using AI{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Images are always a good way to stand out from the crowd.
                  Learn how to generate images that do not look like they’ve
                  been generated by AI.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Research on a topic accurately"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Research on a topic accurately{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  LLMs like ChatGPT, Gemini often generate inaccurate data when
                  it comes to research. Use AI tools like Perplexity to research
                  along with the citations.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Build hire-worthy resume using AI"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Build hire-worthy resume using AI{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Let AI do all the heavy-lifting while building your resume.
                  Get it to build a resume that’ll grab recruiters attention.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.purplecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor3}`}>
                <Image
                  src="/abstart3.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Build a personal website only using prompts"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Build a personal website only using prompts{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Use all the knowledge taught in this workshop to build your
                  personal website only using prompts. Not a single line of code
                  is required.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.bluecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor4}`}>
                <Image
                  src="/abstart4.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Curate your resume using AI{"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Curate your resume using AI{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Learn to tweak your AI generated resume to match individual
                  job openings to better your chances of getting hired.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.bluecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor4}`}>
                <Image
                  src="/abstart4.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Easy and lesser known hacks to finding jobs through LinkedIn"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[355px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-bigscreen:w-[calc(100%-50px)] max-sm:h-auto">
                  Easy and lesser known hacks to finding jobs through LinkedIn{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Finding a job through LinkedIn is easy if you know what you
                  are doing. Let us teach you what you should be looking out
                  for.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.bluecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor4}`}>
                <Image
                  src="/abstart4.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt="Networking with AI assistance"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Networking with AI assistance{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Use AI tools to connect with relevant professionals in your
                  field based on your skills and career goals.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.bluecoloredborder} relative z-20 overflow-hidden w-[32%] max-bigscreen:w-[48%] max-md:w-full h-[406px] widescreen:h-[500px] max-sm:h-auto max-sm:pb-[20px] rounded-[8px]`}
          >
            <div className="bg-black rounded-[9px] h-full w-full">
              <div className={`${style.workshopcardgradientcolor4}`}>
                <Image
                  src="/abstart4.svg"
                  width={118.64}
                  className="w-[118.64] ml-[27.5px] mt-[36px] h-[118.64] mb-[34.06px]"
                  height={118.64}
                  alt=" Write engaging emails in 4 step"
                />
                <h1 className="text-[24px] ml-[27.5px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] widescreen:text-[30px] widestscreen:text-[36px] widescreen:w-full widescreen:leading-[120%] widescreen:h-[92px] max-sm:h-auto h-[60px] w-[340px] mb-[19.66px] leading-[30.64px] text-[#E0E0E0] tracking-[-0.24px] max-sm:w-[calc(100%-50px)] max-sm:h-auto">
                  Write engaging emails in 4 steps{" "}
                </h1>
                <p className="h-[112px] max-sm:ml-[12px] max-sm:w-[calc(100%-20px)] max-sm:h-auto w-[355px] ml-[27.5px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] max-bigscreen:w-[calc(100%-50px)] max-sm:pb-[20px] opacity-80 widescreen:w-[90%] widescreen:h-[150px]">
                  Learn to write engaging emails in 4 simple steps. Let AI do
                  most of the work while you curate the email and send it to the
                  right people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative items-center widescreen:pt-[100px] pt-[49.9px] pb-[134px] max-md:py-[30px] px-[80px] max-md:px-[40px] max-sm:px-[20px]">
        <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] text-center mb-[50.16px] max-hamburger:text-[28px] max-hamburger:leading-[120%] leading-[41.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-1.08px]">
          What your students will get{" "}
        </h1>
        <div className="hidden max-hamburger:block absolute top-0 left-0 w-[100%] h-[100%] bg-transparent z-30  "></div>
        <Image
          src="/Certificate.svg"
          width={1063}
          height={632}
          alt="What your students will get"
          className="max-xl:w-full widescreen:w-[1280px] widestscreen:w-[1440px] widescreen:h-auto max-xl:h-auto"
        />
      </section>
      <section className="py-[168.5px] max-md:px-[40px] max-sm:px-[20px] max-md:py-[40px] relative px-[62.74px]">
        <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-hidden">
          <div className={style.fullgrid}></div>
        </div>
        <p className="text-[48px] widescreen:text-[54px] widestscreen:text-[60px] widescreen:leading-[120%] widescreen:w-[650px] widestscreen:w-[700px] leading-[46.26px] w-[554px] max-md:w-full tracking-[-1.92px] max-md:text-[32px] max-md:leading-[120%] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5] mb-[65.09px]">
          <span className="font-bold">3 hours </span>
          of fun and learning. All at a low cost of{" "}
        </p>
        <div className="flex max-smallphone:flex-col items-end">
          <h1 className="text-[257.99px] widescreen:text-[320px] widescreen:w-[650px] widescreen:text-[370px] widescreen:w-[750px] max-hamburger:text-[187px] max-md:text-[157px] max-hamburger:leading-[90%] max-hamburger:w-auto max-sm:text-[107px] max-sm:pr-[10px] max-smallphone:w-full w-[547px] font-['Graphikthin'] text-[#E5E5E5] max-hamburger:tracking-tighter max-sm:tracking-tight tracking-[-10.35px] leading-[220px]">
            ₹<span className="font-bold font-['Graphik']">199</span>
          </h1>
          <p className="text-[48px] widescreen:text-[54px] widestscreen:text-[60px] widescreen:leading-[120%] leading-[46.26px] max-sm:text-[28px] max-sm:leading-[32px] tracking-[-1.92px] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5]">
            per student.{" "}
          </p>{" "}
        </div>
        <Link href={"/contact-us"}>
          <button className="w-[165px] widescreen:w-[205px] widestscreen:h-[65px] relative z-20 max-md:hidden mt-[79px] max-md:mt-[49px] max-sm:mt-[29px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
            Contact Us{" "}
          </button>
        </Link>
      </section>
      <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] bg-white max-sm:py-0 relative py-[173.5px] flex flex-col justify-center items-center gap-[65px]">
        <h1 className="text-center max-sm:pt-[20px] w-[728.14px] widestscreen:w-[900px] max-hamburger:w-full text-black relative z-20 text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] font-light max-sm:tracking-[-1.28px] tracking-[-2.56px] max-sm:tracking-tight ">
          Colleges benefitting from our workshops.{" "}
        </h1>
        <div className="flex flex-wrap max-sm:pb-[20px] items-center justify-center z-20 gap-x-[22px] gap-y-[27px]">
          <Image
            src="/college.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="college"
          />
          <Image
            src="/college1.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="JSSATE University"
          />
          <Image
            src="/college2.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="PES University"
          />
          <Image
            src="/college3.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="Reva University"
          />
          <Image
            src="/college4.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="Reva University"
          />
          <Image
            src="/college5.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="Ramahai University"
          />
          <Image
            src="/college6.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="RV University"
          />
          <Image
            src="/college7.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
          />
          <Image
            src="/college8.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="Ramahai University"
          />
          <Image
            src="/college9.png"
            className="relative z-20 max-sm:w-[46%] widescreen:w-[15%]"
            width={193}
            height={82}
            alt="Ramahai University"
          />
        </div>
      </section>
      <section className="relative z-20 py-[80px]">
        <p className=" text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] widescreen:w-[1000px] widestscreen:w-[1100px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>
      <div className="pt-[92.84px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px]  relative z-20 pb-[95px] pl-[80px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[792.98px] widescreen:w-[950px] widestscreen:w-[1100px] font-['Graphikthin'] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Get your students up to date on latest industry trends{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[49.16px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
                  width={51.73}
                  height={51.73}
                  alt="book-reading"
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px] widescreen:w-full max-bigscreen:w-[310px]">
                Future-Focused Learning{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:w-full widescreen:h-auto">
                Go beyond the trend. We explore the underlying forces shaping
                the job market and identify the skills that will remain relevant
                for years to come.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] h-[434px] pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
                  width={51.73}
                  height={51.73}
                  alt="bag-suitcase-2"
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px] widescreen:w-full max-bigscreen:w-[310px]">
                Actionable Skills Development{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:w-full widescreen:h-auto">
                Master in-demand skills through hands-on projects, real-world
                simulations, and expert-led sessions.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] h-[434px] pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={60}
                  height={60}
                  alt="Calendar-3"
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px] widescreen:w-full">
                Personalized Career Guidance{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:w-full widescreen:h-auto">
                Dont just learn skills, use them. Get personalized guidance on
                crafting a strong resume, acing interviews, and building your
                professional network.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pl-[80px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px] relative z-20 pr-[79px] pt-[92.84px] pb-[93px]">
        <h1 className="w-[868px] widestscreen:w-[50%] max-hamburger:w-full  max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] leading-[61.68px] font-['Graphikthin'] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5]">
          Workshops conducted by passionate industry experts
        </h1>
        <div className="flex gap-[21px] max-md:flex-col mt-[67px] max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/babu.png"
                className=""
                width={125.17}
                height={123.97}
                alt="Buchi Babu Muvva"
              />
              <h1 className="w-[340px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Buchi Babu Muvva
              </h1>
              <p className="w-[354.85px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                Dr. Butchi Babu Muvva, PhD has 30 years of diverse experience in
                Industry and academia. He has worked with customer-focused
                organizations spanning across different industry sectors
                including Pharma, Automobile, IT & Education. He has worked in
                various capacities like EDP Manager on projects related to IT
                Implementation, Product Management, Operations planning,
                Sourcing, and warehouse, Introduced computerization in POM area,
                and support Quality & Business Analytics.{" "}
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/syed.png"
                className=""
                width={125.17}
                height={123.97}
                alt="Syed Saif"
              />
              <h1 className="w-[340px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Syed Saif
              </h1>
              <p className="w-[354.85px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                AI and Data Analytics Expert with 10+ years of experience, he
                has successfully scaled up software businesses from $100K to
                $10M in revenue and specializes in building world-class tech
                teams from the ground up. He has assisted many well-funded
                start-ups, brands, and enterprises across the globe to meet
                their technological requirements, and worked on projects that
                won international design accolades.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/ajit.png"
                className=""
                width={125.17}
                height={123.97}
                alt="Ajith Jagadish"
              />
              <h1 className="w-[340px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Ajith Jagadish
              </h1>
              <p className="w-[354.85px] widescreen:w-full max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                Ajith Jagadish is a seasoned Health and Wellness coach with over
                a decade of experience in Business Development and Sales. Ajith
                combines his expertise as a certified Biomechanics Specialist
                with his experience as an international athlete. He has
                represented India in various Ultimate Frisbee tournaments. His
                diverse background uniquely positions him to guide students in
                developing their personalities, preparing for interviews, and
                shaping successful careers.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-[70.5px] flex justify-between max-md:flex-col gap-[20px] max-md:gap-[50px] relative z-20 px-[80px] max-sm:px-[20px] max-md:px-[40px]">
        <div className="w-[675.77px] widescreen:w-[800px] widestscreen:w-[1000px] max-md:w-full">
          <p className="text-[64px] widescreen:text-[74px] widestscreen:text-[84px] widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] mb-[41px] leading-[61.88px] tracking-[-2.56px] max-sm:tracking-tight font-['Graphikthin']">
            Have tailored workshops at your institute at a low price of ₹199 per
            student{" "}
          </p>
          <p className="text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] leading-[19.28px] tracking-[-0.2px] text-[#E5E5E5] font-['Graphikthin']">
            Fill out the form or mail us at{" "}
            <a
              href="mailto:hire@parallel.com"
              className="border-b-[1px] border-[white]"
            >
              hello
              <span className="font-['Graphik'] opacity-90">@</span>
              paralleledutech.com
            </a>
          </p>
        </div>
        <div className="w-[442px] widescreen:w-[40%] widestscreen:w-[35%] widescreen:h-auto max-md:w-full flex flex-col z-20 gap-[32px] max-md:h-auto max-sm:gap-[20px] max-sm:p-[20px] h-[605px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
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
              College Name
            </p>
            <input
              type="text"
              onChange={(e) => setCollege_Name(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              College Email
            </p>
            <input
              type="email"
              onChange={(e) => setCollege_Email(e.target.value)}
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
            className="w-full h-[53px] widescreen:h-auto widescreen:py-[12px] widestscreen:py-[18px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
          >
            Talk to our experts{" "}
          </button>
        </div>
      </div>
    </>
  );
}
