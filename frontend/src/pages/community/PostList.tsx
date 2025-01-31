import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function PostList({ contents }) {
  const router = useRouter();

  return (
    <div className="w-full h-[80vh] overflow-y-auto bg-white text-black">
      {contents ? (
        contents.map((post, index) => (
          <Card
            key={post.id}
            id={post.id}
            dataName={post.dataName}
            dataDescription={post.dataDescription}
            viewcount={post.viewcount}
            className={`${index % 2 === 0 ? 'bg-blue' : 'bg-gray-100'}`}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
