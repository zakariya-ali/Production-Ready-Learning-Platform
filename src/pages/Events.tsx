import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  MapPin,
  Clock,
  User,
  Ticket,
  Star,
  Users
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getFutureDates, formatDate } from '../utils/dateUtils';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const futureEventDates = getFutureDates(12, 3);

  const events = [
    {
      id: 1,
      title: 'Advanced React Workshop: Performance & Architecture',
      description: 'Deep dive into React performance optimization, advanced patterns, and enterprise architecture. Build scalable applications with modern React techniques.',
      date: futureEventDates[0],
      startTime: '09:00',
      endTime: '17:00',
      duration: '8 hours',
      location: 'San Francisco Tech Center',
      address: '123 Market Street, San Francisco, CA 94105',
      speaker: 'Sarah Chen',
      speakerTitle: 'Senior Frontend Architect at Meta',
      speakerBio: 'Sarah has 8+ years of experience building large-scale React applications and has contributed to React core.',
      price: 299,
      capacity: 50,
      registered: 42,
      type: 'Workshop',
      level: 'Advanced',
      tags: ['React', 'Performance', 'Architecture'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Bootcamp',
      description: 'Comprehensive introduction to AI and ML concepts with hands-on Python implementation. Perfect for beginners looking to enter the AI field.',
      date: futureEventDates[1],
      startTime: '10:00',
      endTime: '16:00',
      duration: '6 hours',
      location: 'Innovation Hub London',
      address: '45 Tech Square, London, EC2A 4LT',
      speaker: 'Dr. Michael Rodriguez',
      speakerTitle: 'AI Research Scientist at DeepMind',
      speakerBio: 'Michael holds a PhD in Machine Learning and has published 50+ papers on neural networks and deep learning.',
      price: 199,
      capacity: 80,
      registered: 65,
      type: 'Bootcamp',
      level: 'Beginner',
      tags: ['AI', 'Machine Learning', 'Python'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Full-Stack Development Masterclass',
      description: 'Complete guide to modern full-stack development covering React, Node.js, databases, and deployment strategies.',
      date: futureEventDates[2],
      startTime: '09:30',
      endTime: '18:00',
      duration: '8.5 hours',
      location: 'Digital Campus Berlin',
      address: '78 Startup Alley, Berlin, 10178',
      speaker: 'Alex Thompson',
      speakerTitle: 'Lead Full-Stack Developer at Stripe',
      speakerBio: 'Alex has built and scaled web applications used by millions of users and specializes in modern JavaScript stacks.',
      price: 349,
      capacity: 35,
      registered: 28,
      type: 'Masterclass',
      level: 'Intermediate',
      tags: ['Full-Stack', 'React', 'Node.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'UI/UX Design Thinking Workshop',
      description: 'Learn design thinking principles, user research methods, and create beautiful, user-centered designs.',
      date: futureEventDates[3],
      startTime: '11:00',
      endTime: '17:00',
      duration: '6 hours',
      location: 'Creative Space NYC',
      address: '123 Design Avenue, New York, NY 10001',
      speaker: 'Lisa Park',
      speakerTitle: 'Principal Designer at Airbnb',
      speakerBio: 'Lisa has 10+ years of experience in UX design and has led design teams for products used by millions.',
      price: 249,
      capacity: 40,
      registered: 35,
      type: 'Workshop',
      level: 'All Levels',
      tags: ['UI/UX', 'Design Thinking', 'Research'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'DevOps & Cloud Infrastructure Summit',
      description: 'Master cloud deployment, containerization, CI/CD pipelines, and infrastructure as code with AWS and Docker.',
      date: futureEventDates[4],
      startTime: '08:30',
      endTime: '17:30',
      duration: '9 hours',
      location: 'Cloud Tech Center',
      address: '456 Infrastructure Blvd, Seattle, WA 98101',
      speaker: 'David Wilson',
      speakerTitle: 'Senior DevOps Engineer at AWS',
      speakerBio: 'David has architected cloud solutions for Fortune 500 companies and is an AWS certified solutions architect.',
      price: 399,
      capacity: 60,
      registered: 48,
      type: 'Summit',
      level: 'Advanced',
      tags: ['DevOps', 'AWS', 'Docker'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals Training',
      description: 'Essential cybersecurity knowledge for developers, including security best practices and threat detection.',
      date: futureEventDates[5],
      startTime: '10:00',
      endTime: '16:30',
      duration: '6.5 hours',
      location: 'Security Institute',
      address: '789 Cyber Street, Austin, TX 78701',
      speaker: 'Emily Johnson',
      speakerTitle: 'Cybersecurity Specialist at Microsoft',
      speakerBio: 'Emily is a certified ethical hacker with expertise in penetration testing and security architecture.',
      price: 279,
      capacity: 45,
      registered: 38,
      type: 'Training',
      level: 'Beginner',
      tags: ['Cybersecurity', 'Security', 'Best Practices'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const openEventModal = (event: any) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setShowEventModal(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 border border-gray-800/30"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`h-32 border border-gray-800/30 p-2 ${isToday ? 'bg-amber-950/20 border-amber-500/30' : ''}`}
        >
          <div className={`text-sm font-semibold mb-2 ${isToday ? 'text-amber-400' : 'text-white'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.map(event => (
              <button
                key={event.id}
                onClick={() => openEventModal(event)}
                className="w-full text-left p-1 rounded text-xs bg-gradient-to-r from-amber-600/80 to-yellow-500/80 text-black font-medium hover:from-amber-700/90 hover:to-yellow-600/90 transition-all duration-200 truncate"
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Tech <span className="text-amber-400">Events</span> Calendar
            </h1>
            <p className="text-gray-400 text-lg">Join our community events and expand your skills with industry experts</p>
          </div>

          {/* Calendar Header */}
          <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentDate(new Date())}
                  className="px-4 py-2 bg-amber-600/20 text-amber-400 font-medium rounded-lg hover:bg-amber-600/30 transition-all duration-300"
                >
                  Today
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Days of the week */}
            <div className="grid grid-cols-7 gap-px bg-gray-800/30 rounded-lg overflow-hidden mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="bg-gray-900/50 text-center py-3 text-gray-300 font-semibold">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-gray-800/30 rounded-lg overflow-hidden">
              {renderCalendar()}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 6).map(event => (
                <div
                  key={event.id}
                  className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 cursor-pointer"
                  onClick={() => openEventModal(event)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-amber-600/20 text-amber-400 rounded text-xs font-semibold">
                        {event.type}
                      </span>
                      <span className="text-white font-bold">£{event.price}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {event.title}
                    </h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl border border-gray-800/50 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeEventModal}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-amber-600 text-black rounded-lg text-sm font-bold">
                  {selectedEvent.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-white pr-4">{selectedEvent.title}</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-400">£{selectedEvent.price}</div>
                  <div className="text-sm text-gray-400">per person</div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedEvent.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">{formatDate(selectedEvent.date)}</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.startTime} - {selectedEvent.endTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">Duration</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">{selectedEvent.location}</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.address}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">{selectedEvent.speaker}</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.speakerTitle}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-rose-400" />
                    <div>
                      <div className="text-white font-semibold">Capacity</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.registered}/{selectedEvent.capacity} registered</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-semibold">Level</div>
                      <div className="text-gray-400 text-sm">{selectedEvent.level}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">About the Speaker</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{selectedEvent.speakerBio}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Topics Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={closeEventModal}
                  className="px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/50 transition-all duration-300"
                >
                  Close
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                  <Ticket className="w-5 h-5" />
                  <span>Buy Tickets - £{selectedEvent.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events;