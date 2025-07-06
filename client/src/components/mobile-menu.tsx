import { Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="px-4 py-2 space-y-2">
        <Link 
          href="/"
          onClick={onClose}
          className={`block w-full text-left py-2 transition-colors duration-200 ${
            location === '/' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/breakfast"
          onClick={onClose}
          className={`block w-full text-left py-2 transition-colors duration-200 ${
            location === '/breakfast' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
          }`}
        >
          Breakfast
        </Link>
        <Link 
          href="/contact"
          onClick={onClose}
          className={`block w-full text-left py-2 transition-colors duration-200 ${
            location === '/contact' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
          }`}
        >
          Contact
        </Link>
        <Link 
          href="/our-story"
          onClick={onClose}
          className={`block w-full text-left py-2 transition-colors duration-200 ${
            location === '/our-story' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
          }`}
        >
          Our Story
        </Link>
        <div className="pt-2">
          <Button asChild className="w-full bg-casa-blue hover:bg-casa-blue-light">
            <a href="tel:5757581772">
              <Phone className="w-4 h-4 mr-2" />
              Call: 575-758-1772
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
