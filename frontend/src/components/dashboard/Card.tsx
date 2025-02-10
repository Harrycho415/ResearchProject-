import { Eye, Heart, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DatasetCard = ({
  id,
  initials,
  name,
  status,
  datasetName,
  tags,
  description,
  views,
  likes,
  comments,
}) => {
  return (
    <Link
      href={`/posts/${id}`}
      className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-4 p-4 border-t border-gray-700 table-row-hover"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm">{name}</span>
          <div className="flex items-center gap-1">
            <i className="w-4 h-4 text-green-500">✔</i>
            <span className="text-xs text-gray-400">{status}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white">{datasetName}</span>
        <div className="flex gap-2 mt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="text-gray-300 text-sm">{description}</div>
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{views}</span>
        </div>
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          <span className="text-sm">{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm">{comments}</span>
        </div>
      </div>
    </Link>
  );
};

const DashboardList = ({ contents }) => {
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        <div className="max-w-4xl mx-auto space-y-4">
          {contents.map((dataset) => (
            <DatasetCard key={dataset.id} {...dataset} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { DatasetCard, DashboardList };
