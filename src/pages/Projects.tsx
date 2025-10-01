import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Search, Filter, Plus, Calendar, Users } from 'lucide-react';

const teamProjects = [
  { 
    name: 'E-commerce Platform', 
    progress: 65, 
    members: ['A', 'B', 'C'], 
    deadline: '2 weeks',
    priority: 'High',
    description: 'Building a full-featured e-commerce platform with user authentication and payment processing'
  },
  { 
    name: 'Mobile Banking App', 
    progress: 40, 
    members: ['D', 'E'], 
    deadline: '1 month',
    priority: 'Medium',
    description: 'Developing a secure mobile banking application with transaction history and bill payments'
  },
  { 
    name: 'AI Chatbot Integration', 
    progress: 90, 
    members: ['F', 'G', 'H', 'I'], 
    deadline: '3 days',
    priority: 'High',
    description: 'Integrating an AI-powered chatbot for customer support with natural language processing'
  },
  { 
    name: 'Learning Management System', 
    progress: 25, 
    members: ['J', 'K', 'L'], 
    deadline: '3 weeks',
    priority: 'Medium',
    description: 'Creating an online learning platform with course management and student progress tracking'
  },
  { 
    name: 'Social Media Dashboard', 
    progress: 80, 
    members: ['M', 'N'], 
    deadline: '1 week',
    priority: 'Low',
    description: 'Building a dashboard to monitor and analyze social media engagement across platforms'
  },
  { 
    name: 'Inventory Management System', 
    progress: 55, 
    members: ['O', 'P', 'Q', 'R'], 
    deadline: '2 weeks',
    priority: 'High',
    description: 'Developing a system to track inventory levels, orders, and supplier information'
  },
];

const priorityColors: Record<string, string> = {
  High: 'bg-red-500/20 text-red-400 border-red-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Team Projects</h1>
          <p className="text-gray-400">Collaborate with your team on group projects</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-3">
            <Button className="border-white/20 text-white hover:bg-white/10">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamProjects.map((project, index) => (
            <React.Fragment key={index}>
              <DashboardCard className="p-6 hover:border-white/20 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{project.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded border ${priorityColors[project.priority]}`}>
                    {project.priority}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Due in {project.deadline}</span>
                  </div>
                  <span className="text-sm text-gray-400">{project.progress}%</span>
                </div>
                
                <Progress value={project.progress} className="h-2 mb-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <div className="flex -space-x-2">
                      {project.members.map((member, memberIndex) => (
                        <Avatar key={memberIndex} className="h-6 w-6 border-2 border-gray-700">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                            {member}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </DashboardCard>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}