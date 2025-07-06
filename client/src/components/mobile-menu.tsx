import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="px-4 py-2 space-y-2">
        <button
          onClick={() => onNavigate('home')}
          className="block w-full text-left py-2 text-gray-700 hover:casa-blue transition-colors duration-200"
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('breakfast')}
          className="block w-full text-left py-2 text-gray-700 hover:casa-blue transition-colors duration-200"
        >
          Breakfast
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="block w-full text-left py-2 text-gray-700 hover:casa-blue transition-colors duration-200"
        >
          Contact
        </button>
        <button
          onClick={() => onNavigate('our-story')}
          className="block w-full text-left py-2 text-gray-700 hover:casa-blue transition-colors duration-200"
        >
          Our Story
        </button>
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
