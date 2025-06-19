import FeaturesCourses from "@/components/FeaturesCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfineScroll from "@/components/InfineScroll";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.5]">
    
        <HeroSection/>
        <FeaturesCourses/>
        <WhyChooseUs/>
        <InfineScroll/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
    </main>
    </div>
  );
}
