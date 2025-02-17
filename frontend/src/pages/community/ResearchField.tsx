import React, { useState } from 'react';
import {
  Brain,
  TrendingUp,
  Users,
  GitMerge,
  Search,
  Plus,
  Shield,
  Link,
  MessageCircle,
  Award,
} from 'lucide-react';

const ResearchTopicsPage = () => {
  const researchFields = [
    {
      id: 1,
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI & Machine Learning',
      bgColor: 'bg-purple-600/20',
      textColor: 'text-purple-400',
      trustScore: 96,
      members: 1245,
      topics: 856,
      isVerified: true,
      grants: '5 ICP',
      popularTopics: ['Deep Learning', 'Neural Networks', 'Transformers'],
    },
    {
      id: 2,
      icon: <GitMerge className="w-6 h-6 text-blue-400" />,
      title: 'Blockchain & Web3',
      bgColor: 'bg-blue-600/20',
      textColor: 'text-blue-400',
      trustScore: 94,
      members: 980,
      topics: 645,
      isVerified: true,
      grants: '8 ICP',
      popularTopics: ['DeFi Security', 'Smart Contracts', 'Consensus'],
    },
  ];

  return (
    <div className="flex bg-gray-900 mt-4">
      <div className="flex-1">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto p-6">
          {/* AI-Powered Research Insights */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Trending Research</span>
                </div>
                <p className="text-sm text-gray-400">
                  AI-curated emerging research trends
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Active Researchers</span>
                </div>
                <p className="text-sm text-gray-400">
                  485 researchers online now
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitMerge className="w-5 h-5 text-green-400" />
                  <span className="text-white">Research Opportunities</span>
                </div>
                <p className="text-sm text-gray-400">
                  26 new research proposals
                </p>
              </div>
            </div>
          </div>

          {/* Research Fields Grid */}
          <div className="grid grid-cols-2 gap-6">
            {researchFields.map((field) => (
              <div key={field.id} className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${field.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      {field.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{field.title}</h3>
                      <div className={`text-sm ${field.textColor}`}>
                        Trust Score: {field.trustScore}%
                      </div>
                    </div>
                  </div>
                  <button
                    className={`bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-sm`}
                  >
                    Join Field
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {field.members.toLocaleString()} Members
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {field.topics} Topics
                      </span>
                    </div>
                    {field.isVerified && (
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Verified Field</span>
                      </div>
                    )}
                  </div>

                  {/* Active Research Grants */}
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white">
                        Active Research Grants
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                        {field.grants}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Open bounties for research contributions
                    </p>
                  </div>

                  {/* Popular Topics */}
                  <div className="flex flex-wrap gap-2">
                    {field.popularTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTopicsPage;
