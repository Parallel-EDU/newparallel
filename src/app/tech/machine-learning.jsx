//  "@/components/footer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";
import CareerLaunchpadHero from "@/components/pages/pyton/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/pyton/CourseCurriculum";
import CourseRoadmap from "@/components/pages/pyton/CourseRoadmap";
import HeroBoot from "@/components/pages/pyton/HeroBoot";
import Industry from "@/components/pages/pyton/Industry";
import PlacementSupport from "@/components/pages/pyton/PlacementSupport";
import PlansPricing from "@/components/pages/pyton/PlansPricing";

import React from "react";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        {/* <Industry /> */}
        <PlacementSupport />
        <PlansPricing />
        {/* <CourseRoadmap /> */}
        <Blog />
        <HeroSection />
      </div>
    </>
  );
};

export default devOps;
