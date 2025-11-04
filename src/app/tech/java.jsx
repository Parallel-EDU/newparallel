import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";
import CareerLaunchpadHero from "@/components/pages/java/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/java/CourseCurriculum";
import HeroBoot from "@/components/pages/java/HeroBoot";
import PlacementSupport from "@/components/pages/java/PlacementSupport";
import PlansPricing from "@/components/pages/java/PlansPricing";
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
