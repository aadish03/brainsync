import { Search, Bell, User } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export function TopBar() {
  return (
    <div className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-xl font-semibold text-white">BrainSync</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search courses, projects, tools..." 
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-gray-400 focus:bg-white/20"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}