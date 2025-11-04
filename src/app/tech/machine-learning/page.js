import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";
import CareerLaunchpadHero from "@/components/pages/machineLearning/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/machineLearning/CourseCurriculum";
import HeroBoot from "@/components/pages/machineLearning/HeroBoot";
import PlacementSupport from "@/components/pages/machineLearning/PlacementSupport";
import PlansPricing from "@/components/pages/machineLearning/PlansPricing";
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
