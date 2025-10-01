import { DashboardCard } from './DashboardCard';
import { Activity, Clock, CheckCircle, FileText, Users, Code } from 'lucide-react';

const activities = [
  { 
    icon: CheckCircle, 
    action: 'Completed quiz', 
    subject: 'JavaScript Fundamentals', 
    time: '2 hours ago',
    color: 'text-green-400'
  },
  { 
    icon: Code, 
    action: 'Pushed code to', 
    subject: 'React Todo App', 
    time: '4 hours ago',
    color: 'text-blue-400'
  },
  { 
    icon: Users, 
    action: 'Joined study room', 
    subject: 'Data Structures Discussion', 
    time: '6 hours ago',
    color: 'text-purple-400'
  },
  { 
    icon: FileText, 
    action: 'Summarized document', 
    subject: 'Machine Learning Basics.pdf', 
    time: '1 day ago',
    color: 'text-orange-400'
  },
  { 
    icon: CheckCircle, 
    action: 'Completed assignment', 
    subject: 'Database Design Project', 
    time: '2 days ago',
    color: 'text-green-400'
  },
];

export function RecentActivity() {
  return (
    <DashboardCard className="p-6">
      <h3 className="text-lg font-semibold text-white flex items-center space-x-2 mb-4">
        <Activity className="h-5 w-5" />
        <span>Recent Activity</span>
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-white/5 ${activity.color}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-white">
                  <span className="text-gray-300">{activity.action}</span>
                  <span className="font-medium"> {activity.subject}</span>
                </p>
                <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
          View all activity
        </button>
      </div>
    </DashboardCard>
  );
}