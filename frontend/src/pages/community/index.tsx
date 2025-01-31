import { useRouter } from 'next/router';
import PostList from './PostList';
import { postExample } from '../../db/postExample';
export default function Index() {
  const router = useRouter();

  return (
    <div className=" h-screen text-white pt-[100px] pl-[max(378px,25%)] ">
      <div className=" bg-white w-5/6 mx-auto text-black">
        <PostList contents={postExample}></PostList>
      </div>
    </div>
  );
}
