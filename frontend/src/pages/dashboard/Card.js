import React from 'react';

export default function Card({
  initials,
  name,
  status,
  datasetName,
  tags,
  description,
  views,
  likes,
  comments,
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 p-4 border-t border-gray-700 table-row-hover">
      {/* Provider Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm">{name}</span>
          <div className="flex items-center gap-1">
            <i
              data-lucide="shield-check"
              className="w-4 h-4 text-green-500"
            ></i>
            <span className="text-xs text-gray-400">{status}</span>
          </div>
        </div>
      </div>

      {/* Dataset Name and Tags Section */}
      <div className="flex flex-col">
        <span className="text-white">{datasetName}</span>
        <div className="flex gap-2 mt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs ${tag.color} px-2 py-0.5 rounded`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="text-gray-300 text-sm">{description}</div>

      {/* Engagement Section */}
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex items-center gap-1">
          <i data-lucide="eye" className="w-4 h-4"></i>
          <span className="text-sm">{views}</span>
        </div>
        <div className="flex items-center gap-1">
          <i data-lucide="heart" className="w-4 h-4"></i>
          <span className="text-sm">{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <i data-lucide="message-square" className="w-4 h-4"></i>
          <span className="text-sm">{comments}</span>
        </div>
      </div>
    </div>
  );
}
