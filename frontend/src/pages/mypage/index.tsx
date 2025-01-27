import { useRouter } from 'next/router';
import React from 'react';
import ProfileEdit from './ProfileEdit';

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white pl-[max(378px,25%)]">
      <div className="flex w-3/4 place-contents-between gap-x-10 ">
        <div className="w-[200px] h-[200px] ">
          <div className="w-full h-full bg-slate-50 rounded-full" />
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
