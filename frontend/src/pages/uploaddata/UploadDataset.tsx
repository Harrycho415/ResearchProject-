import React, { useRef, useState } from 'react';
import {
  UploadCloud,
  FilePlus,
  Folder,
  Brain,
  Shield,
  Link,
  ArrowRight,
} from 'lucide-react';
import { useRouter } from 'next/router';

const UploadDataset = ({ onNext }: { onNext: () => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex-1 ml-64 p-6">
      <h1 className="text-2xl text-white font-semibold mb-6">Upload Dataset</h1>
      <div className="bg-gray-800 rounded-xl p-12 text-center mb-8">
        <UploadCloud className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-white text-xl font-medium mb-2">
          Drop your dataset files here
        </h3>
        <p className="text-gray-400">
          Support for CSV, JSON, Excel, and other research data formats
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            onClick={handleButtonClick}
          >
            <FilePlus className="w-5 h-5" /> Browse Files
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={onNext}
          />
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            <Folder className="w-5 h-5" /> Select Folder
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <h3 className="text-white font-medium">AI Metadata Generation</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Our AI will automatically analyze your dataset and generate
            comprehensive metadata.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <h3 className="text-white font-medium">Calimero Privacy</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Secure your data with Calimero private shards and customizable
            access controls.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Link className="w-6 h-6 text-green-400" />
            <h3 className="text-white font-medium">On-Chain Registration</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Your dataset will be registered on ICP blockchain for permanent
            citation tracking.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-lg">
          Cancel
        </button>
        <button
          onClick={onNext}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          Continue to AI Analysis
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default UploadDataset;
