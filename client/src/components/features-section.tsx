import { Bed, Utensils, MapPin, Wifi, Car, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Bed,
      title: "36 Unique Rooms",
      description: "Distinctively styled rooms with artistic treasures, private baths, cable TV, and complimentary Wi-Fi"
    },
    {
      icon: Utensils,
      title: "Gourmet Breakfast",
      description: "Full breakfast service daily from 7:00am to 9:30am, included in your stay"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Walking distance to Taos Plaza, shopping, galleries, dining, and cultural attractions"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "Stay connected with complimentary high-speed Wi-Fi and contemporary conveniences"
    },
    {
      icon: Car,
      title: "Convenient Parking",
      description: "Complimentary secure on-site parking available for all guests"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Our dedicated staff provides exceptional personal attention and local expertise"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-casa-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide font-serif casa-blue">WHY CHOOSE CASA BENAVIDES?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the perfect blend of historic charm and modern luxury in the heart of Taos, 
            where authentic Southwest hospitality meets contemporary comfort
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-casa-blue bg-opacity-10 rounded-full group-hover:bg-casa-blue group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-casa-blue group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 casa-blue tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
