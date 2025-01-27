import { BeakerIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export default function Layout() {
  const router = useRouter();

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-[72px] bg-gray-800 text-white z-50 flex items-center px-4 shadow-md">
        <BeakerIcon className="w-6 h-6 text-blue-500 mr-2" />
        <h1 className="text-lg font-bold">My Application</h1>
      </header>

      {/* Sidebar */}
      <div className="fixed top-[72px] left-0 w-1/4 max-w-[378px] h-[calc(100vh-72px)] bg-black text-white flex flex-col z-40">
        <div className="h-[72px] border-2 border-white flex items-center justify-center">
          <BeakerIcon className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex-1 border-2 border-white">
          <div className="w-[60px] border-2 border-white mx-auto mt-6">
            <div className="w-[40px] h-[40px] border border-white mt-[10px] ml-[10px]"></div>
          </div>
        </div>
        <div className="h-[52px] border-2 border-white w-full flex items-center justify-center">
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}
