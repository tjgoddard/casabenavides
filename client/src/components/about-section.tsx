export default function AboutSection() {
  return (
    <section className="py-32 bg-casa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">ABOUT CASA BENAVIDES</h2>
        </div>
        {/* Image moved to Location section (Stay Close to the Best in Taos); restore by uncommenting grid + image block below */}
        <div className="max-w-3xl mx-auto space-y-8">
            <p className="luxury-body text-lg text-gray-800 leading-relaxed">
              Nestled in the heart of historic Taos, Casa Benavides Inn offers a peaceful retreat surrounded by classic adobe architecture and centuries-old cottonwood trees.
            </p>
            
            <p className="luxury-body text-lg text-gray-800 leading-relaxed">Our award-winning bed and breakfast is known for its breakfast - thoughtfully crafted with local flavors - and its warm, welcoming atmosphere rooted in Southwest charm. Guests enjoy the perfect blend of comfort, culture, and cuisine in an authentic Taos setting.</p>
            
            <p className="luxury-body text-lg text-gray-800 leading-relaxed">Casa Benavides has proudly been named one of the top bed and breakfasts in Taos for multiple years. With 36 individually styled rooms and suites, each space showcases artistic details, traditional New Mexican furnishings, and one-of-a-kind character - offering a truly unique Taos lodging experience.</p>
            
          <div className="pt-6">
            <div className="textured-btn-wrap">
              <div className="textured-btn-border" />
              <a href="/our-story" className="textured-btn">Discover Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}