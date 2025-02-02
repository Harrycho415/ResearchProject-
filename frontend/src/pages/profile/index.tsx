import { useRouter } from 'next/router';
import React from 'react';
import { Edit2 } from 'lucide-react';

export default function Index() {
  const router = useRouter();

  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
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
                    <img
                      src="/profile.png"
                      alt="loading..."
                      className="-translate-y-6"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6"></div>
                </div>
                <button className="mt-4 flex items-center justify-center gap-2 bg-white/10 rounded-md px-4 py-2 text-sm mx-auto text-white">
                  <Edit2 className="w-4 h-4" />
                  <span className="text-white">Edit Profile</span>
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
            <div className="max-w-4xl mx-auto bg-white/10 rounded-lg p-8">
              {/* Connected Wallet */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="font-medium text-white">
                    Connected Identity
                  </div>
                  <div className="text-gray-500 text-sm">0x1234...5678</div>
                </div>
                <div className="text-purple-600">Trust Score: 95</div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full  bg-gray-700  rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full  bg-gray-700  rounded-lg p-2"
                  />
                </div>
              </div>

              {/* Research Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Research Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Research Field (AI-suggested)"
                    className="w-full bg-gray-700  rounded-lg p-2"
                  />
                  <input
                    type="url"
                    placeholder="Lab URL"
                    className="w-full bg-gray-700  rounded-lg p-2"
                  />
                  <label className="block font-medium mb-2 text-white">
                    Lab Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700  rounded-lg p-2"
                  ></textarea>
                </div>
              </div>

              {/* Publication Links */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Publication Links
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="url"
                    placeholder="Google Scholar Profile"
                    className="w-full bg-gray-700  rounded-lg p-2"
                  />
                  <input
                    type="url"
                    placeholder="ResearchGate Profile"
                    className="w-full bg-gray-700  rounded-lg p-2"
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
