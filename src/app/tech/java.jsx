import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";
import CareerLaunchpadHero from "@/components/pages/java-old/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/java-old/CourseCurriculum";
import HeroBoot from "@/components/pages/java-old/HeroBoot";
import PlacementSupport from "@/components/pages/java-old/PlacementSupport";
import PlansPricing from "@/components/pages/java-old/PlansPricing";
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
