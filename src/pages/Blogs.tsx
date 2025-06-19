import React, { useState } from 'react';
import { 
  Star, 
  Filter,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Clock,
  Tag
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatDateShort, getRecentDates } from '../utils/dateUtils';

const Blogs = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    topic: [],
    author: [],
    date: [],
    readTime: []
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    topic: true,
    author: true,
    date: false,
    readTime: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const recentDates = getRecentDates(8);

  const blogs = [
    {
      id: 1,
      title: 'Eco-Education In Our Lives: We Can Change the Future Through Learning',
      description: 'Exploring how environmental education can transform our understanding of sustainability and create lasting impact on future generations.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Sarah Green',
      category: 'Education',
      topic: 'Sustainability',
      publishedDate: formatDateShort(recentDates[0]),
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How to Design a Simple, Yet Unique and Memorable Primary Identity',
      description: 'A comprehensive guide to creating brand identities that stand out in today\'s crowded digital landscape while maintaining simplicity.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Alex Martinez',
      category: 'Design',
      topic: 'Branding',
      publishedDate: formatDateShort(recentDates[1]),
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Medical Chemistry: The Molecular Basis of Modern Healthcare',
      description: 'Understanding the fundamental chemical processes that drive modern medicine and pharmaceutical development.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Michael Johnson',
      category: 'Science',
      topic: 'Chemistry',
      publishedDate: formatDateShort(recentDates[2]),
      readTime: '15 min read',
      trending: true
    },
    {
      id: 4,
      title: 'Qualification Standards for Student Satisfaction Rates in Online Learning',
      description: 'Analyzing the metrics and methodologies used to measure and improve student satisfaction in digital educational environments.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Prof. Emily Chen',
      category: 'Education',
      topic: 'E-Learning',
      publishedDate: formatDateShort(recentDates[3]),
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Simple Words About Complex Science: Making Research Accessible',
      description: 'Strategies for translating complex scientific concepts into clear, understandable language for broader audiences.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Rachel Thompson',
      category: 'Science Communication',
      topic: 'Research',
      publishedDate: formatDateShort(recentDates[4]),
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'The Future of Web Development: Trends Shaping Tomorrow\'s Internet',
      description: 'Exploring emerging technologies and methodologies that will define the next generation of web development.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Wilson',
      category: 'Technology',
      topic: 'Web Development',
      publishedDate: formatDateShort(recentDates[5]),
      readTime: '11 min read',
      popular: true
    },
    {
      id: 7,
      title: 'Artificial Intelligence Ethics: Navigating the Moral Landscape',
      description: 'Examining the ethical implications of AI development and deployment in various sectors of society.',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Lisa Park',
      category: 'Technology',
      topic: 'Artificial Intelligence',
      publishedDate: formatDateShort(recentDates[6]),
      readTime: '14 min read'
    },
    {
      id: 8,
      title: 'Sustainable Technology: Building a Greener Digital Future',
      description: 'How technology companies are innovating to reduce environmental impact while maintaining performance and growth.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'James Rodriguez',
      category: 'Technology',
      topic: 'Sustainability',
      publishedDate: formatDateShort(recentDates[7]),
      readTime: '9 min read',
      featured: true
    }
  ];

  const filterOptions = {
    category: [
      { label: 'Technology', value: 'Technology', count: 1250 },
      { label: 'Education', value: 'Education', count: 890 },
      { label: 'Design', value: 'Design', count: 675 },
      { label: 'Science', value: 'Science', count: 456 },
      { label: 'Science Communication', value: 'Science Communication', count: 234 }
    ],
    topic: [
      { label: 'Web Development', value: 'Web Development', count: 567 },
      { label: 'Artificial Intelligence', value: 'Artificial Intelligence', count: 445 },
      { label: 'Sustainability', value: 'Sustainability', count: 334 },
      { label: 'E-Learning', value: 'E-Learning', count: 278 },
      { label: 'Branding', value: 'Branding', count: 234 },
      { label: 'Chemistry', value: 'Chemistry', count: 156 },
      { label: 'Research', value: 'Research', count: 123 }
    ],
    author: [
      { label: 'Dr. Sarah Green', value: 'Dr. Sarah Green', count: 45 },
      { label: 'Alex Martinez', value: 'Alex Martinez', count: 38 },
      { label: 'Dr. Michael Johnson', value: 'Dr. Michael Johnson', count: 32 },
      { label: 'Prof. Emily Chen', value: 'Prof. Emily Chen', count: 28 },
      { label: 'Dr. Rachel Thompson', value: 'Dr. Rachel Thompson', count: 25 }
    ],
    date: [
      { label: 'Last Week', value: 'last-week', count: 156 },
      { label: 'Last Month', value: 'last-month', count: 445 },
      { label: 'Last 3 Months', value: 'last-3-months', count: 789 },
      { label: 'This Year', value: 'this-year', count: 1234 }
    ],
    readTime: [
      { label: '5 min or less', value: '5-min', count: 456 },
      { label: '5-10 min', value: '5-10-min', count: 789 },
      { label: '10-15 min', value: '10-15-min', count: 567 },
      { label: '15+ min', value: '15-plus-min', count: 234 }
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
              Latest <span className="text-amber-400">Blogs</span>
            </h1>
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Tag className="w-3 h-3 text-blue-400" />
                </div>
                <span className="font-medium text-sm">Fresh insights and expert perspectives updated weekly</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
                <select className="px-3 py-2 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-700/50 focus:outline-none focus:border-amber-500/50 text-sm">
                  <option>Sort by: Most Recent</option>
                  <option>Sort by: Most Popular</option>
                  <option>Sort by: Most Commented</option>
                  <option>Sort by: Read Time: Short to Long</option>
                  <option>Sort by: Read Time: Long to Short</option>
                </select>
              </div>
              <div className="text-gray-400 text-sm">
                <span className="font-bold text-white text-base">2,500</span> results
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
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

                {/* Author Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('author')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Author</span>
                    {expandedSections.author ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.author && (
                    <div className="space-y-2">
                      {filterOptions.author.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('author', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read Time Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('readTime')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Read Time</span>
                    {expandedSections.readTime ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.readTime && (
                    <div className="space-y-2">
                      {filterOptions.readTime.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('readTime', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('date')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Published</span>
                    {expandedSections.date ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.date && (
                    <div className="space-y-2">
                      {filterOptions.date.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('date', option.value)}
                          />
                          <span className="text-gray-300 text-xs">{option.label} ({option.count.toLocaleString()})</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Blogs List */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {blogs.map((blog) => (
                  <div key={blog.id} className="group bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                    <div className="flex flex-col lg:flex-row">
                      {/* Blog Image */}
                      <div className="lg:w-72 flex-shrink-0">
                        <div className="relative h-48 lg:h-full">
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3 flex flex-col gap-1">
                            {blog.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-xs font-bold">
                                FEATURED
                              </span>
                            )}
                            {blog.trending && (
                              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-md text-xs font-bold">
                                TRENDING
                              </span>
                            )}
                            {blog.popular && (
                              <span className="px-2 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black rounded-md text-xs font-bold">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Blog Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-amber-600/20 text-amber-400 rounded-md text-xs font-semibold uppercase">
                                {blog.category}
                              </span>
                              <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-md text-xs font-semibold">
                                {blog.topic}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 leading-tight">
                              {blog.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                              {blog.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400 font-medium">{blog.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-green-400" />
                            <span>{blog.publishedDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-400" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Article</span>
                            <span>•</span>
                            <span>Free to read</span>
                          </div>
                          <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                            Read Article
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
                  Load More Articles
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

export default Blogs;