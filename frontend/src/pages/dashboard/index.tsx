import React from 'react';
import SortButton from '../../components/dashboard/sortButton';
import { dashboardExample } from '../../db/dashboardExample';
import DashboardList from './DashboardList';

export default function Dashboard() {
  console.log(dashboardExample);
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Search & Filter Bar */}
          <div className="p-6 gradient-bg">
            {/* Main Search */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <i
                  data-lucide="search"
                  className="w-5 h-5 absolute left-4 top-3.5 text-gray-400"
                ></i>
                <input
                  type="text"
                  placeholder="Search for datasets, papers, or researchers..."
                  className="w-full bg-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-3 top-2 bg-purple-500 text-white px-4 py-1.5 rounded-md flex items-center gap-2">
                  <i data-lucide="mic" className="w-4 h-4"></i>
                  <span>Voice Search</span>
                </button>
              </div>

              {/* Filter Tags */}
              <div className="flex space-x-4 mb-6">
                <SortButton contents="Sort by Date"> </SortButton>
                <SortButton contents="Status"> </SortButton>
                <SortButton contents="Dataset Type"> </SortButton>
                <SortButton
                  isClicked={true}
                  contents="Blockchain Verified"
                ></SortButton>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <i data-lucide="database" className="w-5 h-5"></i>
                    <span className="text-sm">Total Datasets</span>
                  </div>
                  <span className="text-2xl font-bold">1,234</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <i data-lucide="users" className="w-5 h-5"></i>
                    <span className="text-sm">Active Researchers</span>
                  </div>
                  <span className="text-2xl font-bold">456</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <i data-lucide="trending-up" className="w-5 h-5"></i>
                    <span className="text-sm">Growth Rate</span>
                  </div>
                  <span className="text-2xl font-bold">+27%</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <i data-lucide="shield-check" className="w-5 h-5"></i>
                    <span className="text-sm">Verified Data</span>
                  </div>
                  <span className="text-2xl font-bold">89%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              {/* Data Table */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 p-4 bg-gray-700 text-gray-300 text-sm font-medium">
                  <div>Provider</div>
                  <div>Dataset</div>
                  <div>Description</div>
                  <div>Engagement</div>
                </div>

                {/* Entry 1 */}
                {/* <div className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 p-4 border-t border-gray-700 table-row-hover">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                      MA
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm">Maria Anderson</span>
                      <div className="flex items-center gap-1">
                        <i
                          data-lucide="shield-check"
                          className="w-4 h-4 text-green-500"
                        ></i>
                        <span className="text-xs text-gray-400">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white">
                      Neural Network Architecture Data
                    </span>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                        AI
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                        Deep Learning
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Comprehensive performance analysis of various neural network
                    architectures...
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <i data-lucide="eye" className="w-4 h-4"></i>
                      <span className="text-sm">2.3k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i data-lucide="heart" className="w-4 h-4"></i>
                      <span className="text-sm">456</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i data-lucide="message-square" className="w-4 h-4"></i>
                      <span className="text-sm">89</span>
                    </div>
                  </div>
                </div> */}

                <DashboardList contents={dashboardExample} />

                {/* Additional entries go here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>lucide.createIcons();</script>
    </div>
  );
}
