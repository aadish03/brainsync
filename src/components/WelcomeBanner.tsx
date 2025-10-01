import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Plus, BookOpen, Users, Brain } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <DashboardCard className="col-span-full p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Alex! 🚀</h1>
          <p className="text-gray-300">Ready to continue your learning journey?</p>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Study Session</span>
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Browse Courses</span>
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 space-x-2">
            <Users className="h-4 w-4" />
            <span>Join Study Room</span>
          </Button>
        </div>
      </div>
    </DashboardCard>
  );
}