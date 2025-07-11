import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Ebooks = () => {
  const navigate = useNavigate();

  const latestBooks = [
    {
      id: 1,
      title: 'CSS Mastery Guide',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 1991,
      price: 79,
    },
    {
      id: 2,
      title: 'Modern HTML5 Development',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 1234,
      price: 79,
      isNew: true
    },
    {
      id: 3,
      title: 'Rust Programming Complete Guide',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 534,
      price: 18,
    },
    {
      id: 4,
      title: 'Vue.js Complete Course',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 727,
      price: 17,
      isNew: true
    },
    {
      id: 5,
      title: 'HTML5 & CSS3 Fundamentals',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 3,
      price: 12,
    }
  ];

  return (
    <section id="ebooks" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Latest Books</h2>
            <p className="text-gray-400">Comprehensive guides from industry experts</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-xl hover:from-amber-700 hover:to-yellow-600 transition-all duration-300">
          <button className="flex items-center space-x-2 px-6 py-3 text-black font-semibold rounded-xl transition-all duration-300" style={{ backgroundColor: '#81784E' }}>
            <span onClick={() => navigate('/books')}>All Books</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {latestBooks.map((book) => (
            <div key={book.id} className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="relative">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {book.isNew && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-black rounded-lg text-xs font-bold" style={{ backgroundColor: '#81784E' }}>
                      NEW
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300 flex-grow">
                  {book.title}
                </h3>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#81784E' }} />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">({book.reviews})</span>
                </div>

                <div className="mt-auto">
                  <span className="text-xl font-bold" style={{ color: '#81784E' }}>£{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ebooks;