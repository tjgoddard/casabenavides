import { memo } from "react";
import { HOME_IMAGE_URLS } from "../lib/home-image-urls";

const experiencePhotos: { src: string; alt: string; href: string }[] = [
  { src: HOME_IMAGE_URLS.experienceTaos.taosMountains, alt: "Taos Mountains", href: "/experiences" },
  { src: HOME_IMAGE_URLS.experienceTaos.taosSkiValley, alt: "Taos Ski Valley", href: "/experiences" },
  { src: HOME_IMAGE_URLS.experienceTaos.pueblo, alt: "Taos Pueblo", href: "/experiences" },
  { src: HOME_IMAGE_URLS.experienceTaos.rioGrandeGorge, alt: "Rio Grande Gorge", href: "/experiences" },
];

export default memo(function SeasonalSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">EXPERIENCE TAOS</h2>
            
            <p className="luxury-body text-lg text-gray-800 leading-relaxed">
              From world-class skiing at Taos Ski Valley to fireside evenings, vibrant art galleries, and unforgettable Southwestern cuisine. Casa Benavides puts you in the heart of it all.
            </p>
            
            <div className="pt-6">
              <div className="textured-btn-wrap">
                <div className="textured-btn-border" />
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="textured-btn"
                >Book Your Escape</a>
              </div>
            </div>
          </div>
          
          {/* Experience Taos photos (Supabase) */}
          <div className="grid grid-cols-2 gap-4">
            {experiencePhotos.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});