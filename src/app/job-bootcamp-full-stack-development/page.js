import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import HeroSection from "@/components/pages/Home/HeroSection";
import CareerLaunchpadHero from "@/components/pages/job-bootcamp-full-stack-development/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/job-bootcamp-full-stack-development/CourseCurriculum";
import CourseRoadmap from "@/components/pages/job-bootcamp-full-stack-development/CourseRoadmap";
import HeroBoot from "@/components/pages/job-bootcamp-full-stack-development/HeroBoot";
import Industry from "@/components/pages/job-bootcamp-full-stack-development/Industry";
import PlacementSupport from "@/components/pages/job-bootcamp-full-stack-development/PlacementSupport";
import PlansPricing from "@/components/pages/job-bootcamp-full-stack-development/PlansPricing";
import React from "react";

const jobbootcampfullstackdevelopment = () => {
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

export default jobbootcampfullstackdevelopment;
