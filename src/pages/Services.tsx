import React from 'react';
import { Globe, Bot, Smartphone, Zap, Shield, Headphones, Code, Database, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Op Maat Websites',
      description: 'Moderne, responsieve websites gebouwd met de nieuwste technologieën. Van landingspagina\'s tot complexe webapplicaties.',
      features: ['Responsief Design', 'SEO Geoptimaliseerd', 'Snelle Laadtijden'],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligente conversationele AI die uw klanten begrijpt en directe, accurate antwoorden geeft.',
      features: ['Natuurlijke Taalverwerking', '24/7 Beschikbaarheid', 'Multi-platform Integratie', 'Analytics Dashboard'],
      color: 'from-cyan-600 to-cyan-700'
    },
    
    {
      icon: Zap,
      title: 'AI Integratie',
      description: 'Naadloze integratie van AI-mogelijkheden in uw bestaande systemen voor verbeterde automatisering en intelligentie.',
      features: ['API Integratie', 'Machine Learning', 'Automatisering Workflows'],
      color: 'from-orange-600 to-pink-600'
    }
  ];

  const techStack = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Database },
    { name: 'AI/ML', icon: Cpu },
    { name: 'Cloud', icon: Zap }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Onze <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Diensten</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wij bieden uitgebreide AI-gedreven digitale oplossingen om uw bedrijf te transformeren en uw klanten te boeien
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/80 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ons Werkproces
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Van concept tot lancering - een gestroomlijnd proces dat resultaten levert
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Ontdekking', desc: 'Begrijpen van uw behoeften en doelen' },
              { step: '02', title: 'Strategie', desc: 'Ontwikkelen van een op maat gemaakte aanpak' },
              { step: '03', title: 'Ontwikkeling', desc: 'Bouwen met de nieuwste technologieën' },
              { step: '04', title: 'Lancering', desc: 'Implementatie en doorlopende ondersteuning' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;