import React from 'react';
import { ArrowRight, Star, Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#81784E', opacity: 0.05 }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: '#81784E', opacity: 0.05 }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-900/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-8 lg:px-12 py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-900/30 to-yellow-950/30 border border-yellow-700/20 font-medium mb-12 backdrop-blur-sm" style={{ color: '#81784E' }}>
            <Star className="w-5 h-5 mr-3 fill-current" style={{ color: '#81784E' }} />
            Empowering Next-Generation Leaders & Growing Communities
          </div>

          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            <span className="block mb-4">DARE TO</span>
            <span className="block mb-4" style={{ color: '#81784E' }}>
              REINVENT
            </span>
            <span className="block">YOURSELF</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Your transformation begins here. Master cutting-edge skills, connect with industry leaders, 
            and accelerate your career with our comprehensive educational platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center mb-24">
            <button 
              onClick={() => navigate('/auth')}
              className="group px-12 py-6 text-black text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-700/30"
              style={{ backgroundColor: '#81784E' }}
            >
              Begin Your Journey
              <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;