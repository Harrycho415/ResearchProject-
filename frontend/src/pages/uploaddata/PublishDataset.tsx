import React, { useState } from 'react';
import {
  Brain,
  CheckCircle,
  Database,
  Shield,
  ArrowLeft,
  UploadCloud,
} from 'lucide-react';

interface PublishDatasetProps {
  onBack: () => void;
  onPublish: () => void;
}

const PublishDataset: React.FC<PublishDatasetProps> = ({
  onBack,
  onPublish,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Final Dataset Review */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg">Dataset Summary</h3>
            <span className="text-purple-400 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Verified
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Dataset Title</div>
              <div className="text-white">
                Clinical Trial Results 2024 - Patient Response Analysis
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Description</div>
              <div className="text-white text-sm">
                Comprehensive dataset containing anonymized patient response
                data from clinical trials...
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Research Tags</div>
              <div className="flex flex-wrap gap-2">
                {['Clinical Trials', 'Healthcare Data', 'Patient Response'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* AI Quality Check */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg">Quality Assessment</h3>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400">Passed Verification</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white">Data Completeness</div>
                  <div className="text-sm text-gray-400">
                    No missing values detected
                  </div>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white">Privacy Compliance</div>
                  <div className="text-sm text-gray-400">
                    All sensitive data properly anonymized
                  </div>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </div>

        {/* Access Settings Review */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-6">Access Configuration</h3>
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Privacy Level</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Calimero Private Shards
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Restricted access with institutional verification
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">License Type</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  Academic Use
                </span>
              </div>
              <p className="text-sm text-gray-400">
                CC-BY license with attribution requirement
              </p>
            </div>
          </div>
        </div>

        {/* Legal Confirmation */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 accent-purple-500"
              checked={isConfirmed}
              onChange={() => setIsConfirmed(!isConfirmed)}
            />
            <span className="text-gray-400 text-sm">
              I confirm that I have the rights to publish this dataset and agree
              to the terms of the selected license.
            </span>
          </label>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="bg-gray-700/50 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Monetization
          </button>
          <button
            onClick={isConfirmed ? onPublish : undefined}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              isConfirmed
                ? 'bg-purple-600 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isConfirmed}
          >
            Publish Dataset
            <UploadCloud className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishDataset;
