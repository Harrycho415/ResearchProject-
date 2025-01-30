import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function PostList() {
  const router = useRouter();

  return (
    <div className=" mx-auto text-black">
      <div className="flex">
        <div className="w-[180px] flex items-center">
          <UserCircleIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></UserCircleIcon>
          <div className="text-black">Name</div>
        </div>
        <div className="w-[308px] flex items-center">
          <div className="text-black">Data Name</div>
        </div>
        <div className="w-[308px] flex items-center">
          <div className="text-black">Description</div>
        </div>
        <div className="w-[295px] flex items-center">
          <EyeIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></EyeIcon>
          <div className="text-black">1502 (view counter)</div>
        </div>
      </div>
      <Card></Card>
    </div>
  );
}
