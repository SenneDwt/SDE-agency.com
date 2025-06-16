import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! Wij nemen binnenkort contact met u op.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

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
              Neem <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Contact Op</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Klaar om uw digitale aanwezigheid te transformeren? Laten we uw project bespreken en samen iets geweldigs creëren.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Laten We Een Gesprek Starten</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Wij horen graag over uw project en bespreken hoe wij uw visie tot leven kunnen brengen. 
                  Ons team staat klaar om gepersonaliseerde oplossingen te bieden die resultaten opleveren.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Ons</h3>
                    <p className="text-gray-400">Senne@sde-agency.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Bel Ons</h3>
                    <p className="text-gray-400">+32 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Bezoek Ons</h3>
                    <p className="text-gray-400">Tech District<br />België</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Kantooruren</h3>
                    <p className="text-gray-400">Ma - Vr: 9:00 - 18:00<br />Za: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                  <h3 className="font-semibold text-white">Snelle Reactie Garantie</h3>
                </div>
                <p className="text-gray-300">
                  Wij reageren op alle vragen binnen 24 uur. Voor urgente zaken, 
                  bel ons direct voor onmiddellijke hulp.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Volg Ons</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/80 p-8 rounded-2xl border border-purple-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-purple-400 mb-2">
                      Volledige Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-purple-400 mb-2">
                      Email Adres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="uw.email@voorbeeld.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-purple-400 mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-purple-400 mb-2">
                    Dienst Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="website">Op Maat Website</option>
                    <option value="chatbot">AI Chatbot</option>
                    <option value="mobile">Mobiele App</option>
                    <option value="ai-integration">AI Integratie</option>
                    <option value="maintenance">Ondersteuning & Onderhoud</option>
                    <option value="consultation">Consultatie</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-purple-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Vertel ons over uw project, tijdlijn, budget en eventuele specifieke vereisten..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  <span>Verstuur Bericht</span>
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Door dit formulier in te dienen, gaat u akkoord met ons privacybeleid en algemene voorwaarden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Veelgestelde <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Vragen</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Hoe lang duurt het om een website te ontwikkelen?",
                a: "De ontwikkelingstijd varieert afhankelijk van de complexiteit van het project. Een eenvoudige website kan binnen 2-4 weken worden opgeleverd, terwijl complexere projecten 6-12 weken kunnen duren."
              },
              {
                q: "Bieden jullie ondersteuning na de lancering?",
                a: "Ja, wij bieden uitgebreide ondersteuning en onderhoudsdiensten na de lancering. Dit omvat technische ondersteuning, updates, beveiliging en performance monitoring."
              },
              {
                q: "Kunnen jullie bestaande websites upgraden met AI-functionaliteiten?",
                a: "Absoluut! Wij kunnen AI-chatbots, automatisering en andere intelligente functies integreren in uw bestaande website om de gebruikerservaring te verbeteren."
              },
              {
                q: "Wat zijn de kosten voor een AI-chatbot?",
                a: "De kosten variëren afhankelijk van de complexiteit en functionaliteiten. Wij bieden op maat gemaakte oplossingen vanaf €2.500. Neem contact met ons op voor een persoonlijke offerte."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/80 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;