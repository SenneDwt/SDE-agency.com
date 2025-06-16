import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Bot, Globe, Code, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Op Maat Gemaakte <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Oplossingen</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Elke klant is uniek, en daarom bieden wij volledig op maat gemaakte oplossingen die perfect aansluiten bij uw specifieke behoeften.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Waarom Op Maat?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Wij geloven dat elke organisatie unieke uitdagingen en doelen heeft. Daarom ontwikkelen we oplossingen die specifiek zijn afgestemd op uw situatie, in plaats van standaard pakketten aan te bieden.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Persoonlijke aanpak voor uw specifieke behoeften</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Bot className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Flexibele schaalbaarheid naar uw groei</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Code className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Technische oplossingen die perfect aansluiten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Ons Proces</h2>
              <ol className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Gratis Consultatie</h3>
                    <p className="text-gray-300">We bespreken uw doelen en uitdagingen</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Persoonlijk Voorstel</h3>
                    <p className="text-gray-300">Een op maat gemaakt plan en offerte</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Ontwikkeling</h3>
                    <p className="text-gray-300">Implementatie van uw unieke oplossing</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Klaar om te Starten?</h2>
            <p className="text-gray-300 mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over uw project. 
              We bespreken graag de mogelijkheden en maken een offerte op maat.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <span>Neem Contact Op</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 