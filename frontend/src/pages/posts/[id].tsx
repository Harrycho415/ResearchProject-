import {
  Search,
  Heart,
  ArrowLeft,
  MoreVertical,
  Eye,
  Download,
  Star,
  TrendingUp,
  ShieldCheck,
  Clock,
  CheckCircle,
  Unlock,
  Database,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Popup from './Popup';
import Link from 'next/link';

const DatasetDetails = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [approved, setApproved] = useState(true);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/dataset.csv'; // public 폴더에 있는 파일 경로
    link.download = 'dataset.csv'; // 다운로드될 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    console.log('showpopup', showPopup);
  }, [showPopup]);

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header Section */}
        <div className="gradient-bg py-6">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center text-white gap-2 hover:text-white/80"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
              <div className="flex items-center gap-4">
                <button className="text-white bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save Dataset
                </button>
                <button className="text-white bg-white/10 px-4 py-2 rounded-lg">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Dataset Overview Section */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-6">
                {/* Provider Profile */}
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-xl font-semibold">
                    JD
                  </span>
                </div>
                {/* Dataset Title & Info */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl text-white font-semibold">
                      Neural Network Architecture Dataset
                    </h1>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      📊 CSV
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://example.com/provider-avatar.jpg"
                        alt="Provider"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-gray-300">Dr. John Doe</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">
                      ✅ Web3 Verified
                    </span>
                    <span className="text-gray-400 text-sm">
                      Trust Score: 95
                    </span>
                  </div>
                </div>
              </div>
              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>1.5k Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>342 Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>4.8 Rating</span>
                </div>
              </div>
            </div>

            {/* AI & Blockchain Insights */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Impact Score</span>
                </div>
                <div className="text-2xl font-semibold text-white mb-1">
                  92/100
                </div>
                <p className="text-sm text-gray-400">
                  Based on citations & usage
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Blockchain Verified</span>
                </div>
                <div className="text-sm text-gray-400">Hash:</div>
                <div className="text-sm text-purple-400 truncate">
                  0x1a2b...3c4d
                </div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <Clock className="w-5 h-5" />
                  <span>Avg. Response Time</span>
                </div>
                <div className="text-2xl font-semibold text-white mb-1">
                  24h
                </div>
                <p className="text-sm text-gray-400">For data requests</p>
              </div>
            </div>

            {/* Dataset Metadata */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Published Date
                  </div>
                  <div className="text-white">January 1, 2025</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    File Size & Format
                  </div>
                  <div className="text-white">30MB • CSV</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Data Collection Method
                  </div>
                  <div className="text-white">
                    Machine Learning Training Logs
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">License</div>
                  <div className="text-white">MIT License</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Preprocessing Level
                  </div>
                  <div className="text-white">Cleaned & Normalized</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Tags</div>
                  <div className="flex gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">
                      AI
                    </span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-sm">
                      ML Models
                    </span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-sm">
                      Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Use Cases */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-xl text-white font-semibold mb-4">
              About This Dataset
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Use Cases */}
            <h3 className="text-lg text-white font-semibold mt-6 mb-4">
              Suggested Use Cases
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="text-white">AI Model Training</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Perfect for training neural networks in medical imaging
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Research Analysis</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Benchmark different ML architectures
                </p>
              </div>
            </div>
          </div>

          {/* Request Access Section */}

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl text-white font-semibold mb-2">
                  Request Dataset Access
                </h2>
                <p className="text-gray-400">
                  Please provide details about your intended use
                </p>
              </div>
              {approved ? (
                <button
                  type="button"
                  onClick={handleDownload}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Data
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowPopup(true);
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Request Data
                </button>
              )}

              {showPopup && <Popup setShowPopup={setShowPopup} />}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Verified Researcher Status</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Connected Web3 Wallet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Research Purpose Statement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Access Type</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Unlock className="w-4 h-4 text-purple-400" />
                    <span>Smart Contract Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>7-day Processing Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <h2 className="text-xl text-white font-semibold mb-6">
              Similar Datasets
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Similar Dataset Card */}
              <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium">
                      Medical Imaging Dataset
                    </h3>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                      98% Match
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Similar architecture, different domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetDetails;
