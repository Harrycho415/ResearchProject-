import React, { useState } from 'react';
import UploadDataset from './UploadDataset';
import AIAnalysis from './AIAnalysis';
import PrivacySettings from './PrivacySettings';
import Monetization from './Monetization';
import PublishDataset from './PublishDataset';
import ProgressSteps from './ProgressSteps';
import { useRouter } from 'next/router';

const App = () => {
  const router = useRouter();
  const [step, setStep] = useState<
    'upload' | 'analysis' | 'privacy' | 'monetization' | 'publish'
  >('upload');

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
      {/* Header + Progress Steps */}
      <div className="gradient-bg p-6">
        <div className="max-w-6xl mx-auto">
          <ProgressSteps step={step} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 w-full flex flex-col">
        {step === 'upload' && (
          <UploadDataset onNext={() => setStep('analysis')} />
        )}
        {step === 'analysis' && (
          <AIAnalysis
            onBack={() => setStep('upload')}
            onNext={() => setStep('privacy')}
          />
        )}
        {step === 'privacy' && (
          <PrivacySettings
            onBack={() => setStep('analysis')}
            onNext={() => setStep('monetization')}
          />
        )}
        {step === 'monetization' && (
          <Monetization
            onBack={() => setStep('privacy')}
            onNext={() => setStep('publish')}
          />
        )}
        {step === 'publish' && (
          <PublishDataset
            onBack={() => setStep('monetization')}
            onPublish={() => {
              alert('Dataset successfully published!');
              router.push('/?new=true');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
