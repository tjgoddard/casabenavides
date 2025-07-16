import { Button } from "@/components/ui/button";
import img1 from "@assets/IMG_3403.png";

export default function AboutSection() {
  return (
    <section className="py-32 bg-casa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">ABOUT CASA BENAVIDES</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/20 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 smooth-transition"></div>
            <img 
              src={img1}
              alt="Casa Benavides Inn authentic Southwest architecture"
              className="relative w-full h-[500px] object-cover rounded-2xl luxury-shadow smooth-transition group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-8">
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">
              Nestled in the heart of historic Taos, Casa Benavides Inn offers a peaceful retreat surrounded by classic adobe architecture and centuries-old cottonwood trees.
            </p>
            
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">Our award-winning bed and breakfast is known for its breakfast included - thoughtfully crafted with local and international flavors - and its warm, welcoming atmosphere rooted in Southwest charm. Guests enjoy the perfect blend of comfort, culture, and cuisine in an authentic Taos setting.</p>
            
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">Casa Benavides has proudly been named one of the top bed and breakfasts in Taos for multiple years. With 36 individually styled rooms and suites, each space showcases artistic details, traditional New Mexican furnishings, and one-of-a-kind character - offering a truly unique Taos lodging experience.</p>
            
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