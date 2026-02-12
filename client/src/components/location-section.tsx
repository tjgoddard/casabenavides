import { memo } from "react";
import locationImg from "../../../attached_assets/IMG_3403.png";

export default memo(function LocationSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* STAIR CASE (hidden for now – restore by uncommenting block below and removing image grid) */}
      {/* <svg className="absolute" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="sand-texture">
            <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="textured" />
            <feComponentTransfer in="textured">
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div
        className="absolute -top-1 right-0 bottom-0 w-full pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(180deg, #d4a05a 0%, #dbb06e 20%, #e2be82 40%, #eacd9a 60%, #f0dbb2 78%, #f5ece0 100%)',
          clipPath: `polygon(
            45% 0%, 100% 0%, 100% 100%,
            65% 100%,
            65% 84%,
            60% 84%,
            60% 68%,
            55% 68%,
            55% 52%,
            52% 52%,
            52% 36%,
            49% 36%,
            49% 20%,
            45% 20%,
            45% 0%
          )`,
          filter: 'url(#sand-texture)',
        }}
      /> */}

      {/* Content: text left, image right (image from About section) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center text-center lg:items-center lg:justify-center">
            <div className="max-w-sm w-full text-center lg:text-left">
              <p className="luxury-body text-lg text-gray-800 leading-relaxed">
                In the heart of Taos, where adobe streets, art, and high-desert spirit meet, Casa Benavides offers a stay rooted in New Mexico's charm and history. This intimate historic bed & breakfast is your walkable home base for the Plaza's galleries and shops, local flavors, and the culture that makes Taos unforgettable. When adventure calls, you're perfectly placed for everything from Taos Ski Valley to the Rio Grande Gorge and the High Road, then back to a cozy, character-filled retreat that feels distinctly Taos.
              </p>

              {/* Textured border button */}
              <div className="mt-6 textured-btn-wrap inline-block">
                <div className="textured-btn-border" />
                <a href="/our-story" className="textured-btn">Our Inn</a>
              </div>
            </div>
          </div>
          {/* Image (moved from About section) - slightly larger */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/20 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 smooth-transition" />
            <img
              src={locationImg}
              alt="Casa Benavides Inn authentic Southwest architecture"
              width={800}
              height={600}
              className="relative w-full h-[420px] lg:h-[540px] object-cover rounded-2xl luxury-shadow smooth-transition group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 55vw"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
});
