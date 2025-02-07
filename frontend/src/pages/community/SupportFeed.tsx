import { useState } from 'react';
import {
  Bookmark,
  Eye,
  MessageCircle,
  Clock,
  Brain,
  ShieldCheck,
  Copy,
} from 'lucide-react';

const SupportFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All Issues');

  const filters = [
    'All Issues',
    'API & SDK',
    'Smart Contracts',
    'Infrastructure',
    'Security',
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Support Feed */}
        <div className="col-span-2 space-y-6">
          {/* Category Filters */}
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

          {/* Technical Issue Card */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-medium">RJ</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-medium">
                    ICP Smart Contract Gas Optimization
                  </h3>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">
                    Smart Contract
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Open
                  </span>
                </div>

                <p className="text-gray-400 mb-4">
                  Having issues with high gas fees in my research data storage
                  contract. Looking for optimization suggestions...
                </p>

                {/* Code Snippet */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm text-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500">contract.sol</span>
                    <button className="text-gray-500 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre>
                    <code>
                      {`function storeResearchData(bytes32[] memory data) public {
  for(uint i = 0; i < data.length; i++) {
    researchData[msg.sender].push(data[i]);
  }
}`}
                    </code>
                  </pre>
                </div>

                {/* AI Analysis */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">AI Analysis</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Detected inefficient storage pattern. Recommended: 1) Use
                    batch storage, 2) Implement gas optimization pattern, 3)
                    Consider using mapping instead of array.
                  </p>
                </div>

                {/* Tags and Bounty */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {['Solidity', 'Gas Optimization', 'Research Data'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <span className="text-purple-400 font-medium">
                    500 ICP Bounty
                  </span>
                </div>

                {/* Metrics and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" /> 3 answers
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> 156 views
                    </span>
                    <span>Posted 1h ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
                      Submit Solution
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

export default SupportFeed;
