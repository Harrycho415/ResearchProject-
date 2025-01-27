import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';

export default function NotiList() {
  const router = useRouter();

  return (
    <div className="w-full bg-white text-black">
      <Card></Card>
    </div>
  );
}
