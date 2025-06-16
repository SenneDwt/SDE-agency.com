import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/SDE.png" 
              alt="SDE Agency Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SDE Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-all duration-300 font-medium relative ${
                isActive('/') 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
              )}
            </Link>
            <Link
              to="/diensten"
              className={`transition-all duration-300 font-medium relative ${
                isActive('/diensten') 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Diensten
              {isActive('/diensten') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
              )}
            </Link>
            <Link
              to="/over-ons"
              className={`transition-all duration-300 font-medium relative ${
                isActive('/over-ons') 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Over Ons
              {isActive('/over-ons') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
              )}
            </Link>
            <Link
              to="/contact"
              className={`transition-all duration-300 font-medium relative ${
                isActive('/contact') 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium py-2 ${
                  isActive('/') 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                Home
              </Link>
              <Link
                to="/diensten"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium py-2 ${
                  isActive('/diensten') 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                Diensten
              </Link>
              <Link
                to="/over-ons"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium py-2 ${
                  isActive('/over-ons') 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                Over Ons
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium py-2 ${
                  isActive('/contact') 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;