
import React, { useState } from 'react';

export const WhatIf = () => {
  const [scenario, setScenario] = useState('');

  return (
    <div className="h-full flex flex-col p-2">
      <div className="mb-3">
        <h2 className="text-sm font-bold text-green-300">WHAT IF...</h2>
      </div>
      
      <div className="flex-1 flex flex-col">
        <textarea
          placeholder="Enter scenario to analyze..."
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="flex-1 bg-gray-700 border border-gray-600 text-green-300 text-xs p-2 resize-none focus:border-green-400 focus:outline-none mb-3"
        />
        
        <button className="text-xs py-2 px-4 border border-green-400 text-green-300 hover:bg-green-900 mb-2">
          Submit
        </button>
        
        <div className="text-xs text-gray-400">
          <div className="mb-1">Recent Scenarios:</div>
          <div className="space-y-1">
            <div className="text-gray-500 cursor-pointer hover:text-green-400">• Trade war escalation</div>
            <div className="text-gray-500 cursor-pointer hover:text-green-400">• New sanctions regime</div>
            <div className="text-gray-500 cursor-pointer hover:text-green-400">• Supply chain disruption</div>
          </div>
        </div>
      </div>
    </div>
  );
};
