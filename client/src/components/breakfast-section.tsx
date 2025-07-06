import { Check, Shield } from "lucide-react";

export default function BreakfastSection() {
  const breakfastItems = [
    "Family secret recipe granola",
    "Egg frittata with award-winning red chili sauce",
    "Variety of muffins, fruit, and yogurt",
    "Freshly brewed coffee and tea"
  ];

  return (
    <section id="breakfast" className="py-20 bg-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">So What's For Breakfast?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our full breakfast service is available in our dining room each and every morning from 7:00a.m. to 9:30a.m. 
            and is included in the price of our rooms for two guests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://www.casabenavides.com/quality_auto/Kitchen-1072-2a-cropped-web.jpg" 
              alt="Casa Benavides kitchen and dining area" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Casa Benavides offers a delicious variety of freshly prepared and served gourmet entrees including:
            </h3>
            <div className="space-y-4">
              {breakfastItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-casa-blue mr-2" />
                <span className="font-semibold text-gray-900">New Mexico Safe Certified</span>
              </div>
              <p className="text-gray-600 text-sm">Our kitchen meets all New Mexico safety standards</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://www.casabenavides.com/quality_auto/94178027%5B1%5D.jpg" 
              alt="Delicious breakfast spread at Casa Benavides" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <img 
              src="https://www.casabenavides.com/quality_auto/f4f18f_c94f256159f54d4780d28c5598512f3f~mv2.jpg" 
              alt="Casa Benavides kitchen interior" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
