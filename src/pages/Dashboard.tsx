import { WelcomeBanner } from '../components/WelcomeBanner';
import { StudyRooms } from '../components/StudyRooms';
import { AITools } from '../components/AITools';
import { Quizzes } from '../components/Quizzes';
import { CodingWorkspace } from '../components/CodingWorkspace';
import { Projects } from '../components/Projects';
import { Events } from '../components/Events';
import { Leaderboard } from '../components/Leaderboard';
import { RecentActivity } from '../components/RecentActivity';

export default function Dashboard() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Banner - Full Width */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <WelcomeBanner />
          </div>
          
          {/* First Row */}
          <div className="col-span-12 lg:col-span-8">
            <StudyRooms />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <AITools />
          </div>
          
          {/* Second Row */}
          <div className="col-span-12 lg:col-span-4">
            <Quizzes />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <CodingWorkspace />
          </div>
          
          {/* Third Row */}
          <div className="col-span-12 lg:col-span-6">
            <Projects />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Events />
          </div>
          
          {/* Fourth Row */}
          <div className="col-span-12 lg:col-span-5">
            <Leaderboard />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RecentActivity />
          </div>
        </div>
      </div>
    </main>
  );
}