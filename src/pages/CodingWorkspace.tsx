import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Code, ExternalLink, Clock, Plus, Search, Filter } from 'lucide-react';

const recentProjects = [
  { name: 'Todo App React', language: 'React', lastEdited: '2 hours ago', status: 'In Progress' },
  { name: 'Binary Search Tree', language: 'Python', lastEdited: '1 day ago', status: 'Complete' },
  { name: 'REST API Server', language: 'Node.js', lastEdited: '3 days ago', status: 'In Progress' },
  { name: 'E-commerce Frontend', language: 'React', lastEdited: '5 days ago', status: 'Complete' },
  { name: 'Machine Learning Model', language: 'Python', lastEdited: '1 week ago', status: 'In Progress' },
  { name: 'Mobile App UI', language: 'React Native', lastEdited: '2 weeks ago', status: 'Complete' },
];

const languageColors: Record<string, string> = {
  React: 'bg-blue-500',
  Python: 'bg-green-500',
  'Node.js': 'bg-yellow-500',
  'React Native': 'bg-purple-500',
};

export default function CodingWorkspacePage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Coding Workspace</h1>
          <p className="text-gray-400">Manage and access your coding projects</p>
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
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project, index) => (
            <React.Fragment key={index}>
              <DashboardCard className="p-6 hover:border-white/20 transition-colors cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${languageColors[project.language]}`}></div>
                    <h3 className="font-semibold text-white">{project.name}</h3>
                  </div>
                  <Badge 
                    variant={project.status === 'Complete' ? 'default' : 'secondary'}
                    className={project.status === 'Complete' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                  <span>{project.language}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{project.lastEdited}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Project
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