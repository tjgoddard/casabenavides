import { ArrowRight } from "lucide-react";
import heroImage2 from "../../../attached_assets/iStock-1458935906_1752360314185.webp";
import skiValleyImage from "../../../attached_assets/taos-ski-valley-aerial.webp";

const destinations: {
  src: string;
  alt: string;
  title: string;
  chip: string;
  objectPosition?: string;
}[] = [
  {
    src: heroImage2,
    alt: "Taos Mountain landscape at sunset",
    title: "Taos Mountains",
    chip: "Scenic drives & hiking",
  },
  {
    src: skiValleyImage,
    alt: "Taos Ski Valley",
    title: "Taos Ski Valley",
    chip: "20 min drive",
  },
  {
    src: "/taos-pueblo.jpg",
    alt: "Taos Pueblo",
    title: "Taos Pueblo",
    chip: "UNESCO · 10 min",
    objectPosition: "center 90%",
  },
  {
    src: "/rio-grande-gorge.webp",
    alt: "Rio Grande Gorge and Bridge",
    title: "Rio Grande Gorge",
    chip: "15 min drive",
  },
];

export default function HomeGallerySection() {
  return (
    <section id="explore-taos" className="w-full bg-casa-cream py-12 md:py-16" aria-label="Explore Taos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text stacked on top, then cards below (desktop and mobile) */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="luxury-heading text-3xl md:text-4xl text-casa-navy mb-4">Explore Taos</h2>
            <p className="luxury-body text-lg text-gray-800 leading-relaxed mb-6">
              From world-class skiing and ancient pueblos to the Rio Grande Gorge and Taos Plaza—adventure and culture are minutes from your door.
            </p>
            <a
              href="/experiences"
              className="inline-flex items-center gap-2 text-casa-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-casa-blue focus:ring-offset-2 rounded"
            >
              Explore Experiences
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
          </div>

          {/* Destination cards: no links, no "Learn more". Desktop = 2x2 grid, Mobile = horizontal scroll with snap */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-[260px] lg:w-auto snap-center rounded-xl overflow-hidden bg-white shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.src}
                    alt={dest.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={dest.objectPosition ? { objectPosition: dest.objectPosition } : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
                    {dest.chip}
                  </span>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-gray-900">{dest.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
