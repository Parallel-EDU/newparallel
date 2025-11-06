"use client";
import Image from "next/image";
import style from "@/styles/style.module.css";

import Link from "next/link";
import { useModal } from "@/app/context/ModalContext";

const Delivers = () => {
  const { openModal } = useModal();
  return (
    <>
      <div className="pt-[102.57px] d-sec -mt-5 max-xl:p-10 max-md:p-4 relative max-sm:py-[32px] max-sm:px-[16`px] max-md:px-[40px] relative pb-[50.43px] pl-[80px] pr-[79px]">
        {/* <div
          className="absolute w-[50%] left-10 rounded-full"
          style={{
            background: "#1AC15880",
            opacity: 0.12,
            mixBlendMode: "screen",
          }}
        /> */}

        {/* <div
          className="absolute left-0 top-72 w-[400px] h-[400px] md:w-[200px] md:h-[300px] rounded-full"
          style={{
            background: "#1AC15880",
            filter: "blur(100px)",
          }}
        /> */}
        <div className="flex justify-between relative z-50 max-smalllaptop:gap-[50px]">
          <p className="w-[765px] font-['Graphikthin'] widescreen:w-[850px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[71.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5]">
            Training that fits your life - and delivers real results.
          </p>
          {/* <Link href={"/courses"}>
            <button className="w-[205px] max-md:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
              Explore courses{" "}
            </button>
          </Link> */}
        </div>
        <p className="w-[544.15px] mt-5 widescreen:w-[80%] max-bigscreen:w-[310px] max-xl:w-full  opacity-80 text-[#E0E0E0] text-[20px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphik']">
          Parallel offers flexible learning modes for students, freshers, and
          working professionals.
        </p>

        <div className="flex gap-[21px] mt-[67px] z-20  relative max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={` bg-transparent w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[24px] bg-transparent z-10 relative max-sm:px-[20px] max-sm:py-[16px] pb-[32px] pr-[24px] pt-[32px] rounded-[8px] border-[#FFFFFF66] border `}
            >
              <div className="bg-[#1F1F1F] w-[105px]  h-[105px] border-[0px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="book-reading--book-reading-learning"
                  src="/Frame 1000002764.svg"
                  width={105}
                  height={105}
                />
              </div>
              <h1 className="w-[340px] text-[#E0E0E0] widescreen:w-full widescreen:h-[82px] widestscreen:h-auto max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[40px] mb-20px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                On-Premise Classroom Training
              </h1>
              <ul className="mt-5 space-y-4 opacity-80">
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5]">
                    Hands-on sessions with expert mentors
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Small batch sizes for personalized guidance
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Peer collaboration & live project work{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] w-[33%]  max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px]  h-[105px] border-[0px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="book-reading--book-reading-learning"
                  src="/Frame 1000002764 copy.svg"
                  width={105}
                  height={105}
                />
              </div>
              <h1 className="w-[340px] text-[#E0E0E0] widescreen:w-full widescreen:h-[82px] widestscreen:h-auto max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[40px] mb-20px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Instructor-Led, Live Online Training
              </h1>
              <ul className="mt-5 space-y-4 opacity-80">
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5]">
                    Real-time classes by industry professionals
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Group projects & instant feedback{" "}
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Full placement support{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] w-[33%] backdrop-blur-2xl max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px]  h-[105px] border-[0px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="book-reading--book-reading-learning"
                  src="/Frame 1000002764 copy 2.svg"
                  width={105}
                  height={105}
                />
              </div>
              <h1 className="w-[340px] text-[#E0E0E0] widescreen:w-full widescreen:h-[82px] widestscreen:h-auto max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[40px] mb-20px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Self-Paced Online Training
              </h1>
              <ul className="mt-5 space-y-4 opacity-80">
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5]">
                    Structured pre-recorded content{" "}
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Mentor check-ins for progress
                  </span>
                </li>
                <li className="flex items-start jus gap-3 text-[16px] text-[#E0E0E0]">
                  <span className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full">
                    {" "}
                    <Image
                      alt="book-reading--book-reading-learning"
                      src="/Vector (6).svg"
                      width={12}
                      height={10}
                    />
                  </span>
                  <span className="leading-[1.5] text-[Peer collaboration & live project work]">
                    Flexible for independent learners{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center z-[9999] relative">
          <button
            onClick={openModal}
            className="w-[244px] max-md:block font-['Graphikmid']  mt-[67px] h-[53px] bg-[#000] rounded-[8px] border border-[#30E29D] font-[500] text-[#30E29D] hover:bg-[#30E29D] hover:text-[#292929] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] txtt-[16px]"
          >
            Join the Next Cohort
          </button>
        </div>
      </div>
    </>
  );
};

export default Delivers;
