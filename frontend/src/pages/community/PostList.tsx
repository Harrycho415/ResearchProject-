import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';
import { UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function PostList({ contents }) {
  const router = useRouter();

  return (
    <div className="w-full h-[80vh] overflow-y-auto bg-white text-black">
      {contents ? (
        contents.map((post, index) => <Card key={post.id} post={post} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
