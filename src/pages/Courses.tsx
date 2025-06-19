import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  BookOpen, 
  Users, 
  Video, 
  MapPin, 
  Filter,
  ChevronDown,
  ChevronUp,
  Play,
  Calendar,
  Award,
  Wifi
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Courses = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    rating: [],
    duration: [],
    topic: [],
    subcategory: [],
    level: [],
    language: [],
    price: [],
    type: []
  });

  const [expandedSections, setExpandedSections] = useState({
    rating: true,
    duration: true,
    topic: true,
    subcategory: true,
    level: true,
    language: false,
    price: true,
    type: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const courses = [
    {
      id: 1,
      title: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description: 'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Jose Portilla',
      rating: 4.6,
      reviewCount: 539086,
      students: 2247891,
      duration: '22 total hours',
      lectures: 156,
      level: 'All Levels',
      price: 89.99,
      type: 'on-demand',
      topic: 'Python',
      subcategory: 'Programming Languages',
      language: 'English',
      bestseller: true,
      updated: 'Recently updated'
    },
    {
      id: 2,
      title: 'The Complete Full-Stack Web Development Bootcamp',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Dr. Angela Yu',
      rating: 4.7,
      reviewCount: 441755,
      students: 1856234,
      duration: '61.5 total hours',
      lectures: 374,
      level: 'All Levels',
      price: 79.99,
      type: 'on-demand',
      topic: 'Web Development',
      subcategory: 'Web Development',
      language: 'English',
      popular: true
    },
    {
      id: 3,
      title: 'Advanced React Development Masterclass - Live Workshop',
      description: 'Master advanced React patterns, performance optimization, and enterprise-scale architecture in this intensive live workshop',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Sarah Chen',
      rating: 4.9,
      reviewCount: 2847,
      students: 156,
      duration: '3 days intensive',
      lectures: 12,
      level: 'Expert',
      price: 899.99,
      type: 'in-person',
      topic: 'React',
      subcategory: 'Web Development',
      language: 'English',
      venue: 'San Francisco Tech Center',
      nextSession: 'March 25, 2024',
      featured: true
    },
    {
      id: 4,
      title: 'AI & Machine Learning Bootcamp - Online Live Sessions',
      description: 'Comprehensive AI strategy framework covering machine learning deployment, ethical AI, and organizational transformation',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Dr. Michael Rodriguez',
      rating: 4.9,
      reviewCount: 1234,
      students: 892,
      duration: '12 weeks',
      lectures: 48,
      level: 'Intermediate',
      price: 1499.99,
      type: 'online-live',
      topic: 'Machine Learning',
      subcategory: 'Data Science',
      language: 'English',
      platform: 'Microsoft Teams',
      nextSession: 'April 1, 2024',
      trending: true
    },
    {
      id: 5,
      title: 'Complete Game Development with Unity',
      description: 'Learn Unity in C# & Code Your First Five 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'GameDev.tv Team',
      rating: 4.6,
      reviewCount: 105106,
      students: 567234,
      duration: '44.5 total hours',
      lectures: 197,
      level: 'Beginner',
      price: 59.99,
      type: 'on-demand',
      topic: 'Unity',
      subcategory: 'Game Development',
      language: 'English'
    },
    {
      id: 6,
      title: 'Java Programming Masterclass for Software Developers',
      description: 'Learn Java in this course and become a computer programmer. Obtain valuable Core Java Skills And Java Certification',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Tim Buchalka',
      rating: 4.6,
      reviewCount: 207461,
      students: 892341,
      duration: '135.5 total hours',
      lectures: 796,
      level: 'All Levels',
      price: 69.99,
      type: 'on-demand',
      topic: 'Java',
      subcategory: 'Programming Languages',
      language: 'English',
      bestseller: true
    },
    {
      id: 7,
      title: 'iOS Development Workshop - In-Person Intensive',
      description: 'Build complete iOS apps from scratch in this hands-on workshop. Learn Swift, UIKit, and modern iOS development practices',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Apple Certified Instructor',
      rating: 4.8,
      reviewCount: 892,
      students: 45,
      duration: '5 days',
      lectures: 25,
      level: 'Intermediate',
      price: 1999.99,
      type: 'in-person',
      topic: 'iOS',
      subcategory: 'Mobile Development',
      language: 'English',
      venue: 'Apple Park Visitor Center',
      nextSession: 'April 15, 2024'
    },
    {
      id: 8,
      title: 'Data Science with Python - Live Online Bootcamp',
      description: 'Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: '365 Careers',
      rating: 4.6,
      reviewCount: 154176,
      students: 1234,
      duration: '16 weeks',
      lectures: 523,
      level: 'All Levels',
      price: 899.99,
      type: 'online-live',
      topic: 'Data Science',
      subcategory: 'Data Science',
      language: 'English',
      platform: 'Microsoft Teams',
      nextSession: 'March 30, 2024'
    }
  ];

  const filterOptions = {
    rating: [
      { label: '4.5 & up', value: '4.5', count: 10000 },
      { label: '4.0 & up', value: '4.0', count: 10000 },
      { label: '3.5 & up', value: '3.5', count: 10000 },
      { label: '3.0 & up', value: '3.0', count: 10000 }
    ],
    duration: [
      { label: '0-1 Hour', value: '0-1', count: 3514 },
      { label: '1-3 Hours', value: '1-3', count: 10000 },
      { label: '3-6 Hours', value: '3-6', count: 9171 },
      { label: '6-17 Hours', value: '6-17', count: 10000 },
      { label: '17+ Hours', value: '17+', count: 5000 }
    ],
    topic: [
      { label: 'Python', value: 'Python', count: 2520 },
      { label: 'JavaScript', value: 'JavaScript', count: 1329 },
      { label: 'Java', value: 'Java', count: 1094 },
      { label: 'Web Development', value: 'Web Development', count: 973 },
      { label: 'React', value: 'React', count: 724 },
      { label: 'Machine Learning', value: 'Machine Learning', count: 610 },
      { label: 'Data Science', value: 'Data Science', count: 516 },
      { label: 'Unity', value: 'Unity', count: 969 },
      { label: 'iOS', value: 'iOS', count: 434 }
    ],
    subcategory: [
      { label: 'Web Development', value: 'Web Development', count: 10000 },
      { label: 'Programming Languages', value: 'Programming Languages', count: 8261 },
      { label: 'Data Science', value: 'Data Science', count: 4592 },
      { label: 'Mobile Development', value: 'Mobile Development', count: 2944 },
      { label: 'Game Development', value: 'Game Development', count: 1876 }
    ],
    level: [
      { label: 'All Levels', value: 'All Levels', count: 10000 },
      { label: 'Beginner', value: 'Beginner', count: 10000 },
      { label: 'Intermediate', value: 'Intermediate', count: 5900 },
      { label: 'Expert', value: 'Expert', count: 680 }
    ],
    language: [
      { label: 'English', value: 'English', count: 10000 },
      { label: 'Português', value: 'Português', count: 3386 },
      { label: 'Español', value: 'Español', count: 3245 }
    ],
    price: [
      { label: 'Paid', value: 'Paid', count: 10000 },
      { label: 'Free', value: 'Free', count: 4303 }
    ],
    type: [
      { label: 'On-Demand Video', value: 'on-demand', count: 8500 },
      { label: 'Live Online', value: 'online-live', count: 1200 },
      { label: 'In-Person', value: 'in-person', count: 300 }
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'on-demand':
        return <Play className="w-4 h-4" />;
      case 'online-live':
        return <Video className="w-4 h-4" />;
      case 'in-person':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Play className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'on-demand':
        return 'On-Demand';
      case 'online-live':
        return 'Live Online';
      case 'in-person':
        return 'In-Person';
      default:
        return 'Course';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'on-demand':
        return 'bg-blue-500/90 text-white border-blue-400/50';
      case 'online-live':
        return 'bg-green-500/90 text-white border-green-400/50';
      case 'in-person':
        return 'bg-purple-500/90 text-white border-purple-400/50';
      default:
        return 'bg-gray-500/90 text-white border-gray-400/50';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              All Development <span className="text-amber-400">Courses</span>
            </h1>
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-xs font-bold">i</span>
                </div>
                <span className="font-medium text-sm">Not sure? All courses have a 30-day money-back guarantee</span>
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
                <span className="font-bold text-white text-base">10,000</span> results
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

                {/* Course Type Filter */}
                <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50">
                  <button
                    onClick={() => toggleSection('type')}
                    className="flex items-center justify-between w-full text-white font-bold text-base mb-3"
                  >
                    <span>Course Type</span>
                    {expandedSections.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.type && (
                    <div className="space-y-2">
                      {filterOptions.type.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500 focus:ring-1"
                            onChange={() => handleFilterChange('type', option.value)}
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
              </div>
            </div>

            {/* Course List */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="group bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                    <div className="flex flex-col lg:flex-row">
                      {/* Course Image */}
                      <div className="lg:w-72 flex-shrink-0">
                        <div className="relative h-48 lg:h-full">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3 flex flex-col gap-1">
                            <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1 ${getTypeColor(course.type)}`}>
                              {getTypeIcon(course.type)}
                              <span>{getTypeLabel(course.type)}</span>
                            </span>
                            {course.bestseller && (
                              <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md text-xs font-bold">
                                BESTSELLER
                              </span>
                            )}
                            {course.popular && (
                              <span className="px-2 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black rounded-md text-xs font-bold">
                                POPULAR
                              </span>
                            )}
                            {course.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-xs font-bold">
                                FEATURED
                              </span>
                            )}
                            {course.trending && (
                              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-md text-xs font-bold">
                                TRENDING
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 leading-tight">
                              {course.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                              {course.description}
                            </p>
                            <div className="text-sm text-gray-400 mb-4">
                              by <span className="text-amber-400 font-medium">{course.instructor}</span>
                              {course.updated && <span className="ml-4 text-green-400">{course.updated}</span>}
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-2xl font-bold text-white">£{course.price}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="text-amber-400 font-bold">{course.rating}</span>
                            <span className="text-gray-400">({course.reviewCount.toLocaleString()})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span>{course.lectures} lectures</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span>{course.level}</span>
                          </div>
                        </div>

                        {/* Course Type Specific Info */}
                        {course.type === 'in-person' && (
                          <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-4 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center space-x-2 text-purple-400">
                                <MapPin className="w-4 h-4" />
                                <span>{course.venue}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-green-400">
                                <Calendar className="w-4 h-4" />
                                <span>Next: {course.nextSession}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {course.type === 'online-live' && (
                          <div className="bg-green-950/20 border border-green-500/20 rounded-lg p-4 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center space-x-2 text-green-400">
                                <Wifi className="w-4 h-4" />
                                <span>Platform: {course.platform}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-blue-400">
                                <Calendar className="w-4 h-4" />
                                <span>Starts: {course.nextSession}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{course.students.toLocaleString()} students</span>
                            </div>
                            <span>•</span>
                            <span>{course.subcategory}</span>
                          </div>
                          <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                            {course.type === 'in-person' ? 'Reserve Seat' : course.type === 'online-live' ? 'Join Live Course' : 'Enroll Now'}
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
                  Load More Courses
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

export default Courses;