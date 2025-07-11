import React from 'react';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const featuredCourses = [
    {
      id: 1,
      title: 'Advanced React Development Mastery',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      students: 2847,
      duration: '68h',
      lessons: 240,
      price: 899,
      instructor: 'Sarah Chen',
      popular: true
    },
    {
      id: 2,
      title: 'Complete AI & Machine Learning Bootcamp',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      students: 156,
      duration: '12w',
      lessons: 48,
      price: 2499,
      instructor: 'Dr. Sarah Johnson',
      bestseller: true
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      students: 1923,
      duration: '45h',
      lessons: 180,
      price: 1199,
      instructor: 'Mark Thompson'
    },
    {
      id: 4,
      title: 'UI/UX Design Masterclass',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      students: 89,
      duration: '5d',
      lessons: 25,
      price: 1899,
      instructor: 'Lisa Chen'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Most Popular Courses</h2>
            <p className="text-gray-400">Master cutting-edge skills with industry experts</p>
          </div>
            <button 
              onClick={() => navigate('/courses')}
              className="flex items-center space-x-2 px-6 py-3 text-black font-semibold rounded-xl transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#81784E' }}
            >
              <span>All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div key={course.id} className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  {course.popular && (
                    <span className="px-3 py-1 text-black rounded-lg text-xs font-bold" style={{ backgroundColor: '#81784E' }}>
                      POPULAR
                    </span>
                  )}
                  {course.bestseller && (
                    <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg text-xs font-bold">
                      BESTSELLER
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 bg-black/60 rounded-lg px-2 py-1 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-bold">{course.rating}</span>
                    <span className="text-gray-300 text-xs">({course.students})</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300 leading-tight flex-grow">
                  {course.title}
                </h3>

                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3" style={{ color: '#81784E' }} />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-rose-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-xl font-bold text-white mb-1">£{course.price}</div>
                    <div className="text-xs text-gray-400">{course.instructor}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;