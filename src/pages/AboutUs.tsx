import React from 'react';
import { Users, Target, Award, Heart, Globe, BrainCircuit, Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Engineering at Meta with 15+ years of experience building scalable educational platforms.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      expertise: ['Leadership', 'Product Strategy', 'EdTech Innovation']
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'PhD in Computer Science, former Google AI researcher specializing in machine learning and educational technology.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      expertise: ['AI/ML', 'Software Architecture', 'Research']
    },
    {
      name: 'Lisa Park',
      role: 'Head of Learning Experience',
      bio: 'Educational psychologist with 12+ years designing curriculum for Fortune 500 companies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      expertise: ['Curriculum Design', 'Learning Psychology', 'UX Design']
    },
    {
      name: 'David Wilson',
      role: 'Head of Community',
      bio: 'Former community manager at Stack Overflow, passionate about building inclusive learning communities.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      expertise: ['Community Building', 'Content Strategy', 'Developer Relations']
    }
  ];

  const values = [
    {
      icon: BrainCircuit,
      title: 'Innovation',
      description: 'We constantly push the boundaries of educational technology to create transformative learning experiences.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collaborative learning and building supportive, inclusive communities.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality educational content and learning outcomes.'
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'We make high-quality education accessible to learners worldwide, regardless of background or location.'
    }
  ];

  const stats = [
    { number: '2.5M+', label: 'Students Worldwide' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center border border-amber-500/30">
                <BrainCircuit className="w-10 h-10 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-amber-400">THINKOFIT</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize education and empower learners worldwide with the skills they need to thrive in the digital age.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-amber-950/20 to-yellow-950/20 rounded-2xl border border-amber-500/20 p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-amber-100 leading-relaxed max-w-4xl mx-auto">
                To bridge the gap between traditional education and the rapidly evolving demands of the modern workplace by providing accessible, high-quality, and practical learning experiences that transform lives and careers.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-6 text-center group hover:border-amber-500/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Our diverse team of educators, technologists, and industry experts are passionate about creating exceptional learning experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-amber-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2020 by a team of educators and technologists, THINKOFIT emerged from a simple observation: traditional education wasn't keeping pace with the rapidly evolving demands of the modern workplace.
                </p>
                <p>
                  We started with a mission to bridge this gap by creating practical, accessible, and engaging learning experiences that prepare students for real-world challenges.
                </p>
                <p>
                  Today, we're proud to serve over 2.5 million learners worldwide, offering courses in everything from web development and data science to design and business skills.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-500/20">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Impact</h3>
                  <p className="text-amber-100">
                    Transforming careers and lives across 50+ countries through accessible, world-class education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-amber-950/20 to-yellow-950/20 rounded-2xl border border-amber-500/20 p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-amber-100">hello@thinkofit.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-amber-100">+1 (555) 987-6543</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-amber-100">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;