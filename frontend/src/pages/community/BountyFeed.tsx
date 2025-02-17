// types.ts
interface Challenge {
  id: string;
  title: string;
  description: string;
  organization: string;
  sponsorType: string;
  prizePool: number;
  currency: string;
  daysLeft: number;
  requiredSkills: string[];
  aiMatchScore: number;
  participants: number;
  submissions: number;
  icon: 'brain' | 'git-merge' | 'database';
  tags: Array<{
    text: string;
    type: 'featured' | 'prize' | 'status';
  }>;
}

interface Winner {
  id: string;
  name: string;
  challengesWon: number;
  initials: string;
  bgColor: string;
  textColor: string;
}

interface UpcomingDeadline {
  id: string;
  title: string;
  daysLeft: number;
  prizePool: number;
  currency: string;
}

// BountiesPage.tsx
import React from 'react';
import {
  Brain,
  Search,
  Plus,
  Users,
  GitBranch,
  Bookmark,
  Award,
  Wallet,
  Plug,
} from 'lucide-react';

const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'AI Model Bias Detection Challenge',
    description:
      'Build novel approaches to detect and mitigate bias in large language models...',
    organization: 'Harvard AI Ethics Lab',
    sponsorType: 'DAO Sponsored',
    prizePool: 10000,
    currency: 'ICP',
    daysLeft: 14,
    requiredSkills: ['ML Research', 'Ethics', 'LLMs'],
    aiMatchScore: 92,
    participants: 48,
    submissions: 12,
    icon: 'brain',
    tags: [
      { text: 'Featured', type: 'featured' },
      { text: '10,000 ICP', type: 'prize' },
    ],
  },
];

const mockWinners: Winner[] = [
  {
    id: '1',
    name: 'Dr. Robert Johnson',
    challengesWon: 12,
    initials: 'RJ',
    bgColor: 'bg-blue-600/20',
    textColor: 'text-blue-400',
  },
  {
    id: '2',
    name: 'Sarah Kim',
    challengesWon: 8,
    initials: 'SK',
    bgColor: 'bg-purple-600/20',
    textColor: 'text-purple-400',
  },
];

const mockDeadlines: UpcomingDeadline[] = [
  {
    id: '1',
    title: 'AI Ethics Challenge',
    daysLeft: 2,
    prizePool: 5000,
    currency: 'ICP',
  },
  {
    id: '2',
    title: 'Web3 Security Bounty',
    daysLeft: 5,
    prizePool: 8000,
    currency: 'ICP',
  },
];

const ChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => (
  <div className="bg-gray-800 rounded-xl p-6">
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
          <Brain className="w-6 h-6 text-purple-400" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-white font-medium">{challenge.title}</h3>
          {challenge.tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                tag.type === 'featured'
                  ? 'bg-purple-500/20 text-purple-300'
                  : tag.type === 'prize'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-blue-500/20 text-blue-300'
              } px-2 py-0.5 rounded-full text-xs`}
            >
              {tag.text}
            </span>
          ))}
        </div>

        <p className="text-gray-400 mb-4">{challenge.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">
              {challenge.organization}
            </span>
            <span className="text-purple-400 text-sm">
              {challenge.sponsorType}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">
              {challenge.daysLeft} days left
            </span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {challenge.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">
              AI Match: {challenge.aiMatchScore}% compatibility with your
              expertise
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {challenge.participants} participants
            </span>
            <span className="flex items-center gap-1">
              <GitBranch className="w-4 h-4" />
              {challenge.submissions} submissions
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
);

const BountiesPage: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
      <div className="col-span-2 space-y-6">
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            All Challenges
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Open Science
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            AI & ML
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Web3
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Healthcare
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Climate
          </button>
        </div>

        {mockChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      <div className="space-y-6">
        {/* Stats Card */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-white font-medium mb-4">Your Challenge Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Active Participations</span>
              <span className="text-white">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Challenges Won</span>
              <span className="text-white">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Earnings</span>
              <span className="text-green-400">15,000 ICP</span>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">AI Recommended</h3>
            <span className="text-sm text-purple-400">
              Based on your skills
            </span>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-700/30 rounded-lg p-3">
              <div className="text-white text-sm mb-1">
                Quantum ML Challenge
              </div>
              <div className="text-xs text-gray-400">
                95% match with your expertise
              </div>
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-white font-medium mb-4">Top Challenge Winners</h3>
          <div className="space-y-4">
            {mockWinners.map((winner) => (
              <div
                key={winner.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${winner.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <span className={winner.textColor}>{winner.initials}</span>
                  </div>
                  <div>
                    <div className="text-white text-sm">{winner.name}</div>
                    <div className="text-xs text-gray-400">
                      {winner.challengesWon} challenges won
                    </div>
                  </div>
                </div>
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-white font-medium mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {mockDeadlines.map((deadline) => (
              <div key={deadline.id} className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">{deadline.title}</span>
                  <span
                    className={`text-xs ${
                      deadline.daysLeft <= 2
                        ? 'bg-red-500/20 text-red-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    } px-2 py-0.5 rounded-full`}
                  >
                    {deadline.daysLeft} days left
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {deadline.prizePool.toLocaleString()} {deadline.currency}{' '}
                  Prize Pool
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Wallet */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-5 h-5 text-purple-400" />
            <h3 className="text-white font-medium">Connect Wallet</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Connect your Web3 wallet to receive challenge rewards and bounties
          </p>
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2">
            <Plug className="w-4 h-4" />
            Connect ICP Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BountiesPage;
