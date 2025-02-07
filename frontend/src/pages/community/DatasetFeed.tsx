import React from 'react';
import {
  LucideBrain,
  LucideCheckCircle,
  LucideDatabase,
  LucideGitBranch,
  LucideMessageCircle,
  LucideEye,
  LucideBookmark,
  LucideAward,
} from 'lucide-react';

export const discussionExample = [
  {
    title: 'Bias Detection in Medical Imaging Dataset',
    tags: ['EDA', 'Verified Dataset'],
    description:
      'Found significant demographic bias in the lung cancer imaging dataset. Initial analysis shows underrepresentation of certain age groups...',
    dataset: 'Medical Imaging v2.0',
    citations: 12,
    insights: 8,
    views: 234,
    time: '3h ago',
    hash: '0x1234...5678',
  },
];
const DiscussionCard = ({
  title,
  tags,
  description,
  dataset,
  citations,
  insights,
  views,
  time,
  hash,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
            <span className="text-purple-400 font-medium">SK</span>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-white font-medium">{title}</h3>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <LucideBrain className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">
                AI Dataset Analysis
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Dataset:</span>
              <span className="text-purple-400 text-sm flex items-center gap-1">
                <LucideDatabase className="w-4 h-4" /> {dataset}
              </span>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <LucideGitBranch className="w-4 h-4" /> {citations} citations
              </span>
            </div>
            <div className="text-sm text-gray-400">Hash: {hash}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <LucideMessageCircle className="w-4 h-4" /> {insights} insights
              </span>
              <span className="flex items-center gap-1">
                <LucideEye className="w-4 h-4" /> {views} views
              </span>
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600">
                Share Insight
              </button>
              <button className="text-gray-400 hover:text-white">
                <LucideBookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BountyFeed = ({ discussions = discussionExample }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {discussions.map((discussion, index) => (
            <DiscussionCard key={index} {...discussion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BountyFeed;
