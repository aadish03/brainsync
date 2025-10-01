import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Users, Clock, Plus } from 'lucide-react';

const recentRooms = [
  { name: 'Data Structures Study', members: 8, timeLeft: '2h 30m', subject: 'Computer Science' },
  { name: 'Calculus Problem Solving', members: 5, timeLeft: '1h 15m', subject: 'Mathematics' },
  { name: 'Physics Lab Discussion', members: 12, timeLeft: '45m', subject: 'Physics' },
];

export function StudyRooms() {
  return (
    <DashboardCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Study Rooms</h3>
        <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Room
        </Button>
      </div>
      
      <div className="space-y-3">
        {recentRooms.map((room, index) => (
          <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-white">{room.name}</h4>
                <p className="text-sm text-gray-400">{room.subject}</p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{room.members}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{room.timeLeft}</span>
                </div>
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Join
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}