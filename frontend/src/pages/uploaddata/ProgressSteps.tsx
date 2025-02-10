import React from 'react';
import { Upload, Brain, Shield, Wallet, Check } from 'lucide-react';

interface ProgressStepsProps {
  step: 'upload' | 'analysis' | 'privacy' | 'monetization' | 'publish';
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ step }) => {
  // Step 리스트
  const steps = [
    { id: 'upload', label: 'Upload Files', icon: Upload },
    { id: 'analysis', label: 'AI Analysis', icon: Brain },
    { id: 'privacy', label: 'Privacy Settings', icon: Shield },
    { id: 'monetization', label: 'Monetization', icon: Wallet },
    { id: 'publish', label: 'Publish', icon: Check },
  ];

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center w-full">
        {steps.map((item, index) => {
          const isActive = steps.findIndex((s) => s.id === step) >= index;
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              {/* Step Circle */}
              <div className="relative flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-purple-500' : 'bg-gray-700'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`}
                  />
                </div>
                <span
                  className={`text-sm mt-2 ${isActive ? 'text-white' : 'text-gray-400'}`}
                >
                  {item.label}
                </span>
              </div>

              {/* Step Line */}
              {index < steps.length - 1 && (
                <div className="h-1 flex-1 bg-gray-700">
                  <div
                    className="h-1 bg-purple-500"
                    style={{ width: isActive ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressSteps;
