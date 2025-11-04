"use client";
import Image from "next/image";
import style from "@/styles/style.module.css";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Upskill from "../components/upskill";
// import Success from "../components/success";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Upskill from "@/components/upskill";
import Footer from "@/components/footer";
import Success from "@/components/success";

export default function Fees() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      Email,
      Phone_Number,
    };
    try {
      const response = await axios.post("/api/fees", data);
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
        <title>ParallelEdu | Fees</title>
        <link rel="canonical" href="https://www.paralleledu.com/fees" />
        <meta
          name="description"
          content="A plethora of topics to upskill on."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>
      <div className="absolute z-20 w-[100%] h-[822px] top-[-200px] overflow-hidden">
        <div className={style.backgroundcolor}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[622px] right-0 overflow-hidden">
        <div className={style.backgroundcolor3}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[622px] right-0 overflow-hidden">
        <div className={style.backgroundcolor2}></div>
      </div>
      <div className="absolute w-[100%] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.backgroundbox}></div>
      </div>
      <div className="absolute z-40 overflow-hidden w-[100%] h-[100vh] top-[811px] left-0 overflow-x-hidden">
        <div className={style.backgroundbox2}></div>
      </div>
      <main className="pl-[80px] max-md:px-[40px] z-50 max-sm:px-[20px] max-md:pt-[50px] relative z-20 pt-[117.42px] pb-[211.58px] max-md:pb-0">
        <h1 className="w-[894.59px] max-hamburger:w-full max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-['Graphikthin'] text-[127.98px] text-[#E5E5E5] leading-[130.54px] tracking-[-6.35px]">
          We charge you ₹<span className="font-semibold">0 </span>upfront.
        </h1>
      </main>
      <section className="px-[80px] relative z-20 pt-[96.09px] max-md:py-20 max-md:px-[40px] max-sm:px-[20px] pb-[95.91px] flex flex-col gap-[57px]">
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] font-['Graphikthin'] w-[818.23px] max-hamburger:w-full">
          Because we believe that education should never be behind a paywall.
        </p>
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] w-[818.23px] leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] font-['Graphikthin'] w-[818.23px] max-hamburger:w-full">
          We’ll help you upskill, get placed, and charge you only 15
          <span className="font-['Graphik'] opacity-90 font-light">%</span> of
          your CTC for 12 months.
        </p>
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] w-[818.23px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] font-['Graphikthin'] w-[818.23px] max-hamburger:w-full">
          We will not charge you until you get placed.
        </p>
      </section>
      <section className="relative z-20 py-[80px]">
        <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>{" "}
      <section className="py-[120.5px] max-md:px-[40px] max-smallphone:gap-[10px] max-sm:px-[20px] max-md:pt-[50px] max-sm:pt-[30px] pl-[80px] flex flex-col gap-[51px]">
        <p className="text-[#E5E5E5] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-md:text-[24px] max-md:leading-[120%] max-smallphone:text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[30.84px] tracking-[-0.6px]">
          What you will be paying us
        </p>
        <h1 className="w-[1172px] max-xl:w-full text-[147.6px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-['Graphikthin'] leading-[142.26px] text-[#E5E5E5] tracking-[-5.9px]">
          <span className="font-semibold font-['Graphik']">15</span>
          <span className="font-['Graphik'] font-light">%</span> of your CTC for{" "}
          <span className="font-semibold font-['Graphik']">12 months.</span>
        </h1>
      </section>
      <section className="pt-[37.08px] px-[80px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] pb-[74.31px] flex flex-col items-center gap-[131.61px]">
        <div className="flex flex-col items-center max-md:w-full">
          <p className="text-[20px] text-center leading-[19.28px] text-[#E5E5E5] font-['Graphikthin']">
            Drop out policy
          </p>
          <h1 className="w-[890.53px] max-hamburger:w-full mt-[39px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] leading-[61.68px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-center tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] font-['Graphikthin']">
            Pay a fixed fee and drop out anytime
          </h1>
          <table className="w-[826px] max-sm:text-[24px] max-smallphone:text-[20px] max-hamburger:w-full mt-[51px] font-['Graphikthin'] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[30.84px] font-light text-[#E5E5E5] tracking-[-0.64px] text-left h-[336px]">
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 1 - 4
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                No Payment
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 5 - 12
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                ₹15,000
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 13 - 18
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                ₹30,000
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 18 - 24{" "}
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                ₹45,000{" "}
              </th>
            </tr>
          </table>
        </div>
        <div className="flex flex-col max-md:w-full items-center gap-[24px]">
          <p className="text-[32px] leading-[30.84px] tracking-[-0.64px] text-center text-[#E5E5E5] font-['Graphikthin']">
            Have doubts on fee policy?
          </p>
          <Link
            href={"/contact-us"}
            className="w-[165px] max-md:w-full flex justify-center items-center h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
          >
            Contact us{" "}
          </Link>
        </div>
      </section>
      <div className="pt-[87.5px] pb-[88px] flex justify-between relative z-20 px-[80px] max-md:flex-col max-md:gap-[50px] max-sm:px-[20px] max-md:px-[40px]">
        <div className="w-[675.77px] max-md:w-full">
          <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] mb-[41px] leading-[61.88px] text-[#E5E5E5] tracking-[-2.56px] max-sm:tracking-tight font-['Graphikthin']">
            Never let high fees be the excuse.{" "}
          </p>
          <p className="text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] w-[393.32px] max-sm:w-full max-hamburger:w-auto text-[#E5E5E5] font-['Graphikthin']">
            Thousands of students have gotten placed through Parallel. What are
            you waiting for?
          </p>
        </div>
        <div className="w-[442px] max-md:w-full max-sm:gap-20px max-sm:p-[20px] flex flex-col z-20 gap-[32px] h-[484px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Name
            </p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Email
            </p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px]">
              Phone Number
            </p>
            <input
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone_Number(e.target.value)}
              className="h-[54px] widescreen:h-auto widescreen:py-[18px] widestscreen:py-[24px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]"
          >
            Talk to our experts{" "}
          </button>
        </div>
      </div>
      <Upskill />
    </>
  );
}
