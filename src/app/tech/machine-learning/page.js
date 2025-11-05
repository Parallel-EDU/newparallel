import Blog from "@/components/pages/Home/Blog";
import CareerLaunchpadHero from "@/components/pages/machine-learning/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/machine-learning/CourseCurriculum";
import HeroBoot from "@/components/pages/machine-learning/HeroBoot";
import HeroSection from "@/components/pages/machine-learning/HeroSection";
import Industry from "@/components/pages/machine-learning/Industry";
import PlacementSupport from "@/components/pages/machine-learning/PlacementSupport";
import PlansPricing from "@/components/pages/machine-learning/PlansPricing";
import Success from "@/components/success";
import React from "react";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <PlacementSupport />
        <Industry />
        <PlansPricing />
        <Success />
        {/* <CourseRoadmap /> */}
        {/* <Blog /> */}
        <HeroSection />
      </div>
    </>
  );
};

export default devOps;
