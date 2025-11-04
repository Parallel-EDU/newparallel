// app/components/CareerLaunchpadHero.js

"use client";

import Link from "next/link";

export default function CareerLaunchpadHero() {
  const features = [
    {
      title: "End-to-End DevOps Training",
      desc: "CI/CD pipelines, containerization, monitoring, and cloud deployments — built from scratch ",
    },
    {
      title: "Hands-On Projects & Labs",
      desc: "Deploy real apps using Docker, Kubernetes, Jenkins, AWS, Terraform & more",
    },
    {
      title: "AI-Powered Cloud Automation",
      desc: "Use GenAI tools to generate scripts, optimize pipelines, and auto-debug configs",
    },
    {
      title: "1:1 Mentorship from Engineers",
      desc: "Work with real DevOps professionals guiding you every step",
    },
    {
      title: "Interview & Resume Support",
      desc: "Get groomed for top DevOps and Cloud Engineer roles",
    },
    {
      title: "Placement Assistance Until Hired",
      desc: "We stay with you until you land your job offer",
    },
  ];

  return (
    <section
      style={{
        background: `linear-gradient(70deg, rgb(46 42 243 / 19%) 0%, rgba(0, 0, 0, 0) 30%), linear-gradient(0.97deg, rgba(0, 0, 0, 0) 1.71%, #000000 20.96%)`,
        backdropFilter: `blur(115.2px)`,
        WebkitBackdropFilter: `blur(115.2px)`, // For Safari support
      }}
      className="min-h-screen flex flex-col items-center justify-center  px-4 py-20"
    >
      <div className="max-w-7xl w-full text-left mb-12">
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
          Why Choose Parallel
        </span>
        <h1 className="text-white font-['Graphikthin'] text-5xl sm:text-[64px] font- leading- mb-5">
          Not Just Tools - Real DevOps <br />
          Expertise
        </h1>
        <p className="text-neutral-300 text-[20px] mb-2 max-w-[800px]">
          Go beyond basic tutorials. Master real-world automation, cloud
          deployment, and GenAI integration that employers demand.
        </p>
      </div>
      {/* Features Table */}
      <div className="w-full max-w-7xl">
        <div className="bg[#20202a] bg-opacity-90 space-y-2 rounded-xl shadow-lg overflow-hidden">
          {features.map((item, i) => (
            <div
              key={i}
              className={
                "flex font-['Graphikthin']  flex-col sm:flex-row justify-between gap-0   transition-colors " +
                (i !== 0 ? "bordert border[#323247] " : "") +
                "hover:bg[#232144]"
              }
            >
              <div
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                }}
                className="font-medium text-[24px] px-5 py-6 text-left text-white sm:w-[40%] w-full bg[#FFFFFF0D] "
              >
                {item.title}
              </div>
              <div className="text- text-[24px]  px-5 py-6 bg-[#FFFFFF0D] text-[#E0E0E0] text-left sm:w-[70%] w-full mt-1 sm:mt-0">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-7">
        <Link href={"/hire-from-us"}>
          <button className="group rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white">
            Join The Next Cohort
          </button>
        </Link>
      </div>
      {/* <button className="mt-10 bg-transparent border border-[#46F6B7] rounded-lg px-6 py-3 text-[#46F6B7] hover:bg-[#171d20] transition-colors font-medium tracking-wide">
        Join The Next Cohort
      </button> */}
    </section>
  );
}
