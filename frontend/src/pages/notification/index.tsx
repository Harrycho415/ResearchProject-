import { useRouter } from 'next/router';
import ToggleButton from './ToggleButton';
import NotiList from './NotiList';

export default function Index() {
  const router = useRouter();

  return (
    <div className=" h-screen bg-gray-900 text-white pl-[max(378px,25%)] ">
      <div className="py-[100px] w-2/3 mx-auto">
        <ToggleButton></ToggleButton>
      </div>
      <div className="w-5/6 mx-auto">
        <NotiList></NotiList>
      </div>
    </div>
  );
}
