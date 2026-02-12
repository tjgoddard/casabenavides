import Navigation from "../components/navigation";
import Footer from "../components/footer";
import PageHeaderCarousel from "../components/page-header-carousel";
import interiorImage from "../../../attached_assets/IMG_4445_1752533547607.jpg";
import courtyardImage from "../../../attached_assets/IMG_4446_1752533547603.jpg";
import locationImage from "../../../attached_assets/IMG_3403.png";

const galleryImages = [
  { src: "/gallery-living-room-art.png", alt: "Casa Benavides Inn - Living room with vigas, art, and Southwestern furnishings" },
  { src: "/gallery-fireplace-sunflowers.png", alt: "Casa Benavides Inn - Common area with kiva fireplace, sunflowers painting, and adobe charm" },
  { src: "/breakfast-dining-room.png", alt: "Casa Benavides Inn - Dining room with vigas, Southwestern art, and tables set for breakfast" },
  { src: interiorImage, alt: "Casa Benavides Inn - Interior Living Space with Southwest Decor" },
  { src: courtyardImage, alt: "Casa Benavides Inn - Courtyard Patio with Colorful Umbrellas" },
  { src: locationImage, alt: "Casa Benavides Inn - Adobe Architecture" },
  { src: "/gallery-room-light-blue.png", alt: "Guest room with light blue walls, kiva fireplace, and vigas ceiling" },
  { src: "/gallery-sitting-teal.png", alt: "Sitting area with teal walls, woven chairs, and stained glass" },
  { src: "/gallery-fireplace-corner.png", alt: "Corner room with light blue walls and orange kiva fireplace" },
  { src: "/gallery-turquoise-kiva.png", alt: "Common area with turquoise kiva fireplace and door" },
  { src: "/gallery-bedroom-two-beds.png", alt: "Southwestern bedroom with two beds and terracotta accents" },
  { src: "/gallery-patio-blue-doors.png", alt: "Outdoor patio with blue doors and tiled fountain" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <PageHeaderCarousel title="GALLERY" subtitle="Images of Casa Benavides and Taos" />
      <main className="py-16 bg-casa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
