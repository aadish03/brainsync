import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Trophy, Medal, Award, TrendingUp, Search, ArrowUpDown, Users, Star, Clock, Target } from 'lucide-react';

// Extended leaderboard data with more statistics
const leaderboardData = [
  { 
    rank: 1, 
    name: 'Sarah Chen', 
    points: 2840, 
    badge: 'Champion', 
    avatar: 'S',
    completedCourses: 15,
    streak: 42,
    achievements: 28,
    lastActive: '2 hours ago',
    progress: 92
  },
  { 
    rank: 2, 
    name: 'Mike Johnson', 
    points: 2720, 
    badge: 'Expert', 
    avatar: 'M',
    completedCourses: 12,
    streak: 30,
    achievements: 24,
    lastActive: '5 hours ago',
    progress: 85
  },
  { 
    rank: 3, 
    name: 'You (Alex)', 
    points: 2650, 
    badge: 'Advanced', 
    avatar: 'A', 
    isCurrentUser: true,
    completedCourses: 11,
    streak: 28,
    achievements: 22,
    lastActive: 'Just now',
    progress: 78
  },
  { 
    rank: 4, 
    name: 'Emma Davis', 
    points: 2580, 
    badge: 'Advanced', 
    avatar: 'E',
    completedCourses: 10,
    streak: 21,
    achievements: 20,
    lastActive: '1 day ago',
    progress: 75
  },
  { 
    rank: 5, 
    name: 'Tom Wilson', 
    points: 2450, 
    badge: 'Intermediate', 
    avatar: 'T',
    completedCourses: 9,
    streak: 14,
    achievements: 18,
    lastActive: '3 hours ago',
    progress: 68
  },
  { 
    rank: 6, 
    name: 'Lisa Rodriguez', 
    points: 2380, 
    badge: 'Intermediate', 
    avatar: 'L',
    completedCourses: 8,
    streak: 10,
    achievements: 15,
    lastActive: '6 hours ago',
    progress: 65
  },
  { 
    rank: 7, 
    name: 'David Kim', 
    points: 2310, 
    badge: 'Intermediate', 
    avatar: 'D',
    completedCourses: 8,
    streak: 7,
    achievements: 14,
    lastActive: '2 days ago',
    progress: 62
  },
  { 
    rank: 8, 
    name: 'Sophia Patel', 
    points: 2240, 
    badge: 'Intermediate', 
    avatar: 'S',
    completedCourses: 7,
    streak: 5,
    achievements: 12,
    lastActive: '1 day ago',
    progress: 58
  },
  { 
    rank: 9, 
    name: 'James Lee', 
    points: 2180, 
    badge: 'Beginner', 
    avatar: 'J',
    completedCourses: 6,
    streak: 3,
    achievements: 10,
    lastActive: '4 hours ago',
    progress: 52
  },
  { 
    rank: 10, 
    name: 'Olivia Martinez', 
    points: 2050, 
    badge: 'Beginner', 
    avatar: 'O',
    completedCourses: 5,
    streak: 2,
    achievements: 8,
    lastActive: '12 hours ago',
    progress: 48
  },
];

const badgeColors: Record<string, string> = {
  Champion: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Expert: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Intermediate: 'bg-green-500/20 text-green-400 border-green-500/30',
  Beginner: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Trophy className="h-4 w-4 text-yellow-500" />;
    case 2: return <Medal className="h-4 w-4 text-gray-400" />;
    case 3: return <Award className="h-4 w-4 text-orange-500" />;
    default: return <span className="text-gray-400">#{rank}</span>;
  }
};

type SortField = 'rank' | 'points' | 'achievements' | 'streak' | 'completedCourses';

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [expandedUser, setExpandedUser] = useState<number | null>(3); // Default to current user expanded
  
  // Filter and sort leaderboard data
  const filteredAndSortedData = [...leaderboardData]
    .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  
  // Toggle sort direction or change sort field
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc'); // Default to descending for new sort field
    }
  };
  
  // Toggle user details expansion
  const toggleUserDetails = (rank: number) => {
    setExpandedUser(expandedUser === rank ? null : rank);
  };
  
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-gray-400">Track your progress and compete with other students</p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSort('rank')}
            >
              Rank
              <ArrowUpDown className="h-3 w-3 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSort('points')}
            >
              Points
              <ArrowUpDown className="h-3 w-3 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSort('achievements')}
            >
              Achievements
              <ArrowUpDown className="h-3 w-3 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSort('streak')}
            >
              Streak
              <ArrowUpDown className="h-3 w-3 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Current User Stats Card */}
        <DashboardCard className="p-6 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-blue-500">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl">
                  A
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h2 className="text-xl font-bold text-white">Your Stats</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={badgeColors['Advanced']}>
                    Advanced
                  </Badge>
                  <span className="text-gray-300">Rank #3</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="bg-white/10 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Points</p>
                <p className="text-xl font-bold text-white">2,650</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Streak</p>
                <p className="text-xl font-bold text-white">28 days</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Achievements</p>
                <p className="text-xl font-bold text-white">22</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Progress</p>
                <div className="mt-1 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
                    style={{ width: '78%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
        
        {/* Leaderboard Table */}
        <DashboardCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">Achievements</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">Streak</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">Progress</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredAndSortedData.map((user) => (
                  <React.Fragment key={user.rank}>
                    <tr 
                      className={`${user.isCurrentUser ? 'bg-blue-500/10' : 'hover:bg-white/5'} cursor-pointer transition-colors`}
                      onClick={() => toggleUserDetails(user.rank)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                          {getRankIcon(user.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                              {user.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-white">{user.name}</div>
                            <Badge className={badgeColors[user.badge]}>
                              {user.badge}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">
                        {user.points.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 hidden md:table-cell">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{user.achievements}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 hidden md:table-cell">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span>{user.streak} days</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 hidden lg:table-cell">
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
                            style={{ width: `${user.progress}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-gray-400 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleUserDetails(user.rank);
                          }}
                        >
                          {expandedUser === user.rank ? 'Hide' : 'View'}
                        </Button>
                      </td>
                    </tr>
                    
                    {/* Expanded User Details */}
                    {expandedUser === user.rank && (
                      <tr className="bg-white/5 animate-fadeIn">
                        <td colSpan={7} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium text-gray-400">Completed Courses</h4>
                              <div className="flex items-center space-x-2">
                                <div className="p-2 rounded-lg bg-white/10">
                                  <Target className="h-5 w-5 text-blue-400" />
                                </div>
                                <span className="text-lg font-medium text-white">{user.completedCourses}</span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium text-gray-400">Last Active</h4>
                              <div className="flex items-center space-x-2">
                                <div className="p-2 rounded-lg bg-white/10">
                                  <Clock className="h-5 w-5 text-green-400" />
                                </div>
                                <span className="text-lg font-medium text-white">{user.lastActive}</span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium text-gray-400">Next Milestone</h4>
                              <div className="flex items-center space-x-2">
                                <div className="p-2 rounded-lg bg-white/10">
                                  <Trophy className="h-5 w-5 text-yellow-400" />
                                </div>
                                <span className="text-lg font-medium text-white">
                                  {user.badge === 'Champion' ? 'Max Level Reached' : `${user.badge === 'Beginner' ? 'Intermediate' : user.badge === 'Intermediate' ? 'Advanced' : user.badge === 'Advanced' ? 'Expert' : 'Champion'} Badge`}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {user.isCurrentUser && (
                            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
                              <div className="text-center">
                                <p className="text-sm text-gray-300">You're only <span className="text-white font-medium">70 points</span> away from reaching <span className="text-white font-medium">Expert Badge</span>!</p>
                                <Button className="mt-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                                  Complete Daily Challenge
                                </Button>
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
    </main>
  );
}