import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  EyeIcon,
  ArrowDownTrayIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { postsExample } from '../../db/postsExample';
import PostsList from './PostsList';
import { viewPost } from '../../api/icp/posts';
import Data from './Data';

export default function id() {
  const router = useRouter();
  const [post, setPost] = useState();

  useEffect(() => {
    if (router.query['id']) {
      const getInfo = async () => {
        const res = await viewPost(router.query['id'] as string);
        setPost(res.post);
      };
      getInfo();
    }
  }, [router.query['id']]);

  return (
    <div className="flex items-center justify-center h-full  text-white pt-[100px]  pl-[max(378px,25%)]">
      <div className="w-5/6 bg-white">
        {post ? <Data contents={post} /> : <div />}
      </div>
    </div>
  );
}
