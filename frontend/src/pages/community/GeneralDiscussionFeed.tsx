import React, { useState } from 'react';
import { LucideShieldCheck, LucideLink, LucideBrain } from 'lucide-react';

const DiscussionCard = ({
  author,
  trustScore,
  topic,
  tags,
  lab,
  replies,
  views,
  time,
  summary,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
            <span className="text-purple-400 font-medium">{author[0]}</span>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-white font-medium">{topic}</h3>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-gray-400 mb-4">Exploring related topics...</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <LucideShieldCheck className="w-4 h-4 text-green-400" />{' '}
                {author} (Trust Score: {trustScore})
              </span>
              <span className="flex items-center gap-1 text-sm text-purple-400">
                <LucideLink className="w-4 h-4" /> {lab}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>{replies} replies</span>
              <span>{views.toLocaleString()} views</span>
              <span>{time}</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-700/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <LucideBrain className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">AI Summary</span>
            </div>
            <p className="text-sm text-gray-400">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeneralDiscussionFeed = () => {
  const discussions = [
    {
      author: 'Dr. Sarah Kim',
      trustScore: 95,
      topic: 'Bias in Large Language Models',
      tags: ['AI Ethics', 'Verified Research'],
      lab: 'Harvard AI Lab',
      replies: 15,
      views: 3200,
      time: '2h ago',
      summary:
        'Discussion focuses on three main approaches: Diverse training data, Debiasing techniques, Model architecture modifications.',
    },
    {
      author: 'Dr. Robert Johnson',
      trustScore: 92,
      topic: 'Smart Contract Security in DeFi Applications',
      tags: ['Blockchain', 'Verified Research'],
      lab: 'MIT Blockchain Lab',
      replies: 23,
      views: 2800,
      time: '4h ago',
      summary:
        'Discussion highlights: Automated auditing tools, Formal verification frameworks, Real-time monitoring systems for DeFi protocols.',
    },
  ];

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

export default GeneralDiscussionFeed;
