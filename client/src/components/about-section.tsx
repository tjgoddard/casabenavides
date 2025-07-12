import { Button } from "@/components/ui/button";
import heroImage from "@assets/Exterior-Front-Homepage-Alt-1_1752348951824.jpg";

export default function AboutSection() {
  return (
    <section className="py-32 bg-casa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/20 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 smooth-transition"></div>
            <img 
              src={heroImage}
              alt="Casa Benavides Inn exterior at sunset"
              className="relative w-full h-[500px] object-cover rounded-2xl luxury-shadow smooth-transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-8">
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">
              Casa Benavides Inn, situated in the heart of historic Taos, New Mexico, offers a serene 
              setting surrounded by beautiful adobe architecture and towering cottonwood trees. The perfectly 
              manicured grounds make this historic bed & breakfast an oasis only a few blocks away from 
              the town of Taos's historic plaza and 20 miles away from world class skiing at Taos Ski Valley.
            </p>
            
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">
              Casa Benavides Inn features award-winning gourmet breakfast service inspired by 
              international and local influences. Known for its authentic Southwest design, our historic 
              inn has a welcoming atmosphere where our guests can experience signature hospitality 
              and traditional New Mexican cuisine.
            </p>
            
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">
              Casa Benavides Inn offers 36 unique rooms and suites, each distinctively decorated with 
              artistic treasures and authentic Southwest furnishings. Casa Benavides Inn offers the perfect 
              venue for intimate weddings and special events with the beautiful Sangre de Cristo Mountains 
              as a backdrop.
            </p>
            
            <div className="pt-6">
              <Button 
                asChild 
                className="luxury-button text-white rounded-full"
              >
                <a href="/our-story">DISCOVER OUR STORY</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}