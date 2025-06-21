
import React from 'react';

export const Sentinel = () => {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-300 tracking-wider">SENTINEL</h1>
        <div className="text-xs text-gray-400 mt-1">Legal Risk Assessment Platform</div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-red-400 rounded-full flex items-center justify-center mb-2">
              <span className="text-red-400 text-xl font-bold">!</span>
            </div>
            <div className="text-xs text-red-400">CRITICAL</div>
            <div className="text-lg font-bold text-red-400">3</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-orange-400 rounded-full flex items-center justify-center mb-2">
              <span className="text-orange-400 text-xl font-bold">⚠</span>
            </div>
            <div className="text-xs text-orange-400">HIGH</div>
            <div className="text-lg font-bold text-orange-400">7</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-green-400 rounded-full flex items-center justify-center mb-2">
              <span className="text-green-400 text-xl font-bold">✓</span>
            </div>
            <div className="text-xs text-green-400">MONITORED</div>
            <div className="text-lg font-bold text-green-400">23</div>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-center text-gray-400">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};
