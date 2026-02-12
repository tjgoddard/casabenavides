import { Phone, Calendar } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}

export default function MobileMenu({ isOpen, onClose, isScrolled }: MobileMenuProps) {
  const [location] = useLocation();
  
  if (!isOpen) return null;

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1", label: "Stay", external: true },
    { href: "/our-story", label: "Our Story" },
    { href: "/breakfast", label: "Breakfast" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];

  // Calculate top position based on nav height
  const topPosition = isScrolled ? 'top-[96px]' : 'top-[152px]';

  return (
    <div className={`md:hidden fixed ${topPosition} left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 max-h-[calc(100vh-152px)] overflow-y-auto transition-all duration-300`}>
      <div className="px-4 py-4 space-y-3">
        {navigationLinks.map((link) => (
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block w-full text-left py-3 px-4 text-lg font-medium rounded-md transition-colors duration-200 text-gray-700 hover:bg-casa-blue-accent hover:text-casa-blue border border-gray-200"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
            >
              <a className={`block w-full text-left py-3 px-4 text-lg font-medium rounded-md transition-colors duration-200 border ${
                location === link.href 
                  ? 'bg-casa-blue text-white border-casa-blue' 
                  : 'text-gray-700 hover:bg-casa-blue-accent hover:text-casa-blue border-gray-200'
              }`}>
                {link.label}
              </a>
            </Link>
          )
        ))}
        
        <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
          <Button asChild className="w-full bg-casa-blue hover:bg-casa-blue-light py-6 text-lg">
            <a href="tel:5757581772">
              <Phone className="w-5 h-5 mr-2" />
              Call: (575) 758-1772
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white py-6 text-lg">
            <a 
              href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
