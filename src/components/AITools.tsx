import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Youtube, FileText, PenTool, Search, Mic } from 'lucide-react';

const aiTools = [
  { name: 'YouTube Summarizer', icon: Youtube, description: 'Summarize educational videos', color: 'from-red-500 to-pink-500' },
  { name: 'PDF Summarizer', icon: FileText, description: 'Extract key points from PDFs', color: 'from-blue-500 to-cyan-500' },
  { name: 'Handwritten Notes', icon: PenTool, description: 'Convert handwriting to text', color: 'from-purple-500 to-indigo-500' },
  { name: 'LLM Search', icon: Search, description: 'AI-powered research assistant', color: 'from-green-500 to-emerald-500' },
  { name: 'Oral Test', icon: Mic, description: 'Practice with AI interviewer', color: 'from-orange-500 to-yellow-500' },
];

export function AITools() {
  return (
    <DashboardCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">AI Tools</h3>
      
      <div className="grid grid-cols-1 gap-3">
        {aiTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-4 justify-start space-x-3 hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${tool.color}`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <div className="font-medium text-white">{tool.name}</div>
                <div className="text-sm text-gray-400">{tool.description}</div>
              </div>
            </Button>
          );
        })}
      </div>
    </DashboardCard>
  );
}