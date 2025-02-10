import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import DatasetCard component

export default function Dashboard({ contents }) {
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen">
        {/* Left Menu Bar (Same as profile page) */}
        <div className="w-64 bg-gray-900 p-6 flex flex-col h-screen fixed">
          {/* ... (Menu Bar content remains the same) */}
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Main Content Area */}
          <div className="p-6 gradient-bg">
            <div className="max-w-4xl mx-auto">
              {/* Stats Overview */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {/* Your stats code */}
              </div>

              {/* Notification Cards */}
              <div className="space-y-4">
                {contents.map((dataset) => (
                  <Card
                    key={dataset.id}
                    initials={dataset.initials}
                    name={dataset.name}
                    status={dataset.status}
                    datasetName={dataset.datasetName}
                    tags={dataset.tags}
                    description={dataset.description}
                    views={dataset.views}
                    likes={dataset.likes}
                    comments={dataset.comments}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
