import { useState } from 'react';
import {
  Bookmark,
  Users,
  Clock,
  Calendar,
  Brain,
  Award,
  ShieldCheck,
} from 'lucide-react';

const CollaborationFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All Requests');

  const filters = [
    'All Requests',
    'Co-Authors',
    'Reviewers',
    'Data Contributors',
    'Funded Projects',
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Collaboration Feed */}
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

          {/* Collaboration Request Card */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-medium">SK</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-medium">
                    Seeking AI Expert for Healthcare ML Project
                  </h3>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs">
                    Co-Author
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-xs">
                    Funded
                  </span>
                </div>

                {/* Requester Info & Project Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">Dr. Sarah Kim</span>
                    <span className="text-purple-400 text-sm">
                      Harvard Medical AI Lab
                    </span>
                    <span className="text-green-400 text-sm flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Trust Score: 95
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-medium">
                      5,000 ICP
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">
                  Looking for an ML expert to collaborate on a novel healthcare
                  AI project. Focus on federated learning and privacy-preserving
                  techniques...
                </p>

                {/* Required Skills */}
                <div className="flex gap-2 mb-4">
                  {['Deep Learning', 'Healthcare AI', 'Privacy'].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                {/* AI Match Score */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">
                      AI Match: 95% compatibility with your expertise
                    </span>
                  </div>
                </div>

                {/* Metrics & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> 12 applicants
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Posted 2d ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> 6 month project
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
                      Apply Now
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
      </div>
    </div>
  );
};

export default CollaborationFeed;
