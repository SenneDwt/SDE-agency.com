import React from 'react';
import { Users, Award, Target, Heart, Code, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovatie',
      description: 'Wij blijven voorop lopen in AI en webtechnologieën om cutting-edge oplossingen te leveren.'
    },
    {
      icon: Heart,
      title: 'Klantgericht',
      description: 'Uw succes is onze prioriteit. Wij bouwen duurzame relaties door uitzonderlijke service.'
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'Wij handhaven de hoogste standaarden in elk project, zorgen voor betrouwbare en schaalbare oplossingen.'
    },
    {
      icon: Users,
      title: 'Samenwerking',
      description: 'Wij werken nauw samen met onze klanten als partners, brengen uw visie samen tot leven.'
    }
  ];

  const team = [
    {
      name: 'Senne De Vos',
      role: 'CEO & AI Strategist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ jaar ervaring in AI en digitale transformatie'
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack expert met AI integratie specialisatie'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creëren van mooie, intuïtieve gebruikerservaringen'
    }
  ];

  const stats = [
    { icon: Globe, number: '100+', label: 'Projecten Voltooid' },
    { icon: Users, number: '50+', label: 'Tevreden Klanten' },
    { icon: Code, number: '5+', label: 'Jaar Ervaring' },
    { icon: Zap, number: '24/7', label: 'Ondersteuning' }
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
              Over <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SDE Agency</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wij zijn een gepassioneerd team van AI-specialisten en webontwikkelaars toegewijd aan het creëren van intelligente digitale oplossingen
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Ons Verhaal</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Opgericht in 2020, ontstond SDE Agency uit een visie om AI-technologie te democratiseren en 
                toegankelijk te maken voor bedrijven van alle groottes. Wij erkenden dat de toekomst van 
                digitale interactie ligt in intelligente, responsieve systemen die gebruikersbehoeften begrijpen en zich daaraan aanpassen.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Vandaag hebben wij meer dan 100 bedrijven geholpen hun digitale aanwezigheid te transformeren 
                met op maat gemaakte websites en AI-gedreven chatbots die betrokkenheid en groei stimuleren. 
                Ons team combineert diepe technische expertise met creatief ontwerpdenken om oplossingen te leveren die echt het verschil maken.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team samenwerking" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-cyan-600 p-6 rounded-2xl text-white">
                <div className="text-2xl font-bold">AI-First</div>
                <div className="text-sm opacity-90">Benadering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Onze <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Waarden</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ontmoet Ons <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/80 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Onze Missie
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Wij geloven dat elke organisatie toegang moet hebben tot de kracht van AI en moderne webtechnologieën. 
            Onze missie is om deze technologieën toegankelijk, begrijpelijk en waardevol te maken voor bedrijven 
            die hun digitale toekomst willen vormgeven.
          </p>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 italic">
              "Technologie moet mensen verbinden, niet vervangen. Wij bouwen intelligente oplossingen 
              die menselijke creativiteit en AI-kracht combineren voor uitzonderlijke resultaten."
            </p>
            <p className="text-purple-400 font-semibold mt-4">- Senne De Vos, CEO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;