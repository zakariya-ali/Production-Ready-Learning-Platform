import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Users, Calendar, FileText, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Books', href: '/books', icon: FileText },
    { name: 'Blogs', href: '/blogs', icon: Users },
    { name: 'Events', href: '/events', icon: Calendar },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-500/30">
              <BrainCircuit className="w-7 h-7 text-amber-400" />
            </div>
            <button 
              onClick={() => navigate('/')}
              className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-white">THINK</span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">OF</span>
              <span className="text-white">IT</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-yellow-500/10 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20 backdrop-blur-sm"
                >
                  <item.icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium tracking-wide">{item.name}</span>
                </button>
              ) : (
                <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-yellow-500/10 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20 backdrop-blur-sm"
              >
                <item.icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium tracking-wide">{item.name}</span>
              </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/auth')}
              className="px-6 py-3 text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800/30 rounded-lg"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/auth')}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold tracking-wide rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl rounded-2xl mt-4 mb-6 p-8 space-y-6 border border-gray-800/50">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-gray-800/50 w-full text-left"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-medium tracking-wide text-lg">{item.name}</span>
                </button>
              ) : (
                <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-6 h-6" />
                <span className="font-medium tracking-wide text-lg">{item.name}</span>
              </a>
              )
            ))}
            <div className="pt-6 border-t border-gray-800 space-y-4">
              <button 
                onClick={() => navigate('/auth')}
                className="w-full px-6 py-4 text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 text-left hover:bg-gray-800/30 rounded-lg"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/auth')}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold tracking-wide rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;