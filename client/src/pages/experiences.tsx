import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperiencesSection from "@/components/experiences-section";
import Footer from "@/components/footer";

export default function Experiences() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}