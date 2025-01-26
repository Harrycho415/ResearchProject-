import { BeakerIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();

  return (
    <div className="w-1/4 max-w-[378px] h-screen bg-black text-white flex flex-col">
      <div className="h-[72px] border-2 border-white">
        <BeakerIcon className="size-6 text-blue-500" />
        <BeakerIcon className="size-6 text-blue-500" />
        {/* <div className="w-[56px] h-[56px] border-2 border-white ml-[14px] mt-[18px]"></div> */}
      </div>
      <div className="h-[100px] border-2 border-white">
        <div className="w-[60px] border-2 border-white">
          <div className="w-[40px] h-[40px] border border-white mt-[34px] ml-[20px]"></div>
        </div>
        {/* <div className="ml-[11px]">Profile</div>
        <div className="ml-[52px] mt-[2px]">Description</div> */}
      </div>
      <div className="h-[52px] border-2 border-white mt-auto w-full">
        <p>Help</p>
      </div>
    </div>
  );
}
