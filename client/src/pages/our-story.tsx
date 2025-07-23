import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import StorySection from "../components/story-section";
import Footer from "../components/footer";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}