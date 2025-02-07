import React, { useState } from 'react';

interface PrivacySettingsProps {
  onBack: () => void;
  onNext: () => void;
}

const PrivacySettings: React.FC<PrivacySettingsProps> = ({
  onBack,
  onNext,
}) => {
  const [selectedPrivacy, setSelectedPrivacy] = useState('Restricted');
  const [isIndexed, setIsIndexed] = useState(false);
  const [isPublicMetadata, setIsPublicMetadata] = useState(true);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Privacy Level Selection */}
        <div className="space-y-4 mb-8">
          {/* Public Option */}
          <div
            className={`bg-gray-800/50 rounded-xl p-6 border-2 cursor-pointer ${
              selectedPrivacy === 'Public'
                ? 'border-purple-500'
                : 'border-transparent hover:border-purple-500/30'
            }`}
            onClick={() => setSelectedPrivacy('Public')}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-lg">
                Public (On-Chain & Open Access)
              </span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                Recommended
              </span>
            </div>
            <p className="text-gray-400">
              Anyone can view and download the dataset. Best for open research.
            </p>
          </div>

          {/* Restricted Option */}
          <div
            className={`bg-gray-800/50 rounded-xl p-6 border-2 cursor-pointer ${
              selectedPrivacy === 'Restricted'
                ? 'border-purple-500'
                : 'border-transparent hover:border-purple-500/30'
            }`}
            onClick={() => setSelectedPrivacy('Restricted')}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-lg">
                Restricted (Calimero Private Shards)
              </span>
              {selectedPrivacy === 'Restricted' && (
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  Selected
                </span>
              )}
            </div>
            <p className="text-gray-400">
              You control who can access the dataset using Calimero's private
              shards.
            </p>
          </div>

          {/* Token-Gated Option */}
          <div
            className={`bg-gray-800/50 rounded-xl p-6 border-2 cursor-pointer ${
              selectedPrivacy === 'Token-Gated'
                ? 'border-purple-500'
                : 'border-transparent hover:border-purple-500/30'
            }`}
            onClick={() => setSelectedPrivacy('Token-Gated')}
          >
            <div className="flex items-center mb-2">
              <span className="text-white text-lg">Token-Gated Access</span>
            </div>
            <p className="text-gray-400">
              Only users with specific research tokens/NFTs can access the
              dataset.
            </p>
          </div>
        </div>

        {/* Granular Access Controls */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-4">Granular Access Controls</h3>
          <div className="flex items-center justify-between mb-6">
            <span className="text-white">Dataset Visibility</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isIndexed}
                  onChange={() => setIsIndexed(!isIndexed)}
                  className="w-4 h-4 accent-purple-500"
                />
                <span className="text-gray-400">Index in Search</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isPublicMetadata}
                  onChange={() => setIsPublicMetadata(!isPublicMetadata)}
                  className="w-4 h-4 accent-purple-500"
                />
                <span className="text-gray-400">Public Metadata</span>
              </label>
            </div>
          </div>
        </div>

        {/* On-Chain Registration */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-4">On-Chain Registration</h3>
          <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
            <div className="text-gray-400 text-sm mb-1">Dataset Hash</div>
            <div className="text-purple-400">0x7d8f...3e2a</div>
          </div>
          <p className="text-gray-400 text-sm">
            Access control settings will be registered on ICP blockchain for
            transparency and verification.
          </p>
        </div>

        {/* Privacy Risk Assessment */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Privacy Risk Assessment</h3>
            <span className="text-purple-400">AI Generated</span>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-4">
            <div className="text-yellow-500 mb-2">Medium Privacy Risk</div>
            <p className="text-gray-400">
              Dataset contains potentially sensitive research data. Recommended
              to use Calimero Private Shards with institutional access controls.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="bg-gray-800/50 text-white px-6 py-3 rounded-lg"
          >
            Back to AI Analysis
          </button>
          <button
            onClick={onNext}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Continue to Monetization
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
