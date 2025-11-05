import CareerLaunchpadHero from "@/components/pages/node-js/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/node-js/CourseCurriculum";
import HeroBoot from "@/components/pages/node-js/HeroBoot";
import HeroSection from "@/components/pages/node-js/HeroSection";
import Industry from "@/components/pages/node-js/Industry";
import PlacementSupport from "@/components/pages/node-js/PlacementSupport";
import PlansPricing from "@/components/pages/node-js/PlansPricing";
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
