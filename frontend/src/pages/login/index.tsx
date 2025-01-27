import { useRouter } from 'next/router';
import Login from '../../components/login/Login';
import LoginBox from '../../components/login/LoginBox';

export default function Index() {
  const router = useRouter();

  return (
    // <div className="flex justify-center items-center">
    <div className="flex justify-center items-center w-full">
      <LoginBox></LoginBox>
    </div>
  );
}
