import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import FeaturesSection from "@/components/features-section";
import BreakfastSection from "@/components/breakfast-section";
import ContactSection from "@/components/contact-section";
import StorySection from "@/components/story-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <LocationSection />
        <FeaturesSection />
        <BreakfastSection />
        <ContactSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}
