import React from 'react';
import { Tags, LayoutDashboard, Siren, Puzzle, ClipboardCheck, Network } from 'lucide-react';

// Data aur icons ko ek saath rakha gaya hai
const featuresData = [
  {
    Icon: Tags,
    title: "Customizable Tags & Readers",
    description: "Anti-metal, waterproof, long-range, tamper-evident options",
  },
  {
    Icon: LayoutDashboard,
    title: "Software Dashboard",
    description: "Cloud or on-premise interface with access control",
  },
  {
    Icon: Siren,
    title: "Alerts & Automation",
    description: "Missing item alerts, route deviations, unauthorized access",
  },
  {
    Icon: Network,
    title: "Third-Party Integration",
    description: "APIs for ERP, SAP, Oracle, Tally, and custom CRMs",
  },
  {
    Icon: ClipboardCheck,
    title: "Audit & Compliance Logs",
    description: "Tamper-proof reports for governance and audits",
  },
];

const PlatformFeatures = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Platform Features
        </h2>
        
        {/* Features ke liye responsive grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <feature.Icon className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
              </div>
              
              {/* Title and Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-1 text-base text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
