
import React from 'react';
import { Folder } from 'lucide-react';

export const DataRoom = () => {
  const categories = [
    { name: "Commercial contracts", count: 234, expanded: false },
    { name: "Consumer agreements", count: 156, expanded: false },
    { name: "Corporate & strategic contracts", count: 89, expanded: true },
    { name: "Employment contracts", count: 167, expanded: true },
    { name: "Real estate & Asset contracts", count: 45, expanded: true },
    { name: "Financial & Treasury contracts", count: 78, expanded: true },
    { name: "Legal & Compliance", count: 234, expanded: true }
  ];

  const documents = [
    "C-001", "C-002", "C-003"
  ];

  return (
    <div className="h-full flex flex-col p-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-green-300">DATA ROOM</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-1">
        {categories.map((category, index) => (
          <div key={index} className="text-xs">
            <div className="flex items-center gap-2 py-1 hover:bg-gray-750 cursor-pointer">
              <span className="text-gray-400">{category.expanded ? '▼' : '▶'}</span>
              <Folder size={12} className="text-green-400" />
              <span className="text-green-300">{category.name}</span>
              <span className="text-gray-400 ml-auto">{category.count}</span>
            </div>
            
            {category.expanded && category.name === "Commercial contracts" && (
              <div className="ml-6 space-y-1">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-2 py-1 hover:bg-gray-750 cursor-pointer">
                    <span className="text-blue-400">📄</span>
                    <span className="text-blue-300">{doc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <button className="w-full text-xs py-1 border border-green-400 text-green-300 hover:bg-green-900">
          + Add New Category
        </button>
      </div>
    </div>
  );
};
