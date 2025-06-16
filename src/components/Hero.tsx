import React from 'react';
import { ArrowRight, Sparkles, Bot, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-blue-600">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We create intelligent websites and conversational chatbots that engage your customers 
              and drive business growth. Experience the future of digital interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Chatbots Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                  <Globe className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Smart Websites</h3>
                  <p className="text-sm opacity-90">Responsive, fast, and SEO-optimized</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-2xl text-white">
                  <Bot className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">AI Chatbots</h3>
                  <p className="text-sm opacity-90">Intelligent customer service</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white col-span-2">
                  <Sparkles className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">AI Integration</h3>
                  <p className="text-sm opacity-90">Cutting-edge AI technology seamlessly integrated into your digital solutions</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-teal-500 w-24 h-24 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-pink-500 w-32 h-32 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;