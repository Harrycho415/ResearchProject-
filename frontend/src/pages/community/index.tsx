import React, { useState } from 'react';
import ResearchTopicsPage from './ResearchField';
import { Plus, Search, Brain } from 'lucide-react';
import DiscussionFeed from './GeneralDiscussionFeed';
import DatasetFeed from './DatasetFeed';
import BountiesPage from './BountyFeed';
import ResearchFeed from './ResearchFeed';
import CollaborationFeed from './CollaborationFeed';
import SupportFeed from './SupportFeed';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('Research Topics');
  console.log(activeCategory);
  const categories = [
    'General',
    'Research Topics',
    'Datasets',
    'Bounties',
    'Papers',
    'Collaboration',
    'Technical Support',
  ];

  // 각 카테고리에 따른 버튼 텍스트 매핑
  const buttonTitles: Record<string, string> = {
    General: 'Start a Discussion',
    'Research Topics': 'New Research Topic',
    Datasets: 'Upload Dataset',
    Bounties: 'Post a Bounty',
    Papers: 'Submit a Paper',
    Collaboration: 'Find Collaborators',
    'Technical Support': 'Ask for Help',
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex min-h-screen">
        <div className="flex-1">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl text-white font-semibold">Community</h1>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span>{buttonTitles[activeCategory] || 'New Action'}</span>
                </button>
              </div>

              {/* AI-Powered Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search research topics or ask a research question..."
                  className="w-full bg-white/10 text-white rounded-lg pl-12 pr-32 py-3 placeholder-white/50 focus:outline-none"
                />
                <Search className="w-5 h-5 absolute left-4 top-3.5 text-white/50" />
                <div className="absolute right-3 top-2 flex gap-2">
                  <button className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-md text-sm flex items-center gap-1">
                    <Brain className="w-4 h-4" />
                    AI Assist
                  </button>
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex gap-4 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-6xl mx-auto p-6">
            <div className="w-full">
              {activeCategory === 'General' && <DiscussionFeed />}
              {activeCategory === 'Research Topics' && <ResearchTopicsPage />}
              {activeCategory === 'Datasets' && <DatasetFeed />}
              {activeCategory === 'Bounties' && <BountiesPage />}
              {activeCategory === 'Papers' && <ResearchFeed />}
              {activeCategory === 'Collaboration' && <CollaborationFeed />}
              {activeCategory === 'Technical Support' && <SupportFeed />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
