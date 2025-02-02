import { useRouter } from 'next/router';
import ToggleButton from './ToggleButton';
import NotiList from './NotiList';
import { useState } from 'react';
import { sentExample } from '../../db/sentExample';
import { receivedExample } from '../../db/receivedExample'; // receivedExample도 import

export default function Index() {
  const router = useRouter();
  const [selected, setSelected] = useState('sent'); // 초기 상태는 'sent'

  return (
    <div className="h-screen bg-gray-900 text-white pl-[min(378px,25%)]">
      <div className="py-[100px] w-2/3 mx-auto">
        <ToggleButton
          selected={selected}
          setSelected={setSelected}
        ></ToggleButton>
      </div>

      <div className="w-5/6 mx-auto h-2/3 overflow-y-scroll">
        {/* 조건에 따라 NotiList에 전달되는 데이터 변경 */}
        <NotiList
          contents={selected === 'sent' ? sentExample : receivedExample}
        ></NotiList>
      </div>
    </div>
  );
}
