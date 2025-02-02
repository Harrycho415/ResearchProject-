// DefaultLayout.tsx
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import React from 'react';
import { useEffect } from 'react';
import { getJWTObject } from '../utils/storage';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  let jwtObject = getJWTObject();
  useEffect(() => {
    jwtObject = getJWTObject();
  }, [children]);

  return (
    <div className="bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400">
      <Sidebar></Sidebar>
      <div className="w-full h-full ">{children}</div>
    </div>
  );
}
