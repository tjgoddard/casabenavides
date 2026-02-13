import { memo } from "react";
import interiorImage from "../../../attached_assets/IMG_4445_1752533547607.webp";

export default memo(function GallerySection() {
  return (
    <section id="gallery" className="relative w-full bg-casa-cream">
      <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] md:aspect-[21/9] overflow-hidden">
        <img
          src={interiorImage}
          alt="Casa Benavides Inn - Interior Living Space with Southwest Decor"
          width={1920}
          height={810}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="100vw"
        />
        {/* Subtle bottom-to-top gradient for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"
          aria-hidden
        />
        {/* Bottom fade into Reviews: transparent → warm tan (reviews background tone) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[220px] md:h-[260px] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #e8e0d8 0%, rgba(232, 224, 216, 0.6) 40%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2
            className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            GALLERY
          </h2>
          <div className="mt-8 textured-btn-wrap inline-block">
            <div className="textured-btn-border" />
            <a
              href="/gallery"
              className="textured-btn no-underline bg-[#f5f0e8] text-[#1a365d] hover:bg-[#1a365d] hover:text-white"
            >
              View All Images
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
