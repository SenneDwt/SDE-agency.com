import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Building } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-purple-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <img 
                  src="/SDE.png" 
                  alt="SDE Agency Logo" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  SDE Agency
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-center">
                Transformeren van bedrijven door intelligente websites en AI-gedreven chatbots. 
                Uw succes is onze missie.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400 text-center">Snelle Links</h3>
              <ul className="space-y-3">
                <li className="text-center">
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/diensten"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Diensten
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/over-ons"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Over Ons
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400 text-center">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-center space-x-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">Senne@sde-agency.com</span>
                </li>
                <li className="flex items-center justify-center space-x-3">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">+32 471 24 19 12</span> 
                </li>
                <li className="flex items-start justify-center space-x-3">
                  <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                  <span className="text-gray-400">Limburg, België</span>
                </li>
                <li className="flex items-center justify-center space-x-3">
                  <Building className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">BE1015587426</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2024 SDE Agency. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacybeleid</Link>
              <Link to="/voorwaarden" className="text-gray-400 hover:text-white text-sm transition-colors">Algemene Voorwaarden</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Beleid</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;