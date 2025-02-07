import React from 'react';
import { SortButtons } from '../components/dashboard/SortButton';
import { dashboardExample } from '../db/dashboardExample';
import { DashboardList } from '../components/dashboard/Card';
import DashboardStats from '../components/dashboard/StatsCard';
import SearchBar from '../components/dashboard/SearchBar';
import {
  Database,
  Users,
  TrendingUp,
  ShieldCheck,
  Eye,
  Heart,
  MessageSquare,
  Search,
  Mic,
} from 'lucide-react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Search & Filter Bar */}
          <div className="p-6 gradient-bg">
            {/* Main Search */}
            <div className="max-w-4xl mx-auto">
              <SearchBar />
              {/* Filter Tags */}
              <SortButtons />
              {/* Stats Overview */}
              <DashboardStats />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              {/* Entry 1 */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-white font-semibold">
                  Research Datasets
                </h2>
                <button
                  onClick={() => router.push('uploaddata')}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <i data-lucide="upload-cloud" className="w-5 h-5"></i>
                  <span>Upload Dataset</span>
                </button>
              </div>
              {/* Data Table */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-4 p-4 bg-gray-700 text-gray-300 text-sm font-medium">
                  <div>Provider</div>
                  <div>Dataset</div>
                  <div>Description</div>
                  <div>Engagement</div>
                </div>

                <DashboardList contents={dashboardExample} />

                {/* Additional entries go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
