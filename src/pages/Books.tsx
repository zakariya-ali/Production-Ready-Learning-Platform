import React, { useState } from 'react';
import { 
  Star, 
  Filter,
  ChevronDown,
  ChevronUp,
  Calendar,
  Download,
  ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Books = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    rating: [],
    category: [],
    topic: [],
    level: [],
    language: [],
    price: [],
    format: []
  });

  const [expandedSections, setExpandedSections] = useState({
    rating: true,
    category: true,
    topic: true,
    level: true,
    language: false,
    price: true,
    format: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const books = [
    {
      id: 1,
      title: 'CSS Mastery Guide: Complete Modern CSS Development',
      description: 'Master modern CSS with this comprehensive guide covering Flexbox, Grid, animations, and responsive design patterns.',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Rachel Green',
      rating: 4.8,
      reviewCount: 1991,
      pages: 456,
      publishedDate: 'March 2024',
      price: 79,
      category: 'Web Development',
      topic: 'CSS',
      level: 'Intermediate',
      language: 'English',
      format: 'PDF + EPUB',
      bestseller: true
    },
    {
      id: 2,
      title: 'Modern HTML5 Development: Building Interactive Web Applications',
      description: 'Learn HTML5 from the ground up with practical examples, semantic markup, and modern best practices.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Wilson',
      rating: 4.9,
      reviewCount: 1234,
      pages: 389,
      publishedDate: 'February 2024',
      price: 79,
      category: 'Web Development',
      topic: 'HTML',
      level: 'Beginner',
      language: 'English',
      format: 'PDF + EPUB',
      isNew: true
    },
    {
      id: 3,
      title: 'Rust Programming Complete Guide: Systems Programming Made Easy',
      description: 'Master Rust programming with this comprehensive guide covering memory safety, concurrency, and performance.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Martinez',
      rating: 4.7,
      reviewCount: 534,
      pages: 678,
      publishedDate: 'January 2024',
      price: 89,
      category: 'Programming Languages',
      topic: 'Rust',
      level: 'Advanced',
      language: 'English',
      format: 'PDF + EPUB + Source Code'
    },
    {
      id: 4,
      title: 'Vue.js Complete Course: Building Modern Single Page Applications',
      description: 'Build dynamic web applications with Vue.js 3, covering composition API, state management, and testing.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      rating: 4.6,
      reviewCount: 727,
      pages: 523,
      publishedDate: 'December 2023',
      price: 69,
      category: 'JavaScript Frameworks',
      topic: 'Vue.js',
      level: 'Intermediate',
      language: 'English',
      format: 'PDF + EPUB',
      isNew: true
    },
    {
      id: 5,
      title: 'HTML5 & CSS3 Fundamentals: The Complete Beginner\'s Guide',
      description: 'Start your web development journey with this beginner-friendly guide to HTML5 and CSS3 fundamentals.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Johnson',
      rating: 4.5,
      reviewCount: 892,
      pages: 234,
      publishedDate: 'November 2023',
      price: 45,
      category: 'Web Development',
      topic: 'HTML & CSS',
      level: 'Beginner',
      language: 'English',
      format: 'PDF + EPUB'
    },
    {
      id: 6,
      title: 'Advanced JavaScript Patterns: Design for Scale',
      description: 'Learn advanced JavaScript patterns, functional programming concepts, and architectural design patterns.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Alex Thompson',
      rating: 4.9,
      reviewCount: 456,
      pages: 589,
      publishedDate: 'October 2023',
      price: 95,
      category: 'Programming Languages',
      topic: 'JavaScript',
      level: 'Advanced',
      language: 'English',
      format: 'PDF + EPUB + Source Code',
      bestseller: true
    },
    {
      id: 7,
      title: 'Python for Data Science: Complete Analytics Guide',
      description: 'Master data science with Python covering pandas, numpy, matplotlib, and machine learning basics.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Lisa Park',
      rating: 4.8,
      reviewCount: 1567,
      pages: 712,
      publishedDate: 'September 2023',
      price: 99,
      category: 'Data Science',
      topic: 'Python',
      level: 'Intermediate',
      language: 'English',
      format: 'PDF + EPUB + Jupyter Notebooks'
    },
    {
      id: 8,
      title: 'React Native Mobile Development: Cross-Platform Apps',
      description: 'Build native mobile apps for iOS and Android using React Native with this comprehensive guide.',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'James Rodriguez',
      rating: 4.7,
      reviewCount: 923,
      pages: 445,
      publishedDate: 'August 2023',
      price: 85,
      category: 'Mobile Development',
      topic: 'React Native',
      level: 'Intermediate',
      language: 'English',
      format: 'PDF + EPUB + Source Code'
    }
  ];

  const filterOptions = {
    rating: [
      { label: '4.5 & up', value: '4.5', count: 2500 },
      { label: '4.0 & up', value: '4.0', count: 3200 },
      { label: '3.5 & up', value: '3.5', count: 4100 },
      { label: '3.0 & up', value: '3.0', count: 5000 }
    ],
    category: [
      { label: 'Web Development', value: 'Web Development', count: 1200 },
      { label: 'Programming Languages', value: 'Programming Languages', count: 950 },
      { label: 'Data Science', value: 'Data Science', count: 780 },
      { label: 'Mobile Development', value: 'Mobile Development', count: 650 },
      { label: 'JavaScript Frameworks', value: 'JavaScript Frameworks', count: 540 }
    ],
    topic: [
      { label: 'JavaScript', value: 'JavaScript', count: 890 },
      { label: 'Python', value: 'Python', count: 756 },
      { label: 'React', value: 'React', count: 645 },
      { label: 'CSS', value: 'CSS', count: 534 },
      { label: 'HTML', value: 'HTML', count: 456 },
      { label: 'Vue.js', value: 'Vue.js', count: 234 },
      { label: 'Rust', value: 'Rust', count: 123 }
    ],
    level: [
      { label: 'All Levels', value: 'All Levels', count: 1500 },
      { label: 'Beginner', value: 'Beginner', count: 1200 },
      { label: 'Intermediate', value: 'Intermediate', count: 890 },
      { label: 'Advanced', value: 'Advanced', count: 345 }
    ],
    language: [
      { label: 'English', value: 'English', count: 3500 },
      { label: 'Spanish', value: 'Spanish', count: 456 },
      { label: 'French', value: 'French', count: 234 }
    ],
    price: [
      { label: 'Under £50', value: 'under-50', count: 1200 },
      { label: '£50-£100', value: '50-100', count: 1800 },
      { label: 'Over £100', value: 'over-100', count: 500 },
      { label: 'Free', value: 'free', count: 300 }
    ],
    format: [
      { label: 'PDF', value: 'PDF', count: 3500 },
      { label: 'EPUB', value: 'EPUB', count: 3200 },
      { label: 'Source Code Included', value: 'source-code', count: 1200 },
      { label: 'Interactive', value: 'interactive', count: 450 }
    ]
  };

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].includes(value)
        ? prev[category as keyof typeof prev].filter(item => item !== value)
        : [...prev[category as keyof typeof prev], value]
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Programming <span className="text-amber-400">Books</span>
            </h1>
            <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3 text-green-300">
                <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Download className="w-3 h-3 text-green-400" />
                </div>
                <span className="font-medium text-sm">Download instantly after purchase - PDF, EPUB & source code included</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
                <select className="px-3 py-2 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-700/50 focus:outline-none focus:border-amber-500/50 text-sm">
                  <option>Sort by: Most Popular</option>
                  <option>Sort by: Highest Rated</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Price: Low to High</option>
                  <option>Sort by: Price: High to Low</option>
                </select>
              </div>
              <div className="text-gray-400 text-sm">
                <span className="font-bold text-white text-base">3,500</span> results
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Rating Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('rating')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Ratings</span>
                    {expandedSections.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.rating && (
                    <div className="space-y-2">
                      {filterOptions.rating.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('rating', option.value)}
                          />
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2.5 h-2.5 ${
                                  i < parseFloat(option.value) ? 'text-amber-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                            <span className="text-gray-300 text-xs">({option.count.toLocaleString()})</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('category')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Category</span>
                    {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.category && (
                    <div className="space-y-2">
                      {filterOptions.category.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('category', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Topic Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('topic')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Topic</span>
                    {expandedSections.topic ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.topic && (
                    <div className="space-y-2">
                      {filterOptions.topic.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('topic', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Level Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('level')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Level</span>
                    {expandedSections.level ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.level && (
                    <div className="space-y-2">
                      {filterOptions.level.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('level', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Price</span>
                    {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.price && (
                    <div className="space-y-2">
                      {filterOptions.price.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('price', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Format Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('format')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Format</span>
                    {expandedSections.format ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.format && (
                    <div className="space-y-2">
                      {filterOptions.format.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('format', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Books List */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {books.map((book) => (
                  <div key={book.id} className="group bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                    <div className="flex flex-col lg:flex-row">
                      {/* Book Image */}
                      <div className="lg:w-72 flex-shrink-0">
                        <div className="relative h-48 lg:h-full">
                          <img 
                            src={book.image} 
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3 flex flex-col gap-1">
                            {book.bestseller && (
                              <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md text-xs font-bold">
                                BESTSELLER
                              </span>
                            )}
                            {book.isNew && (
                              <span className="px-2 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black rounded-md text-xs font-bold">
                                NEW
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Book Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 leading-tight">
                              {book.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                              {book.description}
                            </p>
                            <div className="text-sm text-gray-400 mb-4">
                              by <span className="text-amber-400 font-medium">{book.author}</span>
                              <span className="ml-4 text-green-400">{book.publishedDate}</span>
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-2xl font-bold text-white">£{book.price}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="text-amber-400 font-bold">{book.rating}</span>
                            <span className="text-gray-400">({book.reviewCount.toLocaleString()})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span>{book.pages} pages</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Download className="w-4 h-4 text-green-400" />
                            <span>{book.format}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{book.category}</span>
                            <span>•</span>
                            <span>{book.level}</span>
                            <span>•</span>
                            <span>{book.topic}</span>
                          </div>
                          <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                            Download Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gray-900/50 text-white font-semibold rounded-lg border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/50 transition-all duration-300">
                  Load More Books
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Books;