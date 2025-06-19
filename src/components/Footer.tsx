import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp, Award, Globe, Shield, MailCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-8xl mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
            <div className="text-4xl font-bold tracking-tight mb-6">
              <span className="text-white">THINK</span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">OF</span>
              <span className="text-white">IT</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-light">
              Empowering learners worldwide with transformative education, cutting-edge skills, 
              and collaborative learning opportunities that drive personal and professional growth.
            </p>
          </div>

            <div className="flex items-center space-x-8 pt-8 mt-8 border-t border-gray-800/50">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300 font-medium text-sm">Accredited Institution</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300 font-medium text-sm">Secure Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300 font-medium text-sm">Worldwide Access</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Student Support</div>
                  <div className="text-gray-400">support@thinkofit.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Help Desk</div>
                  <div className="text-gray-400">+1 (555) 987-6543</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Main Campus</div>
                  <div className="text-gray-400">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-16 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 mb-6 lg:mb-0 text-center lg:text-left">
              <div className="text-lg font-medium">© {new Date().getFullYear()} THINKOFIT Educational Platform</div>
              <div className="text-sm mt-1">Empowering Learners. Building Skills. Creating Futures.</div>
            </div>
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/about-us')}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
              >
                About Us
              </button>
              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white hover:from-gray-700/50 hover:to-gray-800/50 rounded-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-700/30"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;