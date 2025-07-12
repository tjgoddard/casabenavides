import { Button } from "@/components/ui/button";
import heroImage from "@assets/Exterior-Front-Homepage-Alt-1_1751842464150.jpeg";

export default function SeasonalSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide font-serif casa-blue">WINTER IN TAOS</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Start planning your winter getaway today. Experience world-class skiing in the mountains, 
              cozy evenings by the fireplace, discover handcrafted treasures in local galleries, 
              and savor the season's best cuisine. Winter in Taos is magical like no other. 
              Book now and enjoy exclusive savings of up to 20% off our Best Flexible Rate with promo code WINTER25.
            </p>
            
            <div className="pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-casa-blue hover:bg-casa-blue-light text-white px-8 py-4 font-medium tracking-wide"
              >
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1&promo=WINTER25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK NOW
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <img 
              src={heroImage}
              alt="Winter at Casa Benavides Inn"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}