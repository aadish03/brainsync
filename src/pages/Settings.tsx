import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import {
  User,
  Bell,
  Palette,
  Shield,
  Globe,
  HelpCircle,
  LogOut,
  Save,
  Upload,
  Moon,
  Sun,
  Volume2,
  Volume1,
  VolumeX,
  Check,
  Lock,
  Mail,
  Phone,
  Key
} from 'lucide-react';

type SettingsTab = 'profile' | 'notifications' | 'appearance' | 'privacy' | 'language' | 'help';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundVolume, setSoundVolume] = useState(70);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Computer Science student passionate about AI and machine learning. Looking to collaborate on interesting projects.',
    university: 'Tech University',
    major: 'Computer Science',
    year: 'Junior'
  });
  
  // Handle profile form changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the settings to a backend
    alert('Settings saved successfully!');
  };
  
  // Toggle switch component
  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean, onChange: () => void }) => (
    <div 
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-green-500' : 'bg-gray-600'}`}
      onClick={onChange}
    >
      <span 
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} 
      />
    </div>
  );
  
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account preferences and configuration</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Settings Navigation */}
          <div className="lg:w-64">
            <DashboardCard className="p-0 overflow-hidden sticky top-6">
              <nav>
                <ul>
                  {[
                    { id: 'profile', label: 'Profile', icon: User },
                    { id: 'notifications', label: 'Notifications', icon: Bell },
                    { id: 'appearance', label: 'Appearance', icon: Palette },
                    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
                    { id: 'language', label: 'Language & Region', icon: Globe },
                    { id: 'help', label: 'Help & Support', icon: HelpCircle },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveTab(item.id as SettingsTab)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${isActive 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border-l-2 border-blue-500' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                  
                  <li>
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </DashboardCard>
          </div>
          
          {/* Settings Content */}
          <div className="flex-1">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <DashboardCard className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
                  
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-24 w-24 border-2 border-blue-500">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl">
                          A
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-white">Alex Johnson</h3>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          Advanced
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">University</p>
                          <p className="text-white">Tech University</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Major</p>
                          <p className="text-white">Computer Science</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Year</p>
                          <p className="text-white">Junior</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Member Since</p>
                          <p className="text-white">September 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={profileData.name}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">University</label>
                        <input
                          type="text"
                          name="university"
                          value={profileData.university}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Major</label>
                        <input
                          type="text"
                          name="major"
                          value={profileData.major}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Year</label>
                        <select
                          name="year"
                          value={profileData.year}
                          onChange={(e) => handleProfileChange(e as any)}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="Freshman">Freshman</option>
                          <option value="Sophomore">Sophomore</option>
                          <option value="Junior">Junior</option>
                          <option value="Senior">Senior</option>
                          <option value="Graduate">Graduate</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleProfileChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </DashboardCard>
                
                <DashboardCard className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Change Password</h2>
                  
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Check className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        Update Password
                      </Button>
                    </div>
                  </form>
                </DashboardCard>
              </div>
            )}
            
            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <DashboardCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive updates and alerts via email</p>
                    </div>
                    <ToggleSwitch enabled={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Push Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive notifications on your device</p>
                    </div>
                    <ToggleSwitch enabled={pushNotifications} onChange={() => setPushNotifications(!pushNotifications)} />
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Sound Effects</h3>
                      <p className="text-gray-400 text-sm">Play sounds for notifications and actions</p>
                    </div>
                    <ToggleSwitch enabled={soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)} />
                  </div>
                  
                  {soundEnabled && (
                    <div className="pl-6 border-l-2 border-blue-500/30">
                      <h3 className="text-white font-medium mb-2">Sound Volume</h3>
                      <div className="flex items-center space-x-4">
                        <VolumeX className="h-5 w-5 text-gray-400" />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={soundVolume}
                          onChange={(e) => setSoundVolume(parseInt(e.target.value))}
                          className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                        />
                        <Volume2 className="h-5 w-5 text-gray-400" />
                        <span className="text-white w-8 text-right">{soundVolume}%</span>
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-medium text-white mt-8 mb-4">Notification Categories</h3>
                  
                  {[
                    { id: 'deadlines', label: 'Assignment Deadlines', description: 'Get notified about upcoming deadlines' },
                    { id: 'grades', label: 'Grade Updates', description: 'Get notified when new grades are posted' },
                    { id: 'events', label: 'Event Reminders', description: 'Get reminders about events you registered for' },
                    { id: 'messages', label: 'New Messages', description: 'Get notified when you receive new messages' },
                    { id: 'announcements', label: 'Course Announcements', description: 'Get notified about course announcements' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <h3 className="text-white font-medium">{item.label}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <ToggleSwitch enabled={true} onChange={() => {}} />
                    </div>
                  ))}
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            )}
            
            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <DashboardCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Appearance Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Dark Mode</h3>
                      <p className="text-gray-400 text-sm">Use dark theme across the application</p>
                    </div>
                    <ToggleSwitch enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-4">Theme Color</h3>
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { color: 'from-blue-500 to-purple-600', label: 'Default' },
                        { color: 'from-green-500 to-teal-500', label: 'Emerald' },
                        { color: 'from-red-500 to-orange-500', label: 'Ruby' },
                        { color: 'from-yellow-500 to-amber-500', label: 'Amber' },
                        { color: 'from-purple-500 to-pink-500', label: 'Amethyst' },
                      ].map((theme, index) => (
                        <button
                          key={index}
                          className={`p-4 rounded-lg bg-gradient-to-r ${theme.color} flex flex-col items-center justify-center h-20 ${index === 0 ? 'ring-2 ring-white' : ''}`}
                        >
                          <span className="text-white text-xs mt-2">{theme.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-4">Font Size</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">A</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={70}
                        className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                      />
                      <span className="text-lg text-gray-400">A</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            )}
            
            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <DashboardCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Privacy & Security</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                      <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                      Enable
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Profile Visibility</h3>
                      <p className="text-gray-400 text-sm">Control who can see your profile information</p>
                    </div>
                    <select className="bg-white/5 border border-white/10 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Everyone</option>
                      <option>Only Friends</option>
                      <option>Private</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Activity Status</h3>
                      <p className="text-gray-400 text-sm">Show when you're active on the platform</p>
                    </div>
                    <ToggleSwitch enabled={true} onChange={() => {}} />
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-medium">Data Collection</h3>
                      <p className="text-gray-400 text-sm">Allow anonymous usage data collection to improve the platform</p>
                    </div>
                    <ToggleSwitch enabled={false} onChange={() => {}} />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Connected Accounts</h3>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Google', connected: true },
                        { name: 'GitHub', connected: true },
                        { name: 'LinkedIn', connected: false },
                      ].map((account) => (
                        <div key={account.name} className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                              {account.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{account.name}</h4>
                              <p className="text-sm text-gray-400">
                                {account.connected ? 'Connected' : 'Not connected'}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                            {account.connected ? 'Disconnect' : 'Connect'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Settings
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            )}
            
            {/* Language Settings */}
            {activeTab === 'language' && (
              <DashboardCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Language & Region</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Language</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese (Simplified)</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Time Zone</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Pacific Time (US & Canada)</option>
                      <option>Mountain Time (US & Canada)</option>
                      <option>Central Time (US & Canada)</option>
                      <option>Eastern Time (US & Canada)</option>
                      <option>UTC</option>
                      <option>Central European Time</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Date Format</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Time Format</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="timeFormat" className="text-blue-500" checked />
                        <span className="text-white">12-hour (AM/PM)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="timeFormat" className="text-blue-500" />
                        <span className="text-white">24-hour</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            )}
            
            {/* Help & Support */}
            {activeTab === 'help' && (
              <DashboardCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Help & Support</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      {[
                        { question: 'How do I reset my password?', answer: 'You can reset your password by going to the login page and clicking on "Forgot Password".' },
                        { question: 'How do I join a study room?', answer: 'Navigate to the Study Rooms page, browse available rooms, and click the "Join Room" button.' },
                        { question: 'How are points calculated on the leaderboard?', answer: 'Points are earned by completing courses, quizzes, and participating in study rooms and events.' },
                      ].map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-lg p-3">
                          <h4 className="text-white font-medium mb-1">{faq.question}</h4>
                          <p className="text-gray-400 text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Contact Support</h3>
                    <p className="text-gray-400 mb-4">Need help with something not covered in the FAQs? Contact our support team.</p>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Technical Issue</option>
                            <option>Account Problem</option>
                            <option>Billing Question</option>
                            <option>Feature Request</option>
                            <option>Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                          <textarea
                            rows={4}
                            placeholder="Describe your issue in detail..."
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        Submit Request
                      </Button>
                    </form>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Documentation & Resources</h3>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                        <span>User Guide</span>
                      </a>
                      <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                        <span>Video Tutorials</span>
                      </a>
                      <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                        <span>API Documentation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}