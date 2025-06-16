import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/SDE.png" 
                alt="SDE Agency Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SDE Agency
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformeren van bedrijven door intelligente websites en AI-gedreven chatbots. 
              Uw succes is onze missie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/diensten"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  to="/over-ons"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Diensten</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Op Maat Websites</span></li>
              <li><span className="text-gray-400">AI Chatbots</span></li>
              <li><span className="text-gray-400">Mobiele Apps</span></li>
              <li><span className="text-gray-400">AI Integratie</span></li>
              <li><span className="text-gray-400">Ondersteuning & Onderhoud</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">Senne@sde-agency.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">+32 123 456 789</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                <span className="text-gray-400">Tech District<br />België</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SDE Agency. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacybeleid</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Algemene Voorwaarden</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Beleid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;