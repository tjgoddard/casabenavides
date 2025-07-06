import { Bed, Utensils, MapPin } from "lucide-react";

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
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">What Makes Us Special</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of historic charm and modern comfort in the heart of Taos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-casa-blue-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-casa-blue group-hover:text-white transition-colors duration-200">
                <feature.icon className="w-8 h-8 text-casa-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
