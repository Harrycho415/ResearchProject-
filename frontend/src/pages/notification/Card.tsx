import { useRouter } from 'next/router';
import { InboxIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Card() {
  const router = useRouter();

  return (
    <div className="p-[15px] flex">
      <div className="w-[38px]">
        <InboxIcon className="w-[24px] h-[24px]"></InboxIcon>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Message Sent</p>
        <p className="text-gray-500">Content</p>
        <div className="p-[1px] text-white bg-gray-800 flex justify-center rounded mt-[20px]">
          Pending
        </div>
      </div>
    </div>
  );
}
