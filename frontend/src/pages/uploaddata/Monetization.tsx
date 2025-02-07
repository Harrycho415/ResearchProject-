import React, { useState } from 'react';
import {
  Unlock,
  CreditCard,
  RefreshCw,
  Users,
  Plus,
  ArrowLeft,
  ArrowRight,
  User,
} from 'lucide-react';

interface MonetizationProps {
  onBack: () => void;
  onNext: () => void;
}

const Monetization: React.FC<MonetizationProps> = ({ onBack, onNext }) => {
  const [selectedLicense, setSelectedLicense] = useState('Open License');
  const [paidAccessPrice, setPaidAccessPrice] = useState(0);
  const [subscriptionPrice, setSubscriptionPrice] = useState(0);
  const [allowCommercialUse, setAllowCommercialUse] = useState(true);
  const [requireAttribution, setRequireAttribution] = useState(true);
  const [allowModifications, setAllowModifications] = useState(false);
  const [revenueSplit, setRevenueSplit] = useState([
    { name: 'You (Dataset Owner)', percentage: 100 },
  ]);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* License Selection */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-6">Choose License Type</h3>
          <div className="space-y-4">
            {/* Open License Option */}
            <div
              className={`bg-gray-700/50 rounded-lg p-4 border-2 cursor-pointer ${
                selectedLicense === 'Open License'
                  ? 'border-purple-500'
                  : 'border-transparent hover:border-purple-500/30'
              }`}
              onClick={() => setSelectedLicense('Open License')}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <Unlock className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Open License (Academic)</span>
                </div>
                {selectedLicense === 'Open License' && (
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-gray-400">
                CC-BY or MIT license for academic and research use.
              </p>
            </div>

            {/* Paid Access Option */}
            <div
              className={`bg-gray-700/50 rounded-lg p-4 border-2 cursor-pointer ${
                selectedLicense === 'Paid Access'
                  ? 'border-purple-500'
                  : 'border-transparent hover:border-purple-500/30'
              }`}
              onClick={() => setSelectedLicense('Paid Access')}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Paid Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="0.0"
                    value={paidAccessPrice}
                    onChange={(e) =>
                      setPaidAccessPrice(parseFloat(e.target.value) || 0)
                    }
                    className="w-20 bg-gray-600 text-white rounded px-2 py-1 text-sm"
                  />
                  <span className="text-gray-400">ICP</span>
                </div>
              </div>
              <p className="text-gray-400">
                One-time payment via smart contract for dataset access.
              </p>
            </div>

            {/* Subscription Model */}
            <div
              className={`bg-gray-700/50 rounded-lg p-4 border-2 cursor-pointer ${
                selectedLicense === 'Subscription'
                  ? 'border-purple-500'
                  : 'border-transparent hover:border-purple-500/30'
              }`}
              onClick={() => setSelectedLicense('Subscription')}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-green-400" />
                  <span className="text-white">Subscription Model</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="0.0"
                    value={subscriptionPrice}
                    onChange={(e) =>
                      setSubscriptionPrice(parseFloat(e.target.value) || 0)
                    }
                    className="w-20 bg-gray-600 text-white rounded px-2 py-1 text-sm"
                  />
                  <span className="text-gray-400">ICP/month</span>
                </div>
              </div>
              <p className="text-gray-400">
                Recurring payment for continuous dataset access.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Terms */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-6">Usage Terms</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={allowCommercialUse}
                onChange={() => setAllowCommercialUse(!allowCommercialUse)}
                className="w-4 h-4 accent-purple-500"
              />
              <span className="text-gray-400">Allow commercial use</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={requireAttribution}
                onChange={() => setRequireAttribution(!requireAttribution)}
                className="w-4 h-4 accent-purple-500"
              />
              <span className="text-gray-400">Require attribution</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={allowModifications}
                onChange={() => setAllowModifications(!allowModifications)}
                className="w-4 h-4 accent-purple-500"
              />
              <span className="text-gray-400">Allow dataset modifications</span>
            </label>
          </div>
        </div>

        {/* Smart Contract Preview */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg mb-4">Smart Contract Preview</h3>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <div className="text-sm text-purple-400 mb-2">Contract Address</div>
            <div className="text-gray-400 text-sm font-mono">0x7d8f...3e2a</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="bg-gray-700/50 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Privacy Settings
          </button>
          <button
            onClick={onNext}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            Continue to Publish
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
