// import { useRouter } from 'next/router';
// import ToggleButton from './ToggleButton';
// import NotiList from './NotiList';
// import { useState } from 'react';
// import { sentExample } from '../../db/sentExample';
// import { receivedExample } from '../../db/receivedExample'; // receivedExample도 import

// export default function Index() {
//   const router = useRouter();
//   const [selected, setSelected] = useState('sent'); // 초기 상태는 'sent'

//   return (
//     <div className="h-screen bg-gray-900 text-white pl-[min(378px,25%)]">
//       <div className="py-[100px] w-2/3 mx-auto">
//         <ToggleButton
//           selected={selected}
//           setSelected={setSelected}
//         ></ToggleButton>
//       </div>

//       <div className="w-5/6 mx-auto h-2/3 overflow-y-scroll">
//         {/* 조건에 따라 NotiList에 전달되는 데이터 변경 */}
//         <NotiList
//           contents={selected === 'sent' ? sentExample : receivedExample}
//         ></NotiList>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Left Menu Bar (Same as profile page) */}
        <div className="w-64 bg-gray-900 p-6 flex flex-col h-screen fixed">
          {/* Same menubar code as before */}
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
              className="w-4 h-4 absolute right-3 top-2.5 text-gray-400"
              data-lucide="search"
            ></i>
          </div>

          {/* User Mini Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <i className="w-6 h-6 text-gray-400" data-lucide="user"></i>
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
              className="flex items-center text-gray-300 p-3 menu-hover"
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
              className="flex items-center justify-between text-gray-300 p-3 menu-hover bg-gray-800 rounded-lg"
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
          {/* Main Content Area */}
          <div className="p-6 gradient-bg">
            <div className="max-w-4xl mx-auto">
              {/* Replace the Tabs and Filters section */}
              <div className="flex flex-col space-y-4 mb-8">
                {/* Tabs */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white/20 text-white px-8 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <span>Sent</span>
                    <span className="bg-purple-500 text-xs px-2 py-0.5 rounded-full">
                      4
                    </span>
                  </a>
                  <a
                    href="#"
                    className="bg-white px-8 py-2 rounded-lg flex items-center space-x-2 text-gray-900"
                  >
                    <span>Received</span>
                    <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">
                      2
                    </span>
                  </a>
                </div>

                {/* Filters */}
                <div className="flex space-x-4">
                  <button className="bg-white/20 text-white px-6 py-2 rounded-lg">
                    Sort by Date
                  </button>
                  <button className="bg-white/20 text-white px-6 py-2 rounded-lg">
                    Status
                  </button>
                  <button className="bg-white/20 text-white px-6 py-2 rounded-lg">
                    Dataset Type
                  </button>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <i data-lucide="inbox" className="w-5 h-5"></i>
                    <span>New Requests</span>
                  </div>
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <i
                      data-lucide="check-circle"
                      className="w-5 h-5 text-green-400"
                    ></i>
                    <span>Approved</span>
                  </div>
                  <span className="text-2xl font-bold">45</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <i
                      data-lucide="x-circle"
                      className="w-5 h-5 text-red-400"
                    ></i>
                    <span>Rejected</span>
                  </div>
                  <span className="text-2xl font-bold">8</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <i
                      data-lucide="award"
                      className="w-5 h-5 text-yellow-400"
                    ></i>
                    <span>Trust Score</span>
                  </div>
                  <span className="text-2xl font-bold">92%</span>
                </div>
              </div>

              {/* Notification Cards */}
              <div className="space-y-4">
                {/* Notification Card 1 */}
                <div className="bg-gray-800 rounded-lg p-4 notification-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-medium">JD</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-medium">
                              Dr. John Doe
                            </h3>
                            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                              Verified Researcher
                            </span>
                            <span className="text-xs text-gray-400">
                              Trust Score: 95
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            Requesting: Neural Network Architecture Dataset
                          </p>
                          <p className="text-gray-400 text-sm mt-2">
                            Purpose: Comparative analysis of deep learning
                            models for medical imaging
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-300">
                          <i
                            data-lucide="more-vertical"
                            className="w-5 h-5"
                          ></i>
                        </button>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <i data-lucide="clock" className="w-4 h-4"></i>
                          <span>Requested 2 hours ago</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-400">
                          <i data-lucide="link" className="w-4 h-4"></i>
                          <span>View Request Details</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600">
                          <i data-lucide="check" className="w-4 h-4"></i>{' '}
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-600">
                          <i data-lucide="x" className="w-4 h-4"></i> Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more notification cards here in a similar pattern */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
