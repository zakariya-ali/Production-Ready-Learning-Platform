import React from 'react';
import { ArrowRight, MailCheck } from 'lucide-react';
import { getRecentDates, formatDateShort } from '../utils/dateUtils';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const recentDates = getRecentDates(5);
  
  const featuredPosts = [
    {
      id: 1,
      title: 'Eco-Education In Our Lives: We Can Change the Future',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'EDUCATION',
      date: formatDateShort(recentDates[0])
    },
    {
      id: 2,
      title: 'How to design a simple, yet unique and memorable primary identity',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'DESIGN',
      date: formatDateShort(recentDates[1])
    }
  ];

  const latestPosts = [
    {
      id: 3,
      title: 'Medical Chemistry: The Molecular Basis',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'COURSES',
      date: formatDateShort(recentDates[2])
    },
    {
      id: 4,
      title: 'Qualification for Students\' Satisfaction Rate',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'DEVELOPMENT',
      date: formatDateShort(recentDates[3])
    },
    {
      id: 5,
      title: 'Simple Words about Science Complications',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'LIFESTYLE',
      date: formatDateShort(recentDates[4])
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Resources & News</h2>
            <p className="text-gray-400">Stay updated with latest insights and trends</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-xl hover:from-amber-700 hover:to-yellow-600 transition-all duration-300">
            <button 
              onClick={() => navigate('/blogs')}
              className="flex items-center space-x-2 px-6 py-3 text-black font-semibold rounded-xl transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#81784E' }}
            >
              <span>Browse Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles - Takes up 2/3 of the width */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-black rounded-lg text-xs font-bold mb-3 uppercase" style={{ backgroundColor: '#81784E' }}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 leading-tight mb-2" style={{ '--hover-color': '#81784E' } as any}>
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar - Takes up 1/3 of the width */}
          <div className="lg:col-span-1 space-y-6">
            {latestPosts.map((post) => (
              <article key={post.id} className="group flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/30 to-black/20 rounded-2xl border border-gray-800/30 hover:border-amber-500/30 transition-all duration-300">
                <div className="overflow-hidden rounded-xl flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-16 h-16 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wide block" style={{ color: '#81784E' }}>
                    {post.category}
                  </span>
                  <h4 className="text-sm font-bold text-white transition-colors duration-300 leading-tight mt-1 line-clamp-2" style={{ '--hover-color': '#81784E' } as any}>
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-yellow-900/20 to-yellow-950/20 rounded-3xl p-12 text-center border border-yellow-700/20">
          <h3 className="text-4xl font-bold text-white mb-4">Subscribe to our Newsletter!</h3>
          <p className="text-yellow-100 mb-6 text-lg">Stay updated with our latest news and offers.</p>
          <p className="text-yellow-200 text-sm mb-8">You have to log in first to subscribe!</p>
          <button className="inline-flex items-center space-x-3 px-8 py-4 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-700/25" style={{ backgroundColor: '#81784E' }}>
            <MailCheck className="w-5 h-5" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;