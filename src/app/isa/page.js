import Image from "next/image";
import style from "@/styles/style.module.css";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Upskill from "../components/upskill";
// import Success from "../components/success";
import Link from "next/link";
import Head from "next/head";
import Success from "@/components/success";
import Upskill from "@/components/upskill";

export default function Courses() {
  return (
    <>
      <Head>
        <title>ParallelEdu | ISA</title>
        <link rel="canonical" href="https://www.paralleledu.com/isa" />
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
      <main className="pl-[80.27px] max-hamburger:px-20 relative z-20 pt-[163px] pb-[186.03px] max-md:px-[40px] max-sm:px-[20px] max-md:py-[50px]">
        <h1 className="w-[894.59px] max-smalllaptop:w-[850px] max-hamburger:w-full max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-['Graphikthin'] text-[127.98px] text-[#E5E5E5] leading-[130.54px] tracking-[-6.35px]">
          ISA that doesn’t feel like a burden.{" "}
        </h1>
        <p className="w-[383.32px] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] max-md:w-full text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] leading-[30px] text-[#E0E0E0] font-['Graphikthin'] mt-[41.97px] opacity-90">
          We understand how precious the salary from your first job feels.
          That’s why our ISA’s terms are kept flexible.
        </p>
      </main>
      <section className="pl-[80px] max-lg:px-[80px] max-md:py-10 max-md:px-[40px] max-sm:px-[20px] relative z-20 pt-[96.09px] pb-[159.91px] flex flex-col gap-[57px]">
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px] max-hamburger:w-full">
          The fee is charged only after you get job.{" "}
        </p>
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] w-[818.23px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] max-hamburger:w-full">
          We will pause the ISA if you stop working, and resume once you start
          again.{" "}
        </p>
        <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] w-[818.23px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] max-hamburger:w-full">
          You can drop out anytime by paying a minimum fee for the time spent on
          our platform.{" "}
        </p>
      </section>
      <div className="pt-[72.24px] relative z-20 pb-[72px] pl-[79.24px] pr-[79.15px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:w-full font-['Graphikthin'] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            ISA that works with you, not against you.{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[49.16px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="Calendar-3"
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-md:mb-[18.16px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[58.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                1 year policy{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                If you end up not getting a job within a year after completing
                the course, you will be charged nothing.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  alt="discount"
                  src="/discount.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Pay only a small percentage of your CTC{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                We only ask 15
                <span className="font-['Graphik'] font-light opacity-90">
                  %
                </span>{" "}
                of your CTC for 12 months, nothing more. Once the you pay the
                complete fee, the ISA will be terminated
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image alt="pause" src="/pause.svg" width={60} height={60} />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Stop paying us if you are not working{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
                If you lose your job due to unfortunate circumstances, your ISA
                will be paused until you get another job.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-[120.5px] max-md:px-[40px] max-sm:px-[20px] max-md:pt-[50px] max-sm:pt-[30px] pl-[80px] flex flex-col gap-[51px]">
        <p className="text-[#E5E5E5] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[30.84px] tracking-[-0.6px]">
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
          <h1 className="w-[890.53px] max-hamburger:w-full mt-[39px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] leading-[61.68px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-center tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin']">
            Pay a fixed fee and drop out anytime
          </h1>
          <table className="w-[826px] max-sm:text-[24px] max-smallphone:text-[20px] max-hamburger:w-full mt-[51px] font-['Graphikthin'] text-[32px] widescreen:text-[38px] widestscreen:text-[44px] widescreen:leading-[120%] leading-[30.84px] font-light text-[#E5E5E5] tracking-[-0.64px] text-left h-[336px]">
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 1 - 4
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                No Payment
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 5 - 12
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                ₹15,000
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 13 - 18
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                ₹30,000
              </th>
            </tr>
            <tr>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
                Week 18 - 24{" "}
              </th>
              <th className="w-[413px] max-hamburger:w-[50%] h-[112px] pl-[32.76px] max-sm:pl-[16px] border-[1px] border-[#E5E5E5] font-['Graphikthin'] font-light text-[#E5E5E5]">
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
      <section className="relative z-20 py-[80px]">
        <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>{" "}
      <Upskill />
    </>
  );
}
