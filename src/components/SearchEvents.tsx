
import React, { useState } from 'react';

export const SearchEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "US to double tariffs...",
    "Federal Reserve...",
    "Load more..."
  ];

  return (
    <div className="h-full flex flex-col p-2">
      <div className="mb-3">
        <h2 className="text-sm font-bold text-green-300 mb-2">SEARCH SPECIFIC EVENT</h2>
        
        <div className="relative mb-2">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-green-300 text-xs p-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs">🔍</span>
          <span className="text-xs text-green-300">US</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="text-xs py-1 px-2 hover:bg-gray-750 cursor-pointer border-l border-gray-600 text-gray-300"
            >
              {index < filters.length - 1 ? '▶' : '▶'} {filter}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <button className="w-full text-xs py-2 bg-green-800 text-green-200 hover:bg-green-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
};
