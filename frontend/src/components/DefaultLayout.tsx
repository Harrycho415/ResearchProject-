// DefaultLayout.tsx
import { useRouter } from 'next/router';
import Menu from './Menu';
import React from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();

  return (
    <div className="">
      <Menu></Menu>
      <div className="w-full h-full ">{children}</div>
    </div>
  );
}
