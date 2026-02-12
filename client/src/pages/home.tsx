import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import SeasonalSection from "../components/seasonal-section";
import LocationSection from "../components/location-section";
import GallerySection from "../components/gallery-section";
import ReviewsSection from "../components/reviews-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main>
        <HeroSection showSubtitle={true} />
        <LocationSection />
        <GallerySection />
        <ReviewsSection />
        <SeasonalSection />
      </main>
      <Footer />
    </div>
  );
}
