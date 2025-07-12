import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SeasonalSection from "@/components/seasonal-section";
import LocationSection from "@/components/location-section";
import FeaturesSection from "@/components/features-section";
import PackagesSection from "@/components/packages-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <SeasonalSection />
        <LocationSection />
        <FeaturesSection />
        <PackagesSection />
      </main>
      <Footer />
    </div>
  );
}
