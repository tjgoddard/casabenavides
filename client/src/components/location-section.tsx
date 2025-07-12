import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  return (
    <div className="py-20 bg-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Location... Location... Location...
            </h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              It's no accident the Casa Benavides is located in the heart of Taos. Once you arrive and park the car, put away those keys because you probably won't need them. Just outside the front door is a leisurely stroll to all the enchanted beauty, energy, shopping, Southwest cuisine and Native culture Taos has to offer.
            </p>
            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              Be sure to save some time to enjoy the serenity of your accommodations in one of our 36 distinctively styled rooms, decorated with artistic treasures, private baths, cable TV and complimentary Wi-Fi internet access in every room and throughout the property. Selected rooms offer kitchens, refrigerators, microwaves, patios or balconies overlooking Taos, the mountains or our gardens.
            </p>
            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              We serve our full gourmet breakfast in our dining room each and every morning from 7:00a.m. to 9:30a.m. Our breakfast is included in the price of our rooms for two guests.
            </p>
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
                src="https://www.casabenavides.com/quality_auto/f4f18f_03968c7e019247b5b46e968f3f7ae001~mv2.jpg" 
                alt="Casa Benavides location map in Taos" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-casa-blue bg-opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
