import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Users, Clock, Plus, Search } from 'lucide-react';

const studyRooms = [
  { name: 'Data Structures Study', members: 8, timeLeft: '2h 30m', subject: 'Computer Science' },
  { name: 'Calculus Problem Solving', members: 5, timeLeft: '1h 15m', subject: 'Mathematics' },
  { name: 'Physics Lab Discussion', members: 12, timeLeft: '45m', subject: 'Physics' },
  { name: 'Machine Learning Basics', members: 15, timeLeft: '3h 20m', subject: 'Computer Science' },
  { name: 'Web Development Workshop', members: 10, timeLeft: '1h 45m', subject: 'Computer Science' },
  { name: 'Organic Chemistry Review', members: 6, timeLeft: '2h 10m', subject: 'Chemistry' },
];

export default function StudyRoomsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Study Rooms</h1>
          <p className="text-gray-400">Join virtual study rooms to collaborate with other students</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search rooms..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Room
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyRooms.map((room, index) => (
            <React.Fragment key={index}>
              <DashboardCard className="p-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{room.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{room.subject}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span>{room.members} students</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>{room.timeLeft} remaining</span>
                  </div>
                </div>
                
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    Join Room
                  </Button>
                </div>
              </DashboardCard>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}