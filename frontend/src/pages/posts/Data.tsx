import { useRouter } from 'next/router';
import React from 'react';
import {
  EyeIcon,
  ArrowDownTrayIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { postsExample } from '../../db/postsExample';

export default function Data({ contents }) {
  const router = useRouter();

  return (
    <div className=" w-full h-auto min-h-[66vh] bg-white">
      {/* 데이터를 UI 컴포넌트로 매핑 */}
      <div className="flex w-full border-b p-5 border-black">
        <div className="w-[80px] h-[80px] bg-slate-700 rounded-full" />
        <div className="p-4 text-black">
          <p className="font-bold mb-[4px]">{contents.userName}</p>
          <p>ID: {contents.id}</p>
        </div>
      </div>
      <div className="flex-1 text-black ml-[59px] mt-[20px] text-xl">
        <p>Title: {contents.title}</p>
      </div>
      <div className="flex text-black ml-[59px] mt-[15px] text-xs">
        <div>Published Date: {contents.publishDate}</div>
        <div className="ml-[40px]">File size {contents.fileSize}MB</div>
      </div>
      <div className="flex text-black mx-[59px] mt-[30px] text-sm">
        <div>{contents.contents}</div>
      </div>
      <div className="flex text-black ml-[59px] mt-[30px] text-sm font-bold">
        <div>Data collection method: {contents.collectionMethod}</div>
      </div>
      <div className="flex ml-[59px] mt-[30px] text-sm items-center">
        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full">
          Request Data
        </button>
        <EyeIcon className="w-[24px] h-[24px] ml-[24px] text-black"></EyeIcon>
        <p className="text-black ml-[12px]">{contents.viewCount}</p>
        <ArrowDownTrayIcon className="w-[24px] h-[24px] ml-[24px] text-black"></ArrowDownTrayIcon>
        <p className="text-black ml-[12px]">{contents.downloadCount}</p>
      </div>
      <div className="flex ml-[59px] mt-[30px] text-sm items-center">
        <button className="text-black underline underline-offset-1">
          Back to Dashboard
        </button>
        <ArrowRightEndOnRectangleIcon className="w-[18px] h-[18px] ml-[8px] text-black"></ArrowRightEndOnRectangleIcon>
      </div>
    </div>
  );
}
