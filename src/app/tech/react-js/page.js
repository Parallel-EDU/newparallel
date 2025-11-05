import CareerLaunchpadHero from "@/components/pages/react-js/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/react-js/CourseCurriculum";
import HeroBoot from "@/components/pages/react-js/HeroBoot";
import HeroSection from "@/components/pages/react-js/HeroSection";
import Industry from "@/components/pages/react-js/Industry";
import PlacementSupport from "@/components/pages/react-js/PlacementSupport";
import PlansPricing from "@/components/pages/react-js/PlansPricing";
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
