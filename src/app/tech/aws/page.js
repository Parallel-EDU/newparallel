import CareerLaunchpadHero from "@/components/pages/aws/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/aws/CourseCurriculum";
import HeroBoot from "@/components/pages/aws/HeroBoot";
import HeroSection from "@/components/pages/aws/HeroSection";
import Industry from "@/components/pages/aws/Industry";
import PlacementSupport from "@/components/pages/aws/PlacementSupport";
import PlansPricing from "@/components/pages/aws/PlansPricing";
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
