import CareerLaunchpadHero from "@/components/pages/ai-prompt/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/ai-prompt/CourseCurriculum";
import HeroBoot from "@/components/pages/ai-prompt/HeroBoot";
import HeroSection from "@/components/pages/ai-prompt/HeroSection";
import Industry from "@/components/pages/ai-prompt/Industry";
import PlacementSupport from "@/components/pages/ai-prompt/PlacementSupport";
import PlansPricing from "@/components/pages/ai-prompt/PlansPricing";
import Success from "@/components/success";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <PlacementSupport />
        {/* <Industry /> */}
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
