
import React from 'react';

export const EventsFeed = () => {
  const events = [
    {
      id: 1,
      category: "TARIFF",
      text: "US to double tariffs on steel and aluminum imports to 50%",
      time: "2h ago",
      severity: "high"
    },
    {
      id: 2,
      category: "EXPORT",
      text: "Export ban on lithography equipment to China",
      time: "4h ago",
      severity: "medium"
    },
    {
      id: 3,
      category: "REGULATION",
      text: "EU AI Act enters into force",
      time: "6h ago",
      severity: "high"
    },
    {
      id: 4,
      category: "SANCTION",
      text: "Iran threatens to close the Strait of Hormuz",
      time: "8h ago",
      severity: "critical"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 border-red-400';
      case 'high': return 'text-orange-400 border-orange-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      default: return 'text-green-400 border-green-400';
    }
  };

  return (
    <div className="h-full flex flex-col p-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-green-300">EVENTS FEED</h2>
        <div className="text-xs px-2 py-1 border border-green-400 bg-green-900 text-green-200">
          Real Time
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-2">
        {events.map((event) => (
          <div 
            key={event.id} 
            className={`border-l-2 pl-2 py-1 hover:bg-gray-750 cursor-pointer ${getSeverityColor(event.severity)}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold">{event.category}</span>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <div className="text-xs leading-tight">{event.text}</div>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-600">
        From 02/05/23 to 21/06/23
      </div>
    </div>
  );
};
