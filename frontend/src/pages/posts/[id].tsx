import { useRouter } from 'next/router';
import React from 'react';

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white pt-[100px]  pl-[max(378px,25%)]">
      <div className="w-5/6 h-5/6 bg-white">
        <div className="flex w-full border-b p-5 border-black">
          <div className="w-[80px] h-[80px] bg-slate-700 rounded-full" />
          <div className="p-4 text-black">
            <p>dsfaasdf</p>
            <p>sdafasdf</p>
          </div>
        </div>

        <div className="flex-1 text-center "></div>
      </div>
    </div>
  );
}
