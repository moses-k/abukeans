import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@abukeansinvestment.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Licensed & Insured | 24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/image.png" 
              alt="Abukeans Investment Ltd" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-800 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-800 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-amber-800 font-medium">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-amber-800 font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;