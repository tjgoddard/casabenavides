import logoImage from "@assets/casa-benavides-your-front-Photoroom-removebg-preview_1752360228306.png";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-start justify-between">
        <div className="flex items-center">
          <img 
            src={logoImage} 
            alt="Casa Benavides Inn Logo" 
            className="h-28 w-auto"
          />
        </div>
        
        <div className="flex flex-col space-y-2 items-end">
          <a 
            href="tel:5757581772" 
            className="text-white text-sm font-medium tracking-wide hover:text-white/80 smooth-transition whitespace-nowrap"
          >
            (575) 758-1772
          </a>
          <a 
            href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-casa-blue text-white px-3 py-1 rounded-sm text-sm font-medium tracking-wide hover:bg-casa-blue/90 smooth-transition text-center"
            style={{ width: '108px' }}
          >
            Check Availability
          </a>
        </div>
      </div>
    </nav>
  );
}