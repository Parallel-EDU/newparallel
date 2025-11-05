import CareerLaunchpadHero from "@/components/pages/ai-agent/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/ai-agent/CourseCurriculum";
import HeroBoot from "@/components/pages/ai-agent/HeroBoot";
import HeroSection from "@/components/pages/ai-agent/HeroSection";
import Industry from "@/components/pages/ai-agent/Industry";
import PlacementSupport from "@/components/pages/ai-agent/PlacementSupport";
import PlansPricing from "@/components/pages/ai-agent/PlansPricing";
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
