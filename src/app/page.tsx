import CategoriesSection from "@/components/sections/home/CategoriesSection";
import ExperienceHighlightsSection from "@/components/sections/home/ExperienceHighlightsSection";
import FeaturedEventsSection from "@/components/sections/home/FeaturedEventsSection";
import HeroSection from "@/components/sections/home/HeroSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import NearbyEventsSection from "@/components/sections/home/NearbyEventsSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedEventsSection />
      <NearbyEventsSection />
      <HowItWorksSection />
      <ExperienceHighlightsSection />
      <ReviewsSection />
    </>
  );
}
