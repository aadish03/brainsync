import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Code, ExternalLink, Clock } from 'lucide-react';

const recentProjects = [
  { name: 'Todo App React', language: 'React', lastEdited: '2 hours ago', status: 'In Progress' },
  { name: 'Binary Search Tree', language: 'Python', lastEdited: '1 day ago', status: 'Complete' },
  { name: 'REST API Server', language: 'Node.js', lastEdited: '3 days ago', status: 'In Progress' },
];

const languageColors: Record<string, string> = {
  React: 'bg-blue-500',
  Python: 'bg-green-500',
  'Node.js': 'bg-yellow-500',
};

export function CodingWorkspace() {
  return (
    <DashboardCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
          <Code className="h-5 w-5" />
          <span>Coding Workspace</span>
        </h3>
        <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white">
          <ExternalLink className="h-4 w-4 mr-2" />
          Open IDE
        </Button>
      </div>
      
      <div className="space-y-3">
        {recentProjects.map((project, index) => (
          <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${languageColors[project.language]}`}></div>
                <div>
                  <h4 className="font-medium text-white">{project.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{project.language}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{project.lastEdited}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Badge 
                variant={project.status === 'Complete' ? 'default' : 'secondary'}
                className={project.status === 'Complete' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}
              >
                {project.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}