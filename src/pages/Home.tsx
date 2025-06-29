import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Bot, Globe, Code, Zap, Shield } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Digitale Toekomst.";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center relative overflow-hidden pt-16 sm:pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left lg:col-span-1">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-400">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">AI-Gedreven Oplossingen</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Transformeer Uw
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ik creëer intelligente websites en conversationele chatbots die uw klanten boeien 
                en bedrijfsgroei stimuleren. Ervaar de toekomst van digitale interactie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/diensten"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span>Ontdek Diensten</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative mt-6 sm:mt-8 lg:mt-0 hidden lg:block">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-3 sm:p-4 sm:p-6 lg:p-8 shadow-2xl border border-purple-500/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 sm:p-4 sm:p-6 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <Globe className="h-5 sm:h-6 sm:h-8 w-5 sm:w-6 sm:w-8 mb-2 sm:mb-3 sm:mb-4 relative z-10" />
                    <h3 className="font-semibold mb-1 sm:mb-2 relative z-10 text-sm sm:text-base sm:text-lg">Slimme Websites</h3>
                    <p className="text-xs sm:text-sm opacity-90 relative z-10">Responsief, snel en SEO-geoptimaliseerd</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 p-3 sm:p-4 sm:p-6 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <Bot className="h-5 sm:h-6 sm:h-8 w-5 sm:w-6 sm:w-8 mb-2 sm:mb-3 sm:mb-4 relative z-10" />
                    <h3 className="font-semibold mb-1 sm:mb-2 relative z-10 text-sm sm:text-base sm:text-lg">AI Chatbots</h3>
                    <p className="text-xs sm:text-sm opacity-90 relative z-10">Intelligente klantenservice</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600 to-pink-600 p-3 sm:p-4 sm:p-6 rounded-2xl text-white col-span-1 sm:col-span-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <Sparkles className="h-5 sm:h-6 sm:h-8 w-5 sm:w-6 sm:w-8 mb-2 sm:mb-3 sm:mb-4 relative z-10" />
                    <h3 className="font-semibold mb-1 sm:mb-2 relative z-10 text-sm sm:text-base sm:text-lg">AI Integratie</h3>
                    <p className="text-xs sm:text-sm opacity-90 relative z-10">Geavanceerde AI-technologie naadloos geïntegreerd in uw digitale oplossingen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Waarom Kiezen Voor <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SDE Agency</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Wij combineren cutting-edge technologie met creatief design om digitale ervaringen te creëren die uw bedrijf vooruit helpen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-800/80 p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Moderne Technologie</h3>
              <p className="text-gray-400 leading-relaxed">
                Wij gebruiken de nieuwste frameworks en AI-technologieën om toekomstbestendige oplossingen te bouwen.
              </p>
            </div>

            <div className="bg-gray-800/80 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Snelle Levering</h3>
              <p className="text-gray-400 leading-relaxed">
                Efficiënte workflows en geautomatiseerde processen zorgen voor snelle projectoplevering zonder kwaliteitsverlies.
              </p>
            </div>

            <div className="bg-gray-800/80 p-6 sm:p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Betrouwbare Ondersteuning</h3>
              <p className="text-gray-400 leading-relaxed">
                24/7 monitoring en ondersteuning zorgen ervoor dat uw digitale oplossingen altijd optimaal functioneren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Klaar Om Uw Digitale Transformatie Te Starten?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Laten we samen uw visie tot leven brengen met intelligente technologie en creatief design.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span>Start Uw Project</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;