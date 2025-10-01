import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { FolderOpen, Users, Plus } from 'lucide-react';

const teamProjects = [
  { 
    name: 'E-commerce Platform', 
    progress: 65, 
    members: ['A', 'B', 'C'], 
    deadline: '2 weeks',
    priority: 'High'
  },
  { 
    name: 'Mobile Banking App', 
    progress: 40, 
    members: ['D', 'E'], 
    deadline: '1 month',
    priority: 'Medium'
  },
  { 
    name: 'AI Chatbot Integration', 
    progress: 90, 
    members: ['F', 'G', 'H', 'I'], 
    deadline: '3 days',
    priority: 'High'
  },
];

const priorityColors: Record<string, string> = {
  High: 'bg-red-500/20 text-red-400 border-red-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export function Projects() {
  return (
    <DashboardCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
          <FolderOpen className="h-5 w-5" />
          <span>Team Projects</span>
        </h3>
        <Button size="sm" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
      
      <div className="space-y-4">
        {teamProjects.map((project, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h4 className="font-medium text-white">{project.name}</h4>
                <span className={`px-2 py-1 text-xs rounded border ${priorityColors[project.priority]}`}>
                  {project.priority}
                </span>
              </div>
              <span className="text-sm text-gray-400">Due in {project.deadline}</span>
            </div>
            
            <div className="flex items-center justify-between mb-3">
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
              <span className="text-sm text-gray-400">{project.progress}%</span>
            </div>
            
            <Progress value={project.progress} className="h-2" />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}