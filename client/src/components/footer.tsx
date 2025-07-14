import { Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-casa-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Casa Benavides Inn</h3>
            <p className="text-casa-blue-accent mb-4">Historic Bed & Breakfast in the Heart of Taos</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/pages/Casa-Benavides/108154255892709" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-casa-blue-accent hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/breakfast" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/group-reservations" className="text-casa-blue-accent hover:text-white transition-colors duration-200">
                  Group Reservations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-casa-blue-accent">
              <p>137 Kit Carson Road</p>
              <p>Taos, New Mexico 87571</p>
              <p>
                <a href="tel:5757581772" className="hover:text-white transition-colors duration-200">
                  575-758-1772
                </a>
              </p>
              <p>
                <a href="mailto:info@casabenavides.com" className="hover:text-white transition-colors duration-200">
                  Info@CasaBenavides.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Book Your Stay</h4>
            <p className="text-casa-blue-accent mb-4">Experience the charm of historic Taos</p>
            <Button asChild variant="secondary">
              <a 
                href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Reserve Now
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-casa-blue-accent mt-8 pt-8 text-center">
          <p className="text-casa-blue-accent">© 2025 Casa Benavides - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
