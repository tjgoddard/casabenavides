import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { HOME_IMAGE_URLS } from "../lib/home-image-urls";

interface HeroSectionProps {
  showSubtitle?: boolean;
  /** When true, use same height as Gallery page hero (40vh / 300px) for non-home pages */
  compact?: boolean;
}

const heroAlt = "Casa Benavides Inn - Homepage Banner";

export default function HeroSection({ showSubtitle = false, compact = false }: HeroSectionProps) {
  const heroSrc = HOME_IMAGE_URLS.heroBanner;
  useEffect(() => {
    if (!heroSrc) return;
    const existing = document.querySelector(`link[rel="preload"][as="image"][href="${heroSrc}"]`);
    if (existing) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroSrc;
    document.head.appendChild(link);
    return () => link.remove();
  }, [heroSrc]);

  return (
    <section id="home" className={`relative bg-gray-900 ${compact ? "pt-[88px]" : ""}`}>
      <div
        className={`relative w-full overflow-hidden bg-gray-900 ${compact ? "min-h-[300px]" : "min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]"}`}
        style={{ aspectRatio: "16 / 9" }}
      >
        <img
          src={heroSrc}
          alt={heroAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "25% 30%" }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-15" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="text-white px-4 max-w-6xl mx-auto">
            
            
            <div id="hero-nav-buttons" className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-8">
              <a 
                href="/gallery"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
                onClick={() => trackEvent('click', 'navigation', 'hero_gallery_button')}
              >
                GALLERY
              </a>
              <a 
                href="/our-story"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                OUR STORY
              </a>
              <a 
                href="/breakfast"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                BREAKFAST
              </a>
              <a 
                href="/experiences"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                EXPERIENCES
              </a>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
