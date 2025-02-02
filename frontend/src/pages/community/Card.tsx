import { useRouter } from 'next/router';
import React from 'react';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Card({ post }) {
  const router = useRouter();
  const color = post.id % 2 == 0 ? 'bg-slate-200' : '';
  return (
    <Link
      href={`/posts/${post.id}`}
      className={`flex ${post.className} ${color} justify-evenly`}
    >
      <div className="w-[180px] flex items-center test-start">
        <UserCircleIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></UserCircleIcon>
        <div className="text-black text-xs">{post.userName}</div>
      </div>
      <div className="w-[308px] flex items-center text-start">
        <div className="text-black text-xs">{post.title}</div>
      </div>
      <div className="w-[308px] flex items-center pr-[30px] ">
        <div className="text-start text-black text-xs overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
          <div className="text-black text-xs">{post.contents}</div>
        </div>
        <span>...</span>
      </div>
      <div className="w-[295px] flex items-center text-start">
        <EyeIcon className="w-[24px] h-[24px] mx-[8px] my-[12px]"></EyeIcon>
        <div className="text-black text-xs">{post.viewCount}</div>
      </div>
    </Link>
  );
}
