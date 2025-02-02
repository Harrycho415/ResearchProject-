import { useRouter } from 'next/router';
import React from 'react';

export default function Index() {
  const router = useRouter();

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
              className="flex items-center text-gray-300 p-3 menu-hover bg-gray-800 rounded-lg"
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
          {/* Profile Content */}
          <div className="gradient-bg min-h-screen p-6">
            {/* Profile Header */}
            <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg relative mb-20">
              <button className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-md text-sm">
                Edit Cover Photo
              </button>

              {/* Profile Picture */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <i
                      className="w-16 h-16 text-gray-300"
                      data-lucide="user"
                    ></i>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6"></div>
                </div>
                <button className="mt-4 flex items-center justify-center gap-2 bg-white rounded-md px-4 py-2 text-sm mx-auto">
                  <i className="w-4 h-4" data-lucide="edit-2"></i>
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex justify-between items-center mb-2">
                  <span>Profile Strength</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex justify-between items-center">
                  <span>Research Score</span>
                  <span className="text-2xl">95</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <span>Verified Researcher</span>
              </div>
            </div>

            {/* Profile Form */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
              {/* Connected Wallet */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="font-medium">Connected Wallet</div>
                  <div className="text-gray-500 text-sm">0x1234...5678</div>
                </div>
                <div className="text-purple-600">Trust Score: 95</div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                </div>
              </div>

              {/* Research Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">
                  Research Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Research Field (AI-suggested)"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                  <input
                    type="url"
                    placeholder="Lab URL"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                  <label className="block font-medium mb-2">
                    Lab Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg p-2"
                  ></textarea>
                </div>
              </div>

              {/* Publication Links */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Publication Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="url"
                    placeholder="Google Scholar Profile"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                  <input
                    type="url"
                    placeholder="ResearchGate Profile"
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="w-full py-2 px-4 bg-gray-100 rounded-lg">
                  Save Draft
                </button>
                <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
