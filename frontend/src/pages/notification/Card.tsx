import React, { useState } from 'react';
import { MoreVertical, Clock, Link, Check, X } from 'lucide-react';

export default function Card({
  initials,
  name,
  role,
  trustScore,
  datasetName,
  purpose,
  requestTime,
  detailsLink,
}) {
  const [approved, setApproved] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-4 notification-card">
      <div className="flex items-start gap-4">
        {/* 사용자 이니셜 아이콘 */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
            <span className="text-purple-400 font-medium">{initials}</span>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-medium">{name}</h3>
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                  {role}
                </span>
                <span className="text-xs text-gray-400">
                  Trust Score: {trustScore}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-1">
                Requesting: {datasetName}
              </p>
              <p className="text-gray-400 text-sm mt-2">Purpose: {purpose}</p>
            </div>

            {/* 옵션 버튼 */}
            <button className="text-gray-400 hover:text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* 요청 시간 & 링크 */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Requested {requestTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <Link className="w-4 h-4" />
              <span>{detailsLink}</span>
            </div>
          </div>

          {/* 승인 & 거절 버튼 */}

          {approved ? (
            <div className="flex items-center gap-3 mt-4">
              <div className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center gap-2 hover:bg-green-600">
                <Check className="w-4 h-4" />
                Approved
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 mt-4">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600"
                onClick={() => {
                  setApproved(true);
                }}
              >
                <Check className="w-4 h-4" />
                Approve
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-600"
                onClick={() => {}}
              >
                <X className="w-4 h-4" />
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
