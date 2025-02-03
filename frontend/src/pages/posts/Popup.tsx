import React, { useState } from 'react';
import { X, Database, File, User, ShieldCheck, Info, Send } from 'lucide-react';

const RequestDataForm = ({ setShowPopup }) => {
  const onHideClick = () => setShowPopup(false);
  return (
    <div className="">
      {/* Modal HTML */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50">
        <div className="min-h-screen flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="bg-gray-800 rounded-2xl w-[800px] max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="gradient-bg p-6 rounded-t-2xl top-0 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-white font-semibold">
                  Request Dataset Access
                </h2>
                <button
                  onClick={onHideClick}
                  className="text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-6">
              {/* Essential Information Section */}
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-white font-medium mb-4">
                      Dataset Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Database className="w-4 h-4" />
                        <span>Neural Network Architecture Dataset</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <File className="w-4 h-4" />
                        <span>CSV • 30MB</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-4">
                      Requester Profile
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <User className="w-4 h-4" />
                        <span>Dr. John Doe • Harvard University</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span>Trust Score: 95</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Intent */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Research Purpose
                  </label>
                  <textarea
                    placeholder="Briefly describe your research purpose (1-2 sentences)"
                    className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    rows={2}
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Intended Use Case
                    </label>
                    <select className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                      <option value="">Select use case</option>
                      <option value="academic">Academic Research</option>
                      <option value="industry">Industry Research</option>
                      <option value="ai">AI Model Training</option>
                      <option value="financial">Financial Analysis</option>
                      <option value="nonprofit">Non-Profit Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Usage Duration
                    </label>
                    <select className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                      <option value="">Select duration</option>
                      <option value="short">Short-term (1-6 months)</option>
                      <option value="long">Long-term (&gt;6 months)</option>
                      <option value="indefinite">
                        Indefinite / Open Research
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Research Methodology
                  </label>
                  <textarea
                    placeholder="Explain how you will process & analyze this dataset (3-5 sentences)"
                    className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              {/* Web3 & Security Section */}
              <div className="bg-gray-900/50 rounded-xl p-4">
                <h3 className="text-white font-medium mb-4">
                  Security & Compliance
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">
                      I will not redistribute this dataset without explicit
                      permission
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">
                      I will cite the data provider in any research/publication
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">
                      I acknowledge this dataset is protected under Web3 smart
                      contract terms
                    </span>
                  </label>
                </div>
              </div>

              {/* Collaboration Options */}
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <h3 className="text-white font-medium mb-4">
                  Enhanced Collaboration
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">
                      I am open to collaboration with the data provider
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">
                      I am willing to offer co-authorship for publications
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-700 p-6 bottom-0 bg-gray-800">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <Info className="w-4 h-4" />
                  <span>AI will validate your request before submission</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={onHideClick}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                    onClick={onHideClick}
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDataForm;
