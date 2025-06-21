
import React from 'react';

export const RiskMap = () => {
  const riskAreas = [
    { region: "North America", risk: "Medium", color: "text-yellow-400" },
    { region: "Europe", risk: "High", color: "text-orange-400" },
    { region: "Asia Pacific", risk: "Critical", color: "text-red-400" },
    { region: "Latin America", risk: "Low", color: "text-green-400" }
  ];

  return (
    <div className="h-full flex flex-col p-2">
      <div className="mb-3">
        <h2 className="text-sm font-bold text-green-300">RISK MAP</h2>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-3">
          {riskAreas.map((area, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-xs text-gray-300">{area.region}</span>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 border ${area.color} ${area.color.replace('text-', 'border-')}`}>
                </div>
                <span className={`text-xs font-bold ${area.color}`}>{area.risk}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-2 border border-gray-600 bg-gray-750">
          <div className="text-xs text-gray-400 mb-1">Global Risk Index</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-600 h-2">
              <div className="bg-orange-400 h-full" style={{ width: '65%' }}></div>
            </div>
            <span className="text-xs text-orange-400 font-bold">65%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
