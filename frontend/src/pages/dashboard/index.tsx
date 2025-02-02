import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Dark Menubar */}
        <div className="w-64 bg-gray-900 p-6 flex flex-col h-screen fixed">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <svg
              className="w-8 h-8 text-purple-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M13 10V3L4 14H7V21L16 10H13Z" fill="currentColor" />
            </svg>
            <span className="text-white text-xl font-semibold">Callock</span>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="AI-powered search..."
              className="w-full bg-gray-800 text-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none"
            />
            <i
              data-lucide="search"
              className="w-4 h-4 absolute right-3 top-2.5 text-gray-400"
            ></i>
          </div>

          {/* User Mini Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <i data-lucide="user" className="w-6 h-6 text-gray-400"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white">John</span>
                <span className="text-green-500 text-sm">Verified</span>
              </div>
              <div className="text-gray-400 text-sm">Researcher</div>
              <div className="text-gray-500 text-xs">0x1234...5678</div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1">
            <a
              href="#"
              className="flex items-center text-gray-300 p-3 menu-hover bg-gray-800 rounded-lg"
            >
              <span className="text-lg">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Research Hub</span>
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Collaborations</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Community</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Web3 Wallet</span>
              <span className="text-gray-400">2.5 ICP</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Notifications</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </a>
          </nav>

          {/* Bottom Items */}
          <div className="mt-auto space-y-1">
            <div className="flex items-center justify-between text-gray-300 p-3">
              <span className="text-lg">Dark Mode</span>
              <div className="w-12 h-6 bg-purple-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center text-gray-300 p-3 menu-hover"
            >
              <span className="text-lg">Help & AI Assistant</span>
            </a>
          </div>
        </div>

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
                <button className="bg-white/20 text-white px-8 py-2 rounded-lg">
                  Sort by Date
                </button>
                <button className="bg-white/20 text-white px-8 py-2 rounded-lg">
                  Status
                </button>
                <button className="bg-white/20 text-white px-8 py-2 rounded-lg">
                  Dataset Type
                </button>
                <button className="bg-purple-500 text-white px-8 py-2 rounded-lg">
                  Blockchain Verified
                </button>
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
                <div className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 p-4 border-t border-gray-700 table-row-hover">
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
                </div>

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
