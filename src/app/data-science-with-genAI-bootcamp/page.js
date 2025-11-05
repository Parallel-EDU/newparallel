import CareerLaunchpadHero from "@/components/pages/data-science-with-genAI-bootcamp/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/data-science-with-genAI-bootcamp/CourseCurriculum";
import CourseRoadmap from "@/components/pages/data-science-with-genAI-bootcamp/CourseRoadmap";
import HeroBoot from "@/components/pages/data-science-with-genAI-bootcamp/HeroBoot";
import HeroSection from "@/components/pages/data-science-with-genAI-bootcamp/HeroSection";
import Industry from "@/components/pages/data-science-with-genAI-bootcamp/Industry";
import PlacementSupport from "@/components/pages/data-science-with-genAI-bootcamp/PlacementSupport";
import PlansPricing from "@/components/pages/data-science-with-genAI-bootcamp/PlansPricing";
import Blog from "@/components/pages/Home/Blog";
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
