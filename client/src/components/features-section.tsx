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
      description: "Walking distance to Taos Plaza, shopping, galleries, dining, and cultural attractions. 20 miles from Taos Ski Valley"
    },
    {
      icon: Users,
      title: "Family Owned and Operated",
      description: "Experience authentic hospitality from the McCarthy family, who have been welcoming guests for over 30 years"
    },
    {
      icon: Car,
      title: "Convenient Parking",
      description: "Complimentary secure on-site parking available for all guests"
    },
    {
      icon: Wifi,
      title: "Personalized Service",
      description: "Our dedicated staff provides exceptional personal attention and local expertise"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">WHY CHOOSE CASA BENAVIDES?</h2>
          <p className="luxury-body text-sm text-gray-900 max-w-4xl mx-auto leading-relaxed">
            Experience the perfect blend of historic charm and modern luxury in the heart of Taos, 
            where authentic Southwest hospitality meets contemporary comfort
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group luxury-hover smooth-transition">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-casa-blue to-casa-blue-light rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="luxury-subheading text-2xl font-light mb-6 text-casa-navy tracking-wide">{feature.title}</h3>
              <p className="luxury-body text-sm text-gray-900 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
