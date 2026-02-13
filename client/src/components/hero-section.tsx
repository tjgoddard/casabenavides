import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import heroImage1 from "../../../attached_assets/IMG_4448 edit no sky_(2)_1752537525049.jpg";
import heroImage2 from "../../../attached_assets/iStock-1458935906_1752360314185.jpg";
import heroImage3 from "../../../attached_assets/IMG_4446_1752533547603.jpg";
import heroImage4 from "../../../attached_assets/IMG_4445_1752533547607.jpg";
import logoImage from "../../../attached_assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)-Photoroom_1752359300963.jpg";

interface HeroSectionProps {
  showSubtitle?: boolean;
  /** When true, use same height as Gallery page hero (40vh / 300px) for non-home pages */
  compact?: boolean;
}

const images = [
  { src: heroImage1, alt: "Casa Benavides Inn - Adobe Architecture at Sunset with Turquoise Accents" },
  { src: heroImage2, alt: "Taos Mountain Landscape at Sunset" },
  { src: heroImage3, alt: "Casa Benavides Inn - Courtyard Patio with Colorful Umbrellas" },
  { src: heroImage4, alt: "Casa Benavides Inn - Interior Living Space with Southwest Decor" }
];

export default function HeroSection({ showSubtitle = false, compact = false }: HeroSectionProps) {

  // Static image - no carousel rotation
  const currentImageIndex = 0;

  // Preload LCP hero image so the browser fetches it as early as possible
  const heroSrc = images[0].src;
  useEffect(() => {
    const src = typeof heroSrc === "string" ? heroSrc : "";
    if (!src) return;
    const existing = document.querySelector(`link[rel="preload"][as="image"][href="${src}"]`);
    if (existing) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
    return () => link.remove();
  }, [heroSrc]);

  return (
    <section id="home" className={`relative bg-gray-900 ${compact ? "pt-[88px]" : ""}`}>
      {/* Hero Section - full height on home; compact (same as Gallery) on other pages */}
      <div className={`relative overflow-hidden bg-gray-900 ${compact ? "h-[40vh] min-h-[300px]" : "h-[85vh] min-h-[600px]"}`}>
        {/* Static hero image - dimensions reduce CLS */}
        <img 
          src={images[0].src}
          alt={images[0].alt}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: '25% 30%' }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        
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
