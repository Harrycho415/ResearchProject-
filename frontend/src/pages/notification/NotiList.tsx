import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';

export default function NotiList({ contents }) {
  const router = useRouter();

  return (
    <div className="w-full  bg-white text-black">
      {contents ? (
        contents.map((noti, index) => (
          <Card
            key={noti.id} // 고유한 ID를 key로 사용
            title={noti.title} // Card에 title 전달
            contents={noti.contents} // Card에 contents 전달
            status={noti.status} // Card에 status 전달
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
