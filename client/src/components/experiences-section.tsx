import taosLandscapeImg from "@assets/iStock-1458935906_1752360314185.jpg";

export default function ExperiencesSection() {
  const experiences = [
    {
      title: "Conquer the Slopes at Taos Ski Valley",
      description: "Just a short drive away, Taos Ski Valley is a year‑round playground. In winter, skiers and snowboarders relish world‑class expert terrain—and après‑ski treats like bratwurst and green‑chile burritos at Bavarian‑style lodges. Spring through fall? Hit the mountain biking trails, guided hikes (including to Wheeler Peak or Williams Lake), snowshoe tours, ice skating, and even snowmobiling under starlit skies.",
      image: taosLandscapeImg
    },
    {
      title: "Discover Taos Plaza & Historic Downtown",
      description: "At the historic heart of town, Taos Plaza blends centuries of culture with contemporary flair. Wander through art galleries, boutique shops, and cafés; soak up live music or join the farmers' market on weekends. Notable stops include the Kit Carson House & Museum, the Harwood Museum, and the Millicent Rogers Museum—all just steps from the plaza.",
      image: taosLandscapeImg
    },
    {
      title: "Step Back in Time at Taos Pueblo",
      description: "A UNESCO World Heritage Site and National Historic Landmark, Taos Pueblo is the oldest continuously inhabited community in the U.S. Explore its multi‑storied adobe structures, learn from local guides about ancient Tiwa traditions, and savor authentic cultural workshops.",
      image: taosLandscapeImg
    },
    {
      title: "Marvel at Rio Grande Gorge & Bridge",
      description: "Head 10 minutes out of town to witness the Rio Grande Gorge Bridge—one of America's tallest. Hike the scenic rim trails, spot bighorn sheep, watch rafters tackle the rapids below, or time it for magical sunset views.",
      image: taosLandscapeImg
    },
    {
      title: "Adventure on the Rio Grande River",
      description: "Just below the gorge awaits an exhilarating whitewater rafting route—17 miles of basalt‑walled chasm with rapids and calm stretches. For anglers, the Rio Grande and Red River offer prime fishing spots year‑round.",
      image: taosLandscapeImg
    },
    {
      title: "Explore Art, History & Local Culture",
      description: "Taos is an artistic mecca—from the Taos Art Museum (Nicolai Fechin House) to the fall Dixon Studio Tour. Add historic Spanish mission tours (like San Francisco de Asís in Ranchos de Taos), D.H. Lawrence explorations, rock‑climbing, disc golf, horseback riding, hot air ballooning, and soaking in hot springs.",
      image: taosLandscapeImg
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Taos Experiences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of Taos with adventures that blend natural beauty, rich culture, and unforgettable experiences.
          </p>
        </div>

        <div className="space-y-20">
          {experiences.map((experience, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">{experience.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{experience.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-casa-blue rounded-xl p-8 text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-4">Why Stay at Casa Benavides?</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
            Our prime downtown location puts you in the center of everything: a short drive to Taos Ski Valley, 
            steps from Taos Plaza, and just minutes from world‑famous landmarks like Taos Pueblo and the Rio Grande Gorge. 
            Whether you're chasing adrenaline—or cultural enrichment—you'll find it all close to your door.
          </p>
          <div className="mt-6">
            <a 
              href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-casa-blue px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}