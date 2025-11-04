import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CareerLaunchpadHero from "@/components/pages/devOps-and-cloud-computing-bootcamp/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/devOps-and-cloud-computing-bootcamp/CourseCurriculum";
import CourseRoadmap from "@/components/pages/devOps-and-cloud-computing-bootcamp/CourseRoadmap";
import HeroBoot from "@/components/pages/devOps-and-cloud-computing-bootcamp/HeroBoot";
import Industry from "@/components/pages/devOps-and-cloud-computing-bootcamp/Industry";
import PlacementSupport from "@/components/pages/devOps-and-cloud-computing-bootcamp/PlacementSupport";
import PlansPricing from "@/components/pages/devOps-and-cloud-computing-bootcamp/PlansPricing";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";

import React from "react";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <Industry />
        <PlacementSupport />
        <PlansPricing />
        <CourseRoadmap />
        <HeroSection />
        <Blog />
      </div>
    </>
  );
};

export default devOps;
