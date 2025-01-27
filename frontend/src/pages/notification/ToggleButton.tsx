// import { useRouter } from 'next/router';
// import React from 'react';

// export default function RoggleButton() {
//   const router = useRouter();

//   return (
//     <div className="bg-slate-700 p-2 w-full flex">
//       <button className=" w-1/2 bg-white text-black">Sent</button>
//       <button className=" w-1/2 bg-black text-white">Received</button>
//     </div>
//   );
// }

import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function ToggleButton({ selected, setSelected }) {
  const router = useRouter();

  return (
    <div className="bg-slate-700 p-2 w-full flex">
      <button
        className={`w-1/2 ${selected === 'sent' ? 'bg-black text-white' : 'bg-white text-black'}`}
        onClick={() => setSelected('sent')}
      >
        Sent
      </button>
      <button
        className={`w-1/2 ${selected === 'received' ? 'bg-black text-white' : 'bg-white text-black'}`}
        onClick={() => setSelected('received')}
      >
        Received
      </button>
    </div>
  );
}
