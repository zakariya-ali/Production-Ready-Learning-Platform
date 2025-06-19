import React, { useState } from 'react';
import { BrainCircuit, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    // Handle Google OAuth logic here
    console.log(isLogin ? 'Google Sign In' : 'Google Sign Up');
    // This would typically redirect to Google OAuth or open a popup
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-20 flex items-center space-x-3 px-6 py-3 bg-gray-900/50 hover:bg-gray-800/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-amber-500/50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/50 shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl mx-auto mb-6 border border-amber-500/30">
                <BrainCircuit className="w-10 h-10 text-amber-400" />
              </div>
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-white">THINK</span>
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">OF</span>
                <span className="text-white">IT</span>
              </div>
              <p className="text-gray-400 mt-3">
                {isLogin ? 'Welcome back! Sign in to continue your journey.' : 'Join us and start your transformation today.'}
              </p>
            </div>

            {/* Google Auth Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {isLogin ? 'Sign in to your account' : 'Create your account'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isLogin ? 'Access your courses and continue learning' : 'Start your learning journey with us'}
                </p>
              </div>

              <button
                onClick={handleGoogleAuth}
                className="w-full py-5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-white/10 flex items-center justify-center space-x-4 border border-gray-200/10"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-lg">
                  {isLogin ? 'Continue with Google' : 'Sign up with Google'}
                </span>
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
                >
                  {isLogin 
                    ? "Don't have an account? Create one with Google" 
                    : "Already have an account? Sign in with Google"
                  }
                </button>
              </div>

              <div className="text-center pt-6 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    Privacy Policy
                  </a>
                  . We use Google OAuth for secure authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - ASCII Art */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-bl from-gray-950 to-black relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-950/10 to-yellow-950/5"></div>
        <div className="relative z-10 text-center px-8">
          <div className="flex justify-center mb-8">
            <img 
              src="/art.png"
              alt="Thinking philosopher" 
              className="max-w-4xl w-full h-auto object-contain filter sepia-[.3] hue-rotate-[10deg] saturate-[1.4] opacity-80 scale-x-[-1] transform scale-110 select-none"
            />
          </div>
          <div className="mt-12 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              Deep <span className="text-amber-400">Thoughts</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              "Knowing yourself is the beginning of all wisdom. Start your journey of continuous learning."
            </p>
            <p className="text-xl text-amber-400 font-semibold tracking-wide">— Aristotle, The Great Philosopher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;