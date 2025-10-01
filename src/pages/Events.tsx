import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, Clock, MapPin, Search, Filter, Plus, ChevronDown, ChevronUp, Users, Bell } from 'lucide-react';

// Event data with expanded properties
const eventsData = [
  { 
    id: 1,
    title: 'Algorithm Design Workshop', 
    date: 'Oct 15, 2024', 
    time: '2:00 PM - 4:00 PM', 
    location: 'Room 305',
    type: 'Workshop',
    urgent: false,
    description: 'Learn advanced algorithm design techniques with Professor Smith. This workshop will cover greedy algorithms, dynamic programming, and graph algorithms.',
    capacity: 30,
    registered: 18,
    organizer: 'Computer Science Department'
  },
  { 
    id: 2,
    title: 'Project Submission Deadline', 
    date: 'Oct 18, 2024', 
    time: '11:59 PM', 
    location: 'Online',
    type: 'Deadline',
    urgent: true,
    description: 'Final deadline for submitting your semester project. Make sure to upload all required documents to the course portal.',
    capacity: null,
    registered: null,
    organizer: 'Academic Affairs'
  },
  { 
    id: 3,
    title: 'Career Fair 2024', 
    date: 'Oct 22, 2024', 
    time: '10:00 AM - 4:00 PM', 
    location: 'Main Hall',
    type: 'Event',
    urgent: false,
    description: 'Connect with over 50 companies hiring for internships and full-time positions. Bring your resume and dress professionally.',
    capacity: 500,
    registered: 320,
    organizer: 'Career Services'
  },
  { 
    id: 4,
    title: 'Midterm Exam - Data Structures', 
    date: 'Oct 25, 2024', 
    time: '9:00 AM - 11:00 AM', 
    location: 'Room 201',
    type: 'Exam',
    urgent: true,
    description: 'Comprehensive exam covering all topics from weeks 1-7. Open book, no electronic devices allowed.',
    capacity: 120,
    registered: 98,
    organizer: 'Computer Science Department'
  },
  { 
    id: 5,
    title: 'Guest Lecture: AI Ethics', 
    date: 'Nov 2, 2024', 
    time: '3:00 PM - 5:00 PM', 
    location: 'Auditorium B',
    type: 'Lecture',
    urgent: false,
    description: 'Distinguished speaker Dr. Jane Rodriguez discusses ethical considerations in artificial intelligence development and deployment.',
    capacity: 200,
    registered: 87,
    organizer: 'Ethics Committee'
  },
  { 
    id: 6,
    title: 'Hackathon 2024', 
    date: 'Nov 10-12, 2024', 
    time: 'All day', 
    location: 'Innovation Center',
    type: 'Competition',
    urgent: false,
    description: '48-hour coding competition with prizes totaling $5000. Form teams of up to 4 students.',
    capacity: 150,
    registered: 112,
    organizer: 'Student Tech Club'
  },
];

const typeColors: Record<string, string> = {
  Workshop: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Deadline: 'bg-red-500/20 text-red-400 border-red-500/30',
  Event: 'bg-green-500/20 text-green-400 border-green-500/30',
  Exam: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Lecture: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Competition: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  
  // Filter events based on search query and type filter
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || event.type === filter || 
                         (filter === 'Urgent' && event.urgent);
    return matchesSearch && matchesFilter;
  });

  // Toggle event details expansion
  const toggleEventDetails = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  // Handle event registration
  const handleRegistration = (eventId: number) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Events Calendar</h1>
          <p className="text-gray-400">Stay updated with upcoming events, deadlines, and activities</p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                <Filter className="h-4 w-4 mr-2" />
                Filter: {filter}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              {/* Filter dropdown would go here in a real implementation */}
            </div>
            
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>
        </div>
        
        {/* Events Display */}
        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <React.Fragment key={event.id}>
                <DashboardCard 
                  className={`p-4 transition-all duration-300 ${expandedEvent === event.id ? 'border-l-4 border-l-blue-500' : ''}`}
                >
                <div className="cursor-pointer" onClick={() => toggleEventDetails(event.id)}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-white text-lg">{event.title}</h3>
                        <Badge className={typeColors[event.type]}>
                          {event.type}
                        </Badge>
                        {event.urgent && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2 md:mt-0">
                      {expandedEvent === event.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Expanded Event Details */}
                {expandedEvent === event.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Organizer</p>
                        <p className="text-white">{event.organizer}</p>
                      </div>
                      
                      {event.capacity && (
                        <div>
                          <p className="text-sm text-gray-400">Capacity</p>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <p className="text-white">{event.registered} / {event.capacity}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.type !== 'Deadline' && event.type !== 'Exam' && (
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRegistration(event.id);
                          }}
                          className={registeredEvents.includes(event.id) 
                            ? "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30" 
                            : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"}
                        >
                          {registeredEvents.includes(event.id) ? 'Cancel Registration' : 'Register'}
                        </Button>
                      )}
                      
                      <Button 
                        variant="outline" 
                        className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          // In a real app, this would add the event to calendar
                        }}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          // In a real app, this would set up notifications
                        }}
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Remind Me
                      </Button>
                    </div>
                  </div>
                )}
              </DashboardCard>
              </React.Fragment>
            ))
          ) : (
            <DashboardCard className="p-8 text-center">
              <p className="text-gray-400">No events found matching your criteria.</p>
            </DashboardCard>
          )}
        </div>
      </div>
    </main>
  );
}