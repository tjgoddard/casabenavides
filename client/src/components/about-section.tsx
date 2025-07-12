import { Button } from "@/components/ui/button";
import heroImage from "@assets/Exterior-Front-Homepage-Alt-1_1752348951824.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img 
              src={heroImage}
              alt="Casa Benavides Inn exterior"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Casa Benavides Inn, situated in the heart of historic Taos, New Mexico, offers a serene 
              setting surrounded by beautiful adobe architecture and towering cottonwood trees. The perfectly 
              manicured grounds make this historic bed & breakfast an oasis only a few blocks away from 
              the town of Taos's historic plaza and 20 miles away from world class skiing at Taos Ski Valley.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Casa Benavides Inn features award-winning gourmet breakfast service inspired by 
              international and local influences. Known for its authentic Southwest design, our historic 
              inn has a welcoming atmosphere where our guests can experience signature hospitality 
              and traditional New Mexican cuisine.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Casa Benavides Inn offers 36 unique rooms and suites, each distinctively decorated with 
              artistic treasures and authentic Southwest furnishings. Casa Benavides Inn offers the perfect 
              venue for intimate weddings and special events with the beautiful Sangre de Cristo Mountains 
              as a backdrop.
            </p>
            
            <div className="pt-4">
              <Button 
                asChild 
                className="bg-casa-blue hover:bg-casa-blue-light text-white px-8 py-3 font-medium tracking-wide"
              >
                <a href="/our-story">OUR STORY</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}