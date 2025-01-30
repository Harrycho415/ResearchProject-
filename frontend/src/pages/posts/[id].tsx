import { useRouter } from 'next/router';
import React from 'react';
import {
  EyeIcon,
  ArrowDownTrayIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { postsExample } from '../../db/postsExample';
import PostsList from './postsList';

export default function id({
  username,
  id,
  title,
  publishDate,
  fileSize,
  description,
  collectionMethod,
  viewCount,
  downloadCount,
}) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-full bg-gray-900 text-white pt-[100px]  pl-[max(378px,25%)]">
      <div className="w-5/6 h-5/6 bg-white">
        <PostsList contents={postsExample} />
      </div>
    </div>
  );
}
