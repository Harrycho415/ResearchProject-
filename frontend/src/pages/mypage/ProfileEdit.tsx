import { useRouter } from 'next/router';
import React from 'react';

export default function ProfileEdit() {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-white text-black rounded-xl p-[24px]">
      <div className="mb-[24px]">
        <p className="mb-[8px]">Name</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Research Field</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Email</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Lab URL</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Contact Number</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Lab Description</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div>
        <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded w-full">
          Edit
        </button>
      </div>
    </div>
  );
}
