import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';
export default function PostList() {
  const router = useRouter();

  return (
    <div className=" mx-auto text-black">
      <Card></Card>
    </div>
  );
}
