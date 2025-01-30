import { useRouter } from 'next/router';
import React from 'react';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Data from './Data'; // './Data'는 Data 컴포넌트의 파일 경로를 정확하게 지정해야 합니다.

export default function PostsList({ contents }) {
  const router = useRouter();

  return (
    <div className="w-full bg-white text-black">
      {contents ? (
        contents.map((posts) => (
          <Data
            key={posts.id}
            username={posts.username}
            title={posts.title}
            publishDate={posts.publishDate}
            fileSize={posts.fileSize}
            description={posts.description}
            collectionMethod={posts.collectionMethod}
            viewCount={posts.viewCount}
            downloadCount={posts.downloadCount}
            id={posts.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
