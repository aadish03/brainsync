import { DashboardCard } from './DashboardCard';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Brain, Play, TrendingUp } from 'lucide-react';

const quizData = [
  { subject: 'JavaScript Fundamentals', progress: 75, score: '18/24' },
  { subject: 'Data Structures', progress: 60, score: '12/20' },
  { subject: 'Database Design', progress: 90, score: '27/30' },
];

export function Quizzes() {
  return (
    <DashboardCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
          <Brain className="h-5 w-5" />
          <span>Quizzes</span>
        </h3>
        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
          <Play className="h-4 w-4 mr-2" />
          Start New
        </Button>
      </div>
      
      <div className="space-y-4">
        {quizData.map((quiz, index) => (
          <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white">{quiz.subject}</h4>
              <span className="text-sm text-gray-400">{quiz.score}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={quiz.progress} className="flex-1" />
              <span className="text-sm text-gray-400">{quiz.progress}%</span>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Weekly Progress</h4>
              <p className="text-sm text-gray-300">+15% improvement</p>
            </div>
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}