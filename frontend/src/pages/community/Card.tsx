import { LucideShieldCheck, LucideLink, LucideBrain } from 'lucide-react';

export default function DiscussionCard({
  author,
  trustScore,
  topic,
  tags,
  lab,
  replies,
  views,
  time,
  summary,
}) {
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

          <div className="text-gray-400 mb-4">
            Exploring methods to reduce bias in large language models...
          </div>

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

          {/* AI Summary */}
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
}
