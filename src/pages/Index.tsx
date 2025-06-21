
import { EventsFeed } from "@/components/EventsFeed";
import { Sentinel } from "@/components/Sentinel";
import { DataRoom } from "@/components/DataRoom";
import { SearchEvents } from "@/components/SearchEvents";
import { RiskMap } from "@/components/RiskMap";
import { WhatIf } from "@/components/WhatIf";
import { ModelResponse } from "@/components/ModelResponse";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono p-4">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen">
        {/* Events Feed - Top Left */}
        <div className="col-span-3 row-span-3 border border-green-400 bg-gray-800">
          <EventsFeed />
        </div>
        
        {/* Sentinel - Top Center */}
        <div className="col-span-6 row-span-1 border border-green-400 bg-gray-800">
          <Sentinel />
        </div>
        
        {/* Data Room - Top Right */}
        <div className="col-span-3 row-span-3 border border-green-400 bg-gray-800">
          <DataRoom />
        </div>
        
        {/* Model Response - Middle Center */}
        <div className="col-span-6 row-span-1 border border-green-400 bg-gray-800">
          <ModelResponse />
        </div>
        
        {/* Search Events - Bottom Left */}
        <div className="col-span-3 row-span-2 border border-green-400 bg-gray-800">
          <SearchEvents />
        </div>
        
        {/* Risk Map - Bottom Center Left */}
        <div className="col-span-3 row-span-2 border border-green-400 bg-gray-800">
          <RiskMap />
        </div>
        
        {/* What If - Bottom Center Right */}
        <div className="col-span-3 row-span-2 border border-green-400 bg-gray-800">
          <WhatIf />
        </div>
        
        {/* Additional Data Room panels - Bottom Right */}
        <div className="col-span-3 row-span-1 border border-green-400 bg-gray-800">
          <div className="p-2">
            <div className="text-xs text-green-300 mb-1">QUICK ACCESS</div>
            <div className="text-xs">Recent Documents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
