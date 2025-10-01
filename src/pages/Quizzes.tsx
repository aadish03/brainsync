import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Brain, Play, TrendingUp, Clock, Award, Filter } from 'lucide-react';

const quizCategories = ['All', 'Programming', 'Mathematics', 'Science', 'Language'];

const quizData = [
  { subject: 'JavaScript Fundamentals', category: 'Programming', progress: 75, score: '18/24', questions: 24, timeEstimate: '30 min' },
  { subject: 'Data Structures', category: 'Programming', progress: 60, score: '12/20', questions: 20, timeEstimate: '25 min' },
  { subject: 'Database Design', category: 'Programming', progress: 90, score: '27/30', questions: 30, timeEstimate: '40 min' },
  { subject: 'Calculus I', category: 'Mathematics', progress: 80, score: '16/20', questions: 20, timeEstimate: '35 min' },
  { subject: 'Physics Mechanics', category: 'Science', progress: 65, score: '13/20', questions: 20, timeEstimate: '30 min' },
  { subject: 'English Grammar', category: 'Language', progress: 85, score: '17/20', questions: 20, timeEstimate: '25 min' },
];

export default function QuizzesPage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Quizzes</h1>
          <p className="text-gray-400">Test your knowledge with interactive quizzes</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {quizCategories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "border-white/20 text-white hover:bg-white/10"}
              >
                {category}
              </Button>
            ))}
          </div>
          <Button className="border-white/20 text-white hover:bg-white/10">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizData.map((quiz, index) => (
            <React.Fragment key={index}>
              <DashboardCard className="p-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{quiz.subject}</h3>
                  <span className="text-sm px-2 py-1 rounded-full bg-white/10 text-gray-300">{quiz.category}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Progress value={quiz.progress} className="flex-1" />
                  <span className="text-sm text-gray-400">{quiz.progress}%</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Award className="h-4 w-4" />
                    <span>Score: {quiz.score}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{quiz.timeEstimate}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Play className="h-4 w-4 mr-2" />
                  Start Quiz
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