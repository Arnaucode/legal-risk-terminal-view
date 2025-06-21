
import React, { useState } from 'react';

export const ModelResponse = () => {
  const [response, setResponse] = useState('Analyzing trade war escalation scenario... Risk assessment indicates potential 23% increase in steel import costs across North American supply chains. Recommend immediate hedging strategies for Q4 exposure.');

  return (
    <div className="h-full flex flex-col p-2">
      <div className="mb-3">
        <h2 className="text-sm font-bold text-green-300">MODEL RESPONSE</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="bg-gray-700 border border-gray-600 h-full p-3 text-xs leading-relaxed">
          <div className="text-green-300">
            {response}
          </div>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Response time: 2.3s</span>
          <span>Confidence: 87%</span>
          <button className="text-green-400 hover:text-green-300 border border-green-400 px-2 py-1">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};
