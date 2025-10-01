import { DashboardCard } from './DashboardCard';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  { 
    title: 'Algorithm Design Workshop', 
    date: 'Oct 15', 
    time: '2:00 PM', 
    location: 'Room 305',
    type: 'Workshop',
    urgent: false
  },
  { 
    title: 'Project Submission Deadline', 
    date: 'Oct 18', 
    time: '11:59 PM', 
    location: 'Online',
    type: 'Deadline',
    urgent: true
  },
  { 
    title: 'Career Fair 2024', 
    date: 'Oct 22', 
    time: '10:00 AM', 
    location: 'Main Hall',
    type: 'Event',
    urgent: false
  },
  { 
    title: 'Midterm Exam - Data Structures', 
    date: 'Oct 25', 
    time: '9:00 AM', 
    location: 'Room 201',
    type: 'Exam',
    urgent: true
  },
];

const typeColors: Record<string, string> = {
  Workshop: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Deadline: 'bg-red-500/20 text-red-400 border-red-500/30',
  Event: 'bg-green-500/20 text-green-400 border-green-500/30',
  Exam: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export function Events() {
  return (
    <DashboardCard className="p-6">
      <h3 className="text-lg font-semibold text-white flex items-center space-x-2 mb-4">
        <Calendar className="h-5 w-5" />
        <span>Events & Deadlines</span>
      </h3>
      
      <div className="space-y-3">
        {upcomingEvents.map((event, index) => (
          <div key={index} className={`p-3 rounded-lg border transition-colors ${
            event.urgent 
              ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-white">{event.title}</h4>
                  <Badge className={typeColors[event.type]}>
                    {event.type}
                  </Badge>
                  {event.urgent && (
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      Urgent
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}