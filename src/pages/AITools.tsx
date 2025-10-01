import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Youtube, FileText, PenTool, Search, Mic, Sparkles, Brain, Code } from 'lucide-react';

const aiTools = [
  { name: 'YouTube Summarizer', icon: Youtube, description: 'Summarize educational videos', color: 'from-red-500 to-pink-500' },
  { name: 'PDF Summarizer', icon: FileText, description: 'Extract key points from PDFs', color: 'from-blue-500 to-cyan-500' },
  { name: 'Handwritten Notes', icon: PenTool, description: 'Convert handwriting to text', color: 'from-purple-500 to-indigo-500' },
  { name: 'LLM Search', icon: Search, description: 'AI-powered research assistant', color: 'from-green-500 to-emerald-500' },
  { name: 'Oral Test', icon: Mic, description: 'Practice with AI interviewer', color: 'from-orange-500 to-yellow-500' },
  { name: 'Essay Generator', icon: Sparkles, description: 'Generate essay outlines and drafts', color: 'from-violet-500 to-purple-500' },
  { name: 'Concept Explainer', icon: Brain, description: 'Explain complex topics simply', color: 'from-blue-600 to-indigo-600' },
  { name: 'Code Assistant', icon: Code, description: 'Help with programming tasks', color: 'from-green-600 to-teal-600' },
];

export default function AIToolsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">AI Tools</h1>
          <p className="text-gray-400">Enhance your learning with these AI-powered tools</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <React.Fragment key={index}>
                <DashboardCard className="p-6 hover:border-white/20 transition-colors cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${tool.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                    <p className="text-gray-400 mb-4">{tool.description}</p>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      Launch Tool
                    </Button>
                  </div>
                </div>
              </DashboardCard>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}