import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import Bootcamps from "@/components/pages/Home/Bootcamps";
import Certifications from "@/components/pages/Home/Certifications";
import Delivers from "@/components/pages/Home/Delivers/Delivers";
import Hero from "@/components/pages/Home/Hero/Hero";
import HeroSection from "@/components/pages/Home/HeroSection";
import HiringPartners from "@/components/pages/Home/HiringPartners";
import HowItWorks from "@/components/pages/Home/HowItWorks";
import StudentProjects from "@/components/pages/Home/StudentProjects";
import TrainingModes from "@/components/pages/Home/TrainingModes";
import Success from "@/components/success";
import React from "react";

const newHome = () => {
  return (
    <div>
      <Hero />
      <Delivers />
      <Bootcamps />
      <div>
        <Certifications />
        {/* <div className="absolute -top-40 -z10 h-[500px] flex justify-center">
          <div
            className="w-[1100px] h-full rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #1BD44F 0%, rgba(14, 11, 180, 0.43) 100%)",
              filter: "blur(326.8px)",
              opacity: 0.8,
            }}
          ></div>
        </div> */}
        <HowItWorks />
      </div>
      <div className="hiring-bg">
        <HiringPartners />
        <Success />
      </div>
      <StudentProjects />
      <Blog />
      <HeroSection />
    </div>
  );
};

export default newHome;
