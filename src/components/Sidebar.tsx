import { 
  LayoutDashboard, 
  Users, 
  Bot, 
  Brain, 
  Code, 
  FolderOpen, 
  Calendar, 
  Trophy, 
  Settings 
} from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Study Rooms', path: '/study-rooms' },
  { icon: Bot, label: 'AI Tools', path: '/ai-tools' },
  { icon: Brain, label: 'Quizzes', path: '/quizzes' },
  { icon: Code, label: 'Coding', path: '/coding' },
  { icon: FolderOpen, label: 'Projects', path: '/projects' },
  { icon: Calendar, label: 'Events', path: '/events' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-black/30 backdrop-blur-xl border-r border-white/10 p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link to={item.path} key={item.label} className="block">
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start space-x-3 h-12 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}