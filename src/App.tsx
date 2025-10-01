import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import StudyRoomsPage from './pages/StudyRooms';
import AIToolsPage from './pages/AITools';
import QuizzesPage from './pages/Quizzes';
import CodingWorkspacePage from './pages/CodingWorkspace';
import ProjectsPage from './pages/Projects';
import EventsPage from './pages/Events';
import LeaderboardPage from './pages/Leaderboard';
import SettingsPage from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 dark">
        <TopBar />
        
        <div className="flex">
          <Sidebar />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/study-rooms" element={<StudyRoomsPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/coding" element={<CodingWorkspacePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}