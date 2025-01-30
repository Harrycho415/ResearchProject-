import {
  LockClosedIcon,
  UserCircleIcon,
  HomeIcon,
  BellAlertIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu({ jwtObject }) {
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
        <div className="h-[72px] flex items-center justify-between px-4">
          <Link href="/">
            <LockClosedIcon className="w-14 h-14"></LockClosedIcon>
          </Link>
          <Bars3Icon className="w-[46px] h-[46px]"></Bars3Icon>
        </div>
        <div className="h-[100px] flex items-center">
          <UserCircleIcon className="w-[40px] h-[40px] ml-[20px] mr-[11px]"></UserCircleIcon>
          {jwtObject ? (
            <div>
              <p>Profile</p>
              <p>{jwtObject?.executor_public_key.slice(0, 20)}...</p>
            </div>
          ) : (
            <div>
              <p>Profile</p>
              <p>Description</p>
            </div>
          )}
        </div>
        <div className="h-[44px] flex items-center">
          <HomeIcon className="w-[24px] h-[24px] ml-[22px] mr-[16px]"></HomeIcon>
          <p>Dashboard</p>
        </div>
        <Link href="/mypage" className="h-[44px] flex items-center">
          <UserCircleIcon className="w-[24px] h-[24px] ml-[22px] mr-[16px]"></UserCircleIcon>
          <p>My Page</p>
        </Link>
        <Link href="/community" className="h-[44px] flex items-center">
          <UserGroupIcon className="w-[24px] h-[24px] ml-[22px] mr-[16px]"></UserGroupIcon>
          <p>Community</p>
        </Link>
        <Link href="/notification" className="h-[44px] flex items-center">
          <BellAlertIcon className="w-[24px] h-[24px] ml-[22px] mr-[16px]"></BellAlertIcon>
          <p>Notification</p>
        </Link>
        <div className="h-[52px] mt-auto w-full flex items-center">
          <QuestionMarkCircleIcon className="w-[24px] h-[24px] ml-[22px] mr-[16px]"></QuestionMarkCircleIcon>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}
