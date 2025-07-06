import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <LocationSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
