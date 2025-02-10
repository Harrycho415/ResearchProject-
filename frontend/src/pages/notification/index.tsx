import React, { useState, useEffect } from 'react';
import sampleNotifications from '../../db/notiExample';
import Card from './Card';

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
  Inbox,
  CheckCircle,
  XCircle,
  Award,
} from 'lucide-react';
import { SortButtons } from '../../components/dashboard/SortButton';
import NotiList from './NotiList';

export default function notification() {
  const [datasets, setDatasets] = useState([]);

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
                <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for datasets, papers, or researchers..."
                  className="w-full bg-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-3 top-2 bg-purple-500 text-white px-4 py-1.5 rounded-md flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  <span>Voice Search</span>
                </button>
              </div>

              {/* Filter Tags */}
              <SortButtons />
              {/* Stats Overview */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Inbox className="w-5 h-5" />
                    <span className="text-sm">New Requests</span>
                  </div>
                  <div className="text-center text-2xl font-bold">12</div>
                </div>

                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Approved</span>
                  </div>
                  <div className="text-center text-2xl font-bold">45</div>
                </div>

                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="text-sm">Rejected</span>
                  </div>
                  <div className="text-center text-2xl font-bold">8</div>
                </div>

                <div className="glassmorphism rounded-lg p-4 text-white">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">Trust Score</span>
                  </div>
                  <div className="text-center text-2xl font-bold">92%</div>
                </div>
              </div>
              {/* Notification Cards */}
              <NotiList contents={sampleNotifications} />
              {/* Add more notification cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
