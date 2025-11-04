"use client";
import Image from "next/image";
import style from "@/styles/style.module.css";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Upskill from "@/components/upskill";
import Footer from "@/components/footer";

export default function Courses() {
  const [refer, setrefer] = useState(false);
  const [refer2, setrefer2] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      phoneNumber,
    };
    try {
      const response = await axios.post("/api/refer-us", data);
      console.log("Data sent successfully:", response.data);
      setrefer(true);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Head>
        <title>ParallelEdu | Refer Us</title>
        <link rel="canonical" href="https://www.paralleledu.com/refer-us" />
        <meta
          name="description"
          content="Upskill and get placed at an affordable price."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>

      <div className="absolute w-full h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.fullgrid}></div>
      </div>
      <main className="pl-[79.39px] max-md:px-[40px] relative z-[2] max-sm:px-[20px] pr-[80.1px] pt-[88px] pb-[100px] max-hamburger:flex-col max-hamburger:gap-[30px] flex justify-between">
        <div className="mt-[27.66px] max-sm:mt-0">
          <h1 className="w-[650px] widescreen:w-[850px] widestscreen:w-[950px] max-hamburger:w-full max-smalllaptop:w-[500px] font-['Graphikthin'] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-light max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Refer us among your friends to get a boost in placement preference{" "}
          </h1>
          <p className="w-[408px] widescreen:w-full max-sm:w-full max-hamburger:hidden mb-[12px] font-['Graphikthin'] mt-[57.34px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex gap-[19px]">
            <input
              type="number"
              name=""
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-[368px] text-white max-hamburger:hidden max-smalllaptop:w-[300px] h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            {refer === false && (
              <button
                onClick={handleSubmit}
                className="w-[118px] max-hamburger:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                Next{" "}
              </button>
            )}
            {refer === true && (
              <button
                onClick={() => setrefer(true)}
                className="w-[152px] flex justify-center items-center gap-[8px] max-hamburger:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                <Image
                  alt="material-symbols"
                  src="/material-symbols_check.svg"
                  width={24}
                  height={24}
                />{" "}
                <p>Sent! </p>
              </button>
            )}
          </div>
          {refer === false && (
            <p className="mt-[32px] max-md:w-full max-hamburger:hidden text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] text-[#E0E0E0]">
              Don’t have an account?{" "}
              <Link
                href={"/signup"}
                className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
              >
                Sign up
              </Link>
            </p>
          )}
          {refer === true && (
            <>
              <div className="flex gap-[13px] items-start max-hamburger:hidden   max-md:h-auto max-smallphone:gap-[8px] w-[532px] h-[83px] rounded-[8px] bg-white px-[15px] pt-[17px] mt-[14px] max-md:w-full max-md: p-[15px]">
                <Image
                  alt="material-symbols"
                  src="/material-symbols_info-outline.svg"
                  width={24}
                  height={24}
                />
                <p className="w-[441px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-md:p-0 max-sm:text-sm leading-[19.2px] text-[#030303] pt-[2.5px] max-md:w-full">
                  A WhatsApp message containing the referral link has been sent
                  to this number.{" "}
                </p>
              </div>
              <p
                onClick={() => setrefer(false)}
                className="border-b-[1px] w-[175px] mt-[14px] max-hamburger:hidden cursor-pointer h-[20px] border-[#30E29D] text-[#30E29D]"
              >
                Use a different number{" "}
              </p>
            </>
          )}
        </div>
        <Image
          alt="referpage"
          src="/referpage.png"
          className="object-contain max-md:w-full"
          width={522}
          height={493}
        />
        <div className="hidden max-hamburger:block">
          <p className="w-[408px] max-md:w-full mb-[12px] font-['Graphikthin'] mt-[57.34px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex max-sm:flex-col gap-[19px]">
            <input
              type="text"
              name=""
              placeholder="Enter your phone number"
              className="w-[368px] max-sm:w-full max-smalllaptop:w-[300px] h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            {refer === false && (
              <button
                onClick={() => setrefer(true)}
                className="w-[118px] max-hamburger:block hidden h-[53px] max-md:w-full bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                Next{" "}
              </button>
            )}
            {refer === true && (
              <button
                onClick={() => setrefer(true)}
                className="w-[152px] flex justify-center hidden max-hamburger:flex max-md:w-full items-center gap-[8px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                <Image
                  src="/material-symbols_check.svg"
                  width={24}
                  height={24}
                />{" "}
                <p>Sent! </p>
              </button>
            )}
          </div>
          {refer === false && (
            <p className="mt-[32px] max-md:w-full max-hamburger:block hidden text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] text-[#E0E0E0]">
              Don’t have an account?{" "}
              <Link
                href={"/signup"}
                className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
              >
                Sign up
              </Link>
            </p>
          )}
          {refer === true && (
            <>
              <div className="flex gap-[13px] items-start hidden max-md:flex max-md:h-auto max-smallphone:gap-[8px] w-[532px] h-[83px] rounded-[8px] bg-white px-[15px] pt-[17px] mt-[14px] max-md:w-full max-md: p-[15px]">
                <Image
                  src="/material-symbols_info-outline.svg"
                  width={24}
                  height={24}
                />
                <p className="w-[441px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-md:p-0 max-sm:text-sm leading-[19.2px] text-[#030303] pt-[2.5px] max-md:w-full">
                  A WhatsApp message containing the referral link has been sent
                  to this number.{" "}
                </p>
              </div>
              <p
                onClick={() => setrefer(false)}
                className="border-b-[1px] w-[175px] hidden max-md:block mt-[14px] cursor-pointer h-[20px] border-[#30E29D] text-[#30E29D]"
              >
                Use a different number{" "}
              </p>
            </>
          )}
        </div>
      </main>
      <section className="pt-[72.08px] max-sm:py-0 relative max-sm:px-[20px] max-md:px-[40px] z-20 pb-[72px] pl-[79.24px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] widestscreen:w-[1090px] max-hamburger-w-full font-['Graphikthin'] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            Enjoy exclusive perks by referring us to your friends{" "}
          </p>
        </div>
        <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[21px] mt-[50.91px]">
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="multiuser"
                  src="/multiuser.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Make learning more fun with your friends{" "}
              </h1>
              <p className="w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-bigscreen:w-[310px] max-xl:w-full">
                Invite your friends over to the platform. Upskill together at no
                additional costs. Compete in leaderboards with your friends and
                the others.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image src="/checkllist.svg" width={51.73} height={51.73} />
              </div>
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Unlock additional tests that give you an edge{" "}
              </h1>
              <p className="w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-bigscreen:w-[310px] max-xl:w-full">
                A successful referral gives you access to additional tests. This
                is not available to a non-referrer, giving you an edge over the
                others.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="dottedsquare"
                  src="/dottedsquare.svg"
                  width={60}
                  height={60}
                />
              </div>
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Get a slight boost in placement preference{" "}
              </h1>
              <p className="w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-bigscreen:w-[310px] max-xl:w-full">
                With a referral you get added to the exclusive club of referrers
                that enjoy a slight boost in placement preference.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[72.09px] max-sm:px-[20px] max-md:px-[40px ] relative z-20 pb-[72px] pl-[79.02px] pr-[80.37px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] widescreen:w-full max-hamburger:w-full font-['Graphikthin'] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Steps to make a valid referral{" "}
          </p>
        </div>
        <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[21px] mt-[50px]">
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28.54px] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
            >
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
                Step 1{" "}
              </h1>
              <p className="text-[24px] leading-[36px] w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
                Sign up, copy your referral link, and forward it to all of your
                friends.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28.54px] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
            >
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
                Step 2{" "}
              </h1>
              <p className="text-[24px] leading-[36px] w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
                Your friends will click on the link, and sign up.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28.54px] w-[33%] max-md:w-full max-hamburger:w-[45%] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
            >
              <h1 className="w-[340px] widescreen:w-full widescreen:h-[92px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
                Step 3{" "}
              </h1>
              <p className="text-[24px] leading-[36px] w-[355.15px] widescreen:w-full opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
                Enjoy the free benefits you earned.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[105.91px] max-sm:mt-[50px] flex flex-col items-center">
          <p className="w-[408px] widescreen:w-full text-center max-sm:w-full font-['Graphikthin'] mb-[12px] mt-[57.34px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex justify-center max-sm:w-full max-sm:flex-col gap-[19px]">
            <input
              type="text"
              name=""
              placeholder="Enter your phone number"
              className="w-[368px] text-white max-sm:w-full h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            {refer2 === false && (
              <button
                onClick={() => setrefer2(true)}
                className="w-[118px] h-[53px] max-md:w-full bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                Next{" "}
              </button>
            )}
            {refer2 === true && (
              <button
                onClick={() => setrefer2(true)}
                className="w-[152px] max-md:w-full flex justify-center items-center gap-[8px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
              >
                <Image
                  src="/material-symbols_check.svg"
                  width={24}
                  height={24}
                />{" "}
                <p>Sent! </p>
              </button>
            )}
          </div>
          {refer2 === false && (
            <p className="mt-[32px] text-center max-md:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] text-[#E0E0E0]">
              Don’t have an account?{" "}
              <Link
                href={"/signup"}
                className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
              >
                Sign up
              </Link>
            </p>
          )}
          {refer2 === true && (
            <div className="flex flex-col items-center">
              <div className="flex gap-[13px] items-start   max-md:h-auto max-smallphone:gap-[8px] w-[532px] h-[83px] rounded-[8px] bg-white px-[15px] pt-[17px] mt-[14px] max-md:w-full max-md: p-[15px]">
                <Image
                  src="/material-symbols_info-outline.svg"
                  width={24}
                  height={24}
                />
                <p className="w-[441px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-md:p-0 max-sm:text-sm leading-[19.2px] text-[#030303] pt-[2.5px] max-md:w-full">
                  A WhatsApp message containing the referral link has been sent
                  to this number.{" "}
                </p>
              </div>
              <p
                onClick={() => setrefer2(false)}
                className="border-b-[1px] w-[175px] mt-[14px] cursor-pointer h-[20px] border-[#30E29D] text-[#30E29D]"
              >
                Use a different number{" "}
              </p>
            </div>
          )}
        </div>
      </section>
      <Upskill />
    </>
  );
}
