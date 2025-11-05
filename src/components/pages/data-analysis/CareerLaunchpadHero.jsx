// app/components/CareerLaunchpadHero.js

"use client";
import { useModal } from "@/app/context/ModalContext";
import Link from "next/link";

export default function CareerLaunchpadHero() {
  const { openModal } = useModal();
  const features = [
    {
      title: "Hands-On Data Analysis Projects",
      desc: "Work with real datasets and derive actionable insights",
    },
    {
      title: "Internship Opportunities",
      desc: "Work on live CRM implementation and automation projects",
    },
    {
      title: "Mentor Guidance",
      desc: "Personalized support from experienced Tableau professionals",
    },
    {
      title: "Career Mentorship",
      desc: "Resume & LinkedIn optimization, mock interviews, and placement assistance",
    },
    {
      title: "Flexible Learning",
      desc: "Online, self-paced modules with optional live sessions",
    },
    {
      title: "Industry-Relevant Curriculum",
      desc: "Learn Excel, Python, Pandas, NumPy, Matplotlib, Seaborn, SQL, and Tableau",
    },
  ];

  return (
    <section
      // style={{
      //   background: `linear-gradient(70deg, rgb(46 42 243 / 19%) 0%, rgba(0, 0, 0, 0) 30%), linear-gradient(0.97deg, rgba(0, 0, 0, 0) 1.71%, #000000 20.96%)`,
      //   backdropFilter: `blur(115.2px)`,
      //   WebkitBackdropFilter: `blur(115.2px)`, // For Safari support
      // }}
      className="min-h-screen flex flex-col items-center justify-center  px-4 py-12"
    >
      <div className="max-w-7xl w-full text-left">
        <span
          style={{
            background:
              "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="font-medium text-[16px] mb-3 tracking-wide"
        >
          Why Choose This Certification?
        </span>
        <h1 className="text-white mt-6 font-['Graphikthin'] text-5xl sm:text-[64px] mb-[56px]">
          Practical skills, real projects,
          <br />
          career-focused support
        </h1>
        {/* <p className="text-neutral-300 text-[20px] mb-2 max-w-[800px]">
          Hands-on data projects, mentor-led sessions, and GenAI integration
          make you industry-ready from day one.
        </p> */}
      </div>
      {/* Features Table */}
      <div className="w-full max-w-7xl">
        <div className="bg[#20202a] bg-opacity-90 space-y-2 rounded-xl shadow-lg overflow-hidden">
          {features.map((item, i) => (
            <div
              key={i}
              className={
                "flex font-['Graphikthin']  flex-col sm:flex-row justify-between gap-0 border-b border-[#323247]   transition-colors " +
                (i !== 0 ? "border-b border-[#323247] " : "") +
                "hover:bg[#232144]"
              }
            >
              <div
                // style={{
                //   background:
                //     "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                // }}
                className="font-medium text-[24px] font-['Graphikthin'] px-5  py-6 text-left text-[#E0E0E0] sm:w-[40%] w-full bg[#FFFFFF0D] "
              >
                {item.title}
              </div>
              <div className="text- text-[24px] font-['Graphik']  px-5 py-6 bg[#FFFFFF0D] text-[#E0E0E0E5] text-left sm:w-[70%] w-full mt-1 sm:mt-0">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-[56px]">
        <button
          onClick={openModal}
          className="group rounded-[8px] hover:bg-[#30E29D] font-['Graphikmid'] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white"
        >
          Join The Next Cohort
        </button>
      </div>
      {/* <button className="mt-10 bg-transparent border border-[#46F6B7] rounded-lg px-6 py-3 text-[#46F6B7] hover:bg-[#171d20] transition-colors font-medium tracking-wide">
        Join The Next Cohort
      </button> */}
    </section>
  );
}
