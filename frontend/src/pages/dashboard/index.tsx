import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  return (
    <div className="text-white">
      <div>Hello!!!!</div>
    </div>
  );
}
