export default function ExperiencesSection() {
  const experiences = [
    {
      title: "Conquer the Slopes at Taos Ski Valley",
      description: "Just a short drive away, Taos Ski Valley is a year‑round playground. In winter, skiers and snowboarders relish world‑class expert terrain—and après‑ski treats like bratwurst and green‑chile burritos at Bavarian‑style lodges. Spring through fall? Hit the mountain biking trails, guided hikes (including to Wheeler Peak or Williams Lake), snowshoe tours, ice skating, and even snowmobiling under starlit skies.",
      image: "/taos-ski-valley.jpg"
    },
    {
      title: "Discover Taos Plaza & Historic Downtown",
      description: "At the historic heart of town, Taos Plaza blends centuries of culture with contemporary flair. Wander through art galleries, boutique shops, and cafés; soak up live music or join the farmers' market on weekends. Notable stops include the Kit Carson House & Museum, the Harwood Museum, and the Millicent Rogers Museum—all just steps from the plaza.",
      image: "/taos-plaza.jpg"
    },
    {
      title: "Step Back in Time at Taos Pueblo",
      description: "A UNESCO World Heritage Site and National Historic Landmark, Taos Pueblo is the oldest continuously inhabited community in the U.S. Explore its multi‑storied adobe structures, learn from local guides about ancient Tiwa traditions, and savor authentic cultural workshops.",
      image: "/taos-pueblo.jpg"
    },
    {
      title: "Marvel at Rio Grande Gorge & Bridge",
      description: "Head 10 minutes out of town to witness the Rio Grande Gorge Bridge—one of America's tallest. Hike the scenic rim trails, spot bighorn sheep, watch rafters tackle the rapids below, or time it for magical sunset views.",
      image: "/rio-grande-gorge.webp"
    },
    {
      title: "Adventure on the Rio Grande River",
      description: "Just below the gorge awaits an exhilarating whitewater rafting route—17 miles of basalt‑walled chasm with rapids and calm stretches. For anglers, the Rio Grande and Red River offer prime fishing spots year‑round.",
      image: "/rio-grande-river.jpg"
    },
    {
      title: "Explore Art, History & Local Culture",
      description: "Taos is an artistic mecca—from the Taos Art Museum (Nicolai Fechin House) to the fall Dixon Studio Tour. Add historic Spanish mission tours (like San Francisco de Asís in Ranchos de Taos), D.H. Lawrence explorations, rock‑climbing, disc golf, horseback riding, hot air ballooning, and soaking in hot springs.",
      image: "/fechin-house.jpg"
    }
  ];

  return (
    <section id="experiences" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">TAOS EXPERIENCES</h2>
          <p className="luxury-body text-sm text-gray-900 max-w-4xl mx-auto leading-relaxed">
            Discover the magic of Taos with adventures that blend natural beauty, rich culture, and unforgettable experiences 
            just moments from your doorstep at Casa Benavides.
          </p>
        </div>

        <div className="space-y-24">
          {experiences.map((experience, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`luxury-hover smooth-transition ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="luxury-subheading text-3xl md:text-4xl font-light mb-8 text-casa-navy tracking-wide">{experience.title}</h3>
                <p className="luxury-body text-sm text-gray-900 leading-relaxed">{experience.description}</p>
              </div>
              <div className={`luxury-hover smooth-transition ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-96 object-cover hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a365d] to-[#0682b3] rounded-xl p-12 text-center mt-32 shadow-2xl">
          <h3 className="luxury-subheading text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">Why Stay at Casa Benavides?</h3>
          <p className="luxury-body text-white/90 text-sm leading-relaxed max-w-4xl mx-auto mb-8">
            Our prime downtown location puts you in the center of everything: a short drive to Taos Ski Valley, 
            steps from Taos Plaza, and just minutes from world‑famous landmarks like Taos Pueblo and the Rio Grande Gorge. 
            Whether you're chasing adrenaline or cultural enrichment, you'll find it all close to your door.
          </p>
          <div className="mt-8">
            <a 
              href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-casa-blue px-12 py-4 rounded-md luxury-body font-semibold hover:bg-white/90 smooth-transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Taos Adventure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}