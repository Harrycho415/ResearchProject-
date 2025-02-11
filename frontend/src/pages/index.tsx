import React, { useEffect, useState } from 'react';
import { SortButtons } from '../components/dashboard/SortButton';
import { dashboardExample as initialDashboardExample } from '../db/dashboardExample';
import { DashboardList } from '../components/dashboard/Card';
import DashboardStats from '../components/dashboard/StatsCard';
import SearchBar from '../components/dashboard/SearchBar';
import { UploadCloud } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState(initialDashboardExample);

  useEffect(() => {
    if (router.query['new'] === 'true') {
      const newEx = {
        id: 1,
        initials: 'HC',
        name: 'Harry Cho',
        status: 'Verified',
        datasetName: 'Clinical Trial Results 2024 - Patient Response Analysis',
        tags: [
          'Clinical Trials',
          'Healthcare Data',
          'Patient Response',
          'Medical Research',
        ],
        description:
          'This dataset contains anonymized patient response data from clinical trials conducted in 2024.',
        views: 0,
        likes: 0,
        comments: 0,
      };
      setDashboardData([newEx, ...initialDashboardExample]);
    }
  }, [router.query]);

  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Search & Filter Bar */}
          <div className="p-6 gradient-bg">
            <div className="max-w-4xl mx-auto">
              <SearchBar />
              <SortButtons />
              <DashboardStats />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-white font-semibold">
                  Research Datasets
                </h2>
                <button
                  onClick={() => router.push('uploaddata')}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <UploadCloud className="w-5 h-5" />
                  <span>Upload Dataset</span>
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-4 p-4 bg-gray-700 text-gray-300 text-sm font-medium">
                  <div>Provider</div>
                  <div>Dataset</div>
                  <div>Description</div>
                  <div>Engagement</div>
                </div>
                <DashboardList contents={dashboardData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
