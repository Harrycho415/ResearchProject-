import { useRouter } from 'next/router';
import React from 'react';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Card({
  id,
  dataName,
  dataDescription,
  viewcount,
  className,
}) {
  const router = useRouter();

  return (
    <Link href={`/posts/${id}`} className={`flex ${className}`}>
      <div className="w-[180px] flex items-center">
        <UserCircleIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></UserCircleIcon>
        <div className="text-black text-xs">Name</div>
      </div>
      <div className="w-[308px] flex items-center">
        <div className="text-black text-xs">{dataName}</div>
      </div>
      <div className="w-[308px] flex items-center pr-[30px]">
        <div className="text-black text-xs overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
          <div className="text-black text-xs">{dataDescription}</div>
        </div>
      </div>
      <div className="w-[295px] flex items-center">
        <EyeIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></EyeIcon>
        <div className="text-black text-xs">{viewcount}</div>
      </div>
    </Link>
  );
}
