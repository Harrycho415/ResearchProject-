import { useState } from 'react';
import {
  Bookmark,
  CheckCircle,
  Eye,
  GitBranch,
  MessageSquare,
  Star,
  Brain,
  Award,
} from 'lucide-react';

const ResearchFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All Papers');

  const filters = [
    'All Papers',
    'Latest',
    'Most Cited',
    'Under Review',
    'Verified',
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Papers Feed */}
        <div className="col-span-2 space-y-6">
          {/* Filter Options */}
          <div className="flex gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg ${activeFilter === filter ? 'bg-purple-500 text-white' : 'bg-gray-800 text-white'}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Research Paper Card */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 font-medium">SK</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-medium">
                    Federated Learning in Healthcare: A Privacy-Preserving
                    Approach
                  </h3>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs">
                    AI & ML
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Blockchain Verified
                  </span>
                </div>

                {/* Author Info & Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">Dr. Sarah Kim</span>
                    <span className="text-purple-400 text-sm">
                      Harvard Medical AI Lab
                    </span>
                    <span className="text-green-400 text-sm flex items-center gap-1">
                      <Star className="w-4 h-4" /> Trust Score: 95
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>DOI: 10.1234/abc</span>
                    <span>Published: 2d ago</span>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">AI Summary</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Novel approach to federated learning in healthcare settings.
                    Key findings: 1) 15% improvement in model accuracy, 2)
                    Enhanced privacy preservation using differential privacy, 3)
                    Reduced data leakage risk by 40%.
                  </p>
                </div>

                {/* Metrics & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> 2.3k views
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" /> 12 reviews
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" /> 8 citations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
                      Review Paper
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Research Stats */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">Research Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Papers</span>
                <span className="text-white">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Citations</span>
                <span className="text-white">1,245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Reviews Given</span>
                <span className="text-white">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchFeed;
