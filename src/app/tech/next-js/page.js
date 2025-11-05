import CareerLaunchpadHero from "@/components/pages/next-js/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/next-js/CourseCurriculum";
import HeroBoot from "@/components/pages/next-js/HeroBoot";
import HeroSection from "@/components/pages/next-js/HeroSection";
import Industry from "@/components/pages/next-js/Industry";
import PlacementSupport from "@/components/pages/next-js/PlacementSupport";
import PlansPricing from "@/components/pages/next-js/PlansPricing";
import Success from "@/components/success";

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
