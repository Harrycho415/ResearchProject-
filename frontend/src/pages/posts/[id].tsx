import { useRouter } from 'next/router';
import React from 'react';
import {
  EyeIcon,
  ArrowDownTrayIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white pt-[100px]  pl-[max(378px,25%)]">
      <div className="w-5/6 h-5/6 bg-white">
        <div className="flex w-full border-b p-5 border-black">
          <div className="w-[80px] h-[80px] bg-slate-700 rounded-full" />
          <div className="p-4 text-black">
            <p className="font-bold mb-[4px]">User 1 day ago</p>
            <p>ID</p>
          </div>
        </div>
        <div className="flex-1 text-black ml-[59px] mt-[20px] text-xl">
          <p>Title</p>
        </div>
        <div className="flex text-black ml-[59px] mt-[4px] text-xs">
          <div>Published Date: 01/01/2025</div>
          <div className="ml-[40px]">File size 30MB</div>
        </div>
        <div className="flex text-black ml-[59px] mr-[220px] mt-[10px] text-sm">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br></br> <br></br> Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        </div>
        <div className="flex text-black ml-[59px] mr-[220px] mt-[15px] text-sm font-bold">
          <div>Data collection method: Unknown</div>
        </div>
        <div className="flex ml-[59px] mt-[30px] text-sm items-center">
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full">
            Request Data
          </button>
          <EyeIcon className="w-[24px] h-[24px] ml-[24px] text-black"></EyeIcon>
          <p className="text-black ml-[12px]">1502</p>
          <ArrowDownTrayIcon className="w-[24px] h-[24px] ml-[24px] text-black"></ArrowDownTrayIcon>
          <p className="text-black ml-[12px]">1502</p>
        </div>
        <div className="flex ml-[59px] mt-[30px] text-sm items-center">
          <button className="text-black underline underline-offset-1">
            Back to Dashboard
          </button>
          <ArrowRightEndOnRectangleIcon className="w-[18px] h-[18px] ml-[8px] text-black"></ArrowRightEndOnRectangleIcon>
        </div>
      </div>
    </div>
  );
}
