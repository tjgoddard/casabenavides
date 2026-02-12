import { Check, Shield } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import breakfastSpreadImg from "../../../attached_assets/94178027[1]_1752361258523.jpeg";
import frenchToastImg from "../../../attached_assets/unnamed (2)_1752361773590.webp";

export default function BreakfastSection() {
  const breakfastItems = [
    "Family secret recipe granola",
    "Egg frittata with award-winning red chili sauce",
    "Variety of muffins, fruit, and yogurt",
    "Gluten-free options available upon request",
    "Freshly brewed coffee and tea"
  ];

  return (
    <section id="breakfast" className="py-20 bg-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">SO WHAT'S FOR BREAKFAST?</h2>
          <p className="luxury-body text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Our full breakfast service is available in our dining room each and every morning from 7:00a.m. to 9:30a.m. 
            and is included in the price of our rooms for two guests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/breakfast-dining-room.png"
              alt="Casa Benavides dining room with vigas, Southwestern art, and tables set for breakfast"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              style={{ objectPosition: "center 40%" }}
            />
          </div>
          
          <div>
            <h3 className="luxury-subheading text-2xl md:text-3xl font-light mb-8 text-casa-navy tracking-wide">
              Casa Benavides offers a delicious variety of freshly prepared and served breakfast entrees including:
            </h3>
            <div className="space-y-4">
              {breakfastItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p className="luxury-body text-lg text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-[#faf7f2] rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-casa-blue mr-2" />
                <span className="font-semibold text-gray-900">New Mexico Safe Certified</span>
              </div>
              <p className="luxury-body text-gray-800 text-lg leading-relaxed">Our kitchen meets all New Mexico safety standards</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={breakfastSpreadImg} 
              alt="Delicious breakfast spread at Casa Benavides" 
              className="w-full h-72 object-cover rounded-xl shadow-lg"
              style={{ objectPosition: 'center 65%' }}
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src={frenchToastImg} 
              alt="Gourmet French toast with fresh berries and banana" 
              className="w-full h-72 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="luxury-body text-gray-800 text-lg leading-relaxed">
              Ready to experience our delicious breakfast and authentic Taos hospitality?
            </p>
          </div>
          <div className="textured-btn-wrap mx-auto">
            <div className="textured-btn-border" />
            <a 
              href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
              target="_blank"
              rel="noopener noreferrer"
              className="textured-btn"
              onClick={() => trackEvent('click', 'reservation', 'breakfast_page_booking')}
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
