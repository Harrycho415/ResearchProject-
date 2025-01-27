import { useRouter } from 'next/router';
import PostList from './PostList';
export default function Index() {
  const router = useRouter();

  return (
    <div className=" h-screen text-white pt-[100px] pl-[max(378px,25%)] ">
      <div className=" bg-white w-5/6 mx-auto text-black">
        <PostList></PostList>
      </div>
    </div>
  );
}
