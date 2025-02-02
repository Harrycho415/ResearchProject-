import { useRouter } from 'next/router';
import PostList from './PostList';
import { postExample } from '../../db/postExample';
import { viewPosts } from '../../api/icp/posts';
import { useState, useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  // const [posts, setPosts] = useState(postExample);

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const res = await viewPosts();
  //     setPosts(res.posts);
  //   };
  //   getInfo();
  // }, []);

  return (
    <div className=" h-screen text-white pt-[100px] pl-[min(378px,25%)] ">
      <div className=" bg-white w-5/6 mx-auto text-black">
        <PostList contents={postExample}></PostList>
      </div>
    </div>
  );
}
