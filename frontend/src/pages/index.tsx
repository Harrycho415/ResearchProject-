import { useRouter } from 'next/router';
import { ClientLogin } from '@calimero-is-near/calimero-p2p-sdk';
import { getNodeUrl, getStorageApplicationId } from '../utils/node';

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white pl-[max(378px,25%)]">
      <div className="text-center">
        <div className="mb-4">
          <ClientLogin
            getNodeUrl={getNodeUrl}
            getApplicationId={getStorageApplicationId}
            sucessRedirect={() => router.push('/community')}
          />
        </div>
        <div className="bg-slate-50 w-fit p-5 rounded-xl text-black mx-auto ">
          <button
            className="cursor-pointer"
            onClick={() => router.push('/mypage')}
          >
            Click to Login
          </button>
        </div>
      </div>
    </div>
  );
}
