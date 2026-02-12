import { lazy, Suspense } from "react";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import LocationSection from "../components/location-section";
import Footer from "../components/footer";

// Lazy load below-the-fold sections
const GallerySection = lazy(() => import("../components/gallery-section"));
const ReviewsSection = lazy(() => import("../components/reviews-section"));
const SeasonalSection = lazy(() => import("../components/seasonal-section"));

export default function Home() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main>
        <HeroSection showSubtitle={true} />
        <LocationSection />
        <Suspense fallback={<div className="h-96" />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ReviewsSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <SeasonalSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
