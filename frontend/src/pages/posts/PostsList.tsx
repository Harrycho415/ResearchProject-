import { useRouter } from 'next/router';
import React from 'react';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Data from './Data'; // './Data'는 Data 컴포넌트의 파일 경로를 정확하게 지정해야 합니다.

export default function PostsList({ contents }) {
  const router = useRouter();

  return (
    <div className="w-full bg-white text-black">
      {contents ? <Data contents={contents} /> : <p>Loading...</p>}
    </div>
  );
}
