import Image from "next/image";
import style from "@/styles/style.module.css";

import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Signup() {
  return (
    <>
      <Head>
        <title>ParallelEdu | Signup</title>
        <link rel="canonical" href="https://www.paralleledu.com/signup" />
        <meta
          name="description"
          content="Upskill and get placed at an affordable price."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>

      <div className="absolute left-0 z-10 top-[-101px] w-[100%] h-[844px]">
        <Image
          src="/Group 25.png"
          className=" w-full h-[844px] object-cover"
          width={139.45}
          height={26}
          alt="Signup"
        />
      </div>
      <div className="w-[100%] flex flex-col gap-[66px] max-md:px-[40px] max-sm:px-[20px] max-lg:px-[80px] items-center z-20 relative font-['Graphikthin'] h-[643px]">
        <h1 className="capitalize w-[966.01px] widescreen:w-[1160px] widestscreen:w-[1280px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] widescreen:text-[114px] widestscreen:text-[125px] widescreen:leading-[120%] max-sm:tracking-tight max-smalllaptop:leading-[102%] max-sm:text-left max-lg:w-full mt-[157.5px] max-sm:mt-[80px] text-[#E5E5E5] text-center text-[102.17px] leading-[104.21px] tracking-[-5.1px]">
          Upskill and get placed at an affordable price.
        </h1>
        <div className="flex max-smallphone:flex-col justify-center max-md:justify-between max-md:w-full gap-[18px]">
          <Link
            href={"#"}
            className="w-[140px] widescreen:w-auto widescreen:h-auto widescreen:px-[16px] widescreen:py-[12px] widestscreen:py-[12px] widestscreen:py-[18px] max-smallphone:w-full h-[53px] flex justify-center py-[15.4px] relative bg-[#30E29D] rounded-[8px]"
          >
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[130%] font-semibold text-black leading-[19.2px]">
              Sign up
            </p>
          </Link>
          <Link
            href={"#"}
            className="text-[16px] widescreen:w-auto widescreen:h-auto widescreen:px-[16px] widescreen:py-[12px] widestscreen:py-[12px] widestscreen:py-[18px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-smallphone:w-full w-[140px] h-[53px] flex justify-center py-[15.4px] font-semibold relative border-[1px] text-[#30E29D] border-[#30E29D] rounded-[8px] leading-[20px]"
          >
            <p className="text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[130%] font-semibold text-[#30E29D] leading-[19.2px] ">
              Log in{" "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
