import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of AI and web technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards in every project, ensuring reliable and scalable solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, bringing your vision to life together.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & AI Strategist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in AI and digital transformation'
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack expert with AI integration specialization'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creating beautiful, intuitive user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AIWebCraft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of AI specialists and web developers dedicated to creating intelligent digital solutions
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, AIWebCraft emerged from a vision to democratize AI technology and make it accessible 
              to businesses of all sizes. We recognized that the future of digital interaction lies in intelligent, 
              responsive systems that understand and adapt to user needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we've helped over 100 businesses transform their digital presence with custom websites and 
              AI-powered chatbots that drive engagement and growth. Our team combines deep technical expertise 
              with creative design thinking to deliver solutions that truly make a difference.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-2xl text-white">
              <div className="text-2xl font-bold">AI-First</div>
              <div className="text-sm opacity-90">Approach</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;