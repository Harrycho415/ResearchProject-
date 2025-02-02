import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function ProfileEdit() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'poqopo',
    researchField: 'Biotechnology',
    email: 'block.poqopo@gmail.com',
    labUrl: 'www.blockblock.yonsei.com',
    contactNumber: '82+ 1000000000',
    labDescription: 'Example',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-full bg-white text-black rounded-xl p-[24px]">
      <div className="mb-[24px]">
        <p className="mb-[8px]">Name</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Research Field</p>
        <input
          type="text"
          name="researchField"
          value={formData.researchField}
          onChange={handleChange}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Email</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Lab URL</p>
        <input
          type="text"
          name="labUrl"
          value={formData.labUrl}
          onChange={handleChange}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Contact Number</p>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-[24px]">
        <p className="mb-[8px]">Lab Description</p>
        <input
          type="text"
          name="labDescription"
          value={formData.labDescription}
          onChange={handleChange}
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
