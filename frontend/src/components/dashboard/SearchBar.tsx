import React from 'react';
import { Search, Mic } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative mb-6">
      <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
      <input
        type="text"
        placeholder="Search for datasets, papers, or researchers..."
        className="w-full bg-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button className="absolute right-3 top-2 bg-purple-500 text-white px-4 py-1.5 rounded-md flex items-center gap-2">
        <Mic className="w-4 h-4" />
        <span>Voice Search</span>
      </button>
    </div>
  );
}
