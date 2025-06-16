import React from 'react';
import { Globe, Bot, Smartphone, Zap, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      description: 'Modern, responsive websites built with the latest technologies. From landing pages to complex web applications.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration']
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that understands your customers and provides instant, accurate responses.',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-platform Integration', 'Analytics Dashboard']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that extend your digital presence to smartphones and tablets.',
      features: ['iOS & Android', 'Push Notifications', 'Offline Functionality', 'App Store Optimization']
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems for enhanced automation and intelligence.',
      features: ['API Integration', 'Machine Learning', 'Automation Workflows', 'Data Analytics']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Comprehensive security measures and ongoing maintenance to keep your digital assets safe and updated.',
      features: ['SSL Certificates', 'Regular Updates', 'Backup Solutions', 'Security Monitoring']
    },
    {
      icon: Headphones,
      title: 'Support & Training',
      description: 'Dedicated support and training to ensure you get the most out of your digital solutions.',
      features: ['24/7 Support', 'User Training', 'Documentation', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI-powered digital solutions to transform your business and engage your customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;