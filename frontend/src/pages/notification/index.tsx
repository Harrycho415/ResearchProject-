import { useRouter } from 'next/router';
import ToggleButton from './ToggleButton';
import NotiList from './NotiList';
import { useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [selected, setSelected] = useState('sent');

  return (
    <div className=" h-screen bg-gray-900 text-white pl-[max(378px,25%)] ">
      <div className="py-[100px] w-2/3 mx-auto">
        <ToggleButton
          selected={selected}
          setSelected={setSelected}
        ></ToggleButton>
      </div>

      <div className="w-5/6 mx-auto">
        <NotiList></NotiList>
      </div>
    </div>
  );
}
