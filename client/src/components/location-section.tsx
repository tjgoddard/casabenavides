import { MapPin, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

// Using direct path approach
// import img3 from "../../../attached_assets/IMG_3405_new.png";

export default function LocationSection() {
  return (
    <div className="py-20 bg-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">STAY CLOSE TO THE BEST OF TAOS</h2>
            <p className="luxury-body text-sm text-gray-900 mb-6 leading-relaxed">Looking for a hotel in the heart of Taos? Casa Benavides Historic Bed & Breakfast Inn is the perfect place to stay. Just outside the front door is a leisurely stroll to all the enchanted beauty, energy, shopping, Southwest cuisine and Native culture Taos has to offer. And we're just a short 30-minute drive to the legendary slopes of Taos Ski Valley.</p>
            <p className="luxury-body text-sm text-gray-900 mb-6 leading-relaxed">At Casa Benavides, you can explore the town's rich cultural heritage, enjoy world-class skiing and snowboarding, or take a scenic drive to the Rio Grande Gorge Bridge, the High Road to Taos, or Ojo Caliente Hot Springs. Whether you're planning a winter getaway or a summer road trip through Northern New Mexico, Casa Benavides is the perfect home base.</p>
            <p className="luxury-body text-sm text-gray-900 mb-8 leading-relaxed">For travelers searching for a cozy, well-located Taos Inn, Casa Benavides blends comfort, character, and unbeatable proximity to everything this magical town has to offer.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white">
                <a 
                  href="https://www.google.com/maps/place/137+Kit+Carson+Rd,+Taos,+NM+87571/@36.4070267,-105.57262,18z/data=!4m2!3m1!1s0x87176522a5e3309d:0x77572bd3bb2f6f2a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
              <Button asChild className="bg-casa-blue hover:bg-casa-blue-light">
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Make Reservation
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src="/casa-living-room.png" 
                alt="Casa Benavides Inn living room with authentic Southwest art collection and pottery" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                loading="lazy"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 45vw, (max-width: 1024px) 35vw, 400px"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
