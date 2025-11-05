import CareerLaunchpadHero from "@/components/pages/vue-js/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/vue-js/CourseCurriculum";
import HeroBoot from "@/components/pages/vue-js/HeroBoot";
import HeroSection from "@/components/pages/vue-js/HeroSection";
import Industry from "@/components/pages/vue-js/Industry";
import PlacementSupport from "@/components/pages/vue-js/PlacementSupport";
import PlansPricing from "@/components/pages/vue-js/PlansPricing";
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
