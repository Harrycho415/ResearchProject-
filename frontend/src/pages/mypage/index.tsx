import { useRouter } from 'next/router';
import React from 'react';
import ProfileEdit from './ProfileEdit';

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white pl-[min(378px,25%)]">
      <div className="flex w-3/4 place-contents-between gap-x-10 ">
        <div className="w-[200px] h-[200px] bg-slate-50 rounded-full">
          <img
            src="/profile.png"
            alt="loading..."
            className="w-full h-full -translate-y-[32px] "
          />
          <p className="mt-5 p-2 text-center text-black font-bold bg-white rounded-xl">
            Edit Profile
          </p>
        </div>
        <div className="flex-1">
          <ProfileEdit />
        </div>
      </div>
    </div>
  );
}
