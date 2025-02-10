import React from 'react';
import {
  Brain,
  TrendingUp,
  Shield,
  Link,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

interface AIAnalysisProps {
  onBack: () => void;
  onNext: () => void;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ onBack, onNext }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column: AI Analysis */}
        <div className="col-span-2 space-y-6">
          {/* AI-Generated Metadata */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-medium">AI-Generated Metadata</h3>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 text-sm">
                  AI Confidence: 95%
                </span>
              </div>
            </div>

            {/* Dataset Title */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Dataset Title
              </label>
              <input
                type="text"
                value="Clinical Trial Results 2024 - Patient Response Analysis"
                className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Dataset Description */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Description
              </label>
              <textarea
                className="w-full bg-gray-700 text-white rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                defaultValue="This dataset contains anonymized patient response data from clinical trials conducted in 2024."
              />
            </div>

            {/* AI-Generated Tags */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Research Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Clinical Trials',
                  'Healthcare Data',
                  'Patient Response',
                  'Medical Research',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
                <button className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  + Add Tag
                </button>
              </div>
            </div>

            {/* Research Categories */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Research Categories
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Healthcare & Medicine', 'Clinical Research'].map(
                  (category) => (
                    <div
                      key={category}
                      className="bg-gray-700 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-white">{category}</span>
                      <input
                        type="checkbox"
                        checked
                        className="w-4 h-4 accent-purple-500"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Dataset Analysis */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-white font-medium mb-6">AI Dataset Analysis</h3>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Total Records</div>
                <div className="text-white text-lg">10,547</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">
                  Data Quality Score
                </div>
                <div className="text-green-400 text-lg">98%</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Missing Values</div>
                <div className="text-white text-lg">&lt; 0.1%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Additional Info */}
        <div className="space-y-6">
          {/* Research Impact Prediction */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">
              Research Impact Prediction
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white">High Research Value</span>
              </div>
              <p className="text-sm text-gray-400">
                This dataset aligns with 47 active research projects in our
                network.
              </p>
              <div className="bg-purple-500/10 rounded-lg p-3">
                <div className="text-sm text-purple-400">
                  Suggested Collaborators:
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  15 researchers working on similar datasets
                </div>
              </div>
            </div>
          </div>

          {/* Citation Information */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">
              Citation Information
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="text-sm text-white mb-1">DOI</div>
                <div className="text-xs text-gray-400">
                  10.1234/dataset.2024.001
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="text-sm text-white mb-1">ICP Hash</div>
                <div className="text-xs text-purple-400">0x1234...5678</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Upload
        </button>
        <button
          className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          onClick={onNext}
        >
          Continue to Privacy Settings
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AIAnalysis;
