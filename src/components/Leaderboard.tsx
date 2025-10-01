import { DashboardCard } from './DashboardCard';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Sarah Chen', points: 2840, badge: 'Champion', avatar: 'S' },
  { rank: 2, name: 'Mike Johnson', points: 2720, badge: 'Expert', avatar: 'M' },
  { rank: 3, name: 'You (Alex)', points: 2650, badge: 'Advanced', avatar: 'A', isCurrentUser: true },
  { rank: 4, name: 'Emma Davis', points: 2580, badge: 'Advanced', avatar: 'E' },
  { rank: 5, name: 'Tom Wilson', points: 2450, badge: 'Intermediate', avatar: 'T' },
];

const badgeColors: Record<string, string> = {
  Champion: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Expert: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Intermediate: 'bg-green-500/20 text-green-400 border-green-500/30',
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Trophy className="h-4 w-4 text-yellow-500" />;
    case 2: return <Medal className="h-4 w-4 text-gray-400" />;
    case 3: return <Award className="h-4 w-4 text-orange-500" />;
    default: return <span className="text-gray-400">#{rank}</span>;
  }
};

export function Leaderboard() {
  return (
    <DashboardCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
          <Trophy className="h-5 w-5" />
          <span>Leaderboard</span>
        </h3>
        <div className="flex items-center space-x-1 text-sm text-green-400">
          <TrendingUp className="h-4 w-4" />
          <span>+3 ranks</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <div key={index} className={`p-3 rounded-lg border transition-colors ${
            user.isCurrentUser 
              ? 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6">
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-white">{user.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge className={badgeColors[user.badge]}>
                      {user.badge}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{user.points.toLocaleString()}</div>
                <div className="text-sm text-gray-400">points</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
        <div className="text-center">
          <p className="text-sm text-gray-300">Next milestone: <span className="text-white font-medium">Expert Badge</span></p>
          <p className="text-xs text-gray-400">70 points to go!</p>
        </div>
      </div>
    </DashboardCard>
  );
}