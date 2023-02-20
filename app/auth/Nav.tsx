import Link from 'next/link';
import Login from './Login';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Logged from './Logged';

async function Nav() {
  const session = await getServerSession(authOptions);
  console.log('session', session);
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link className='font-bold text-lg' href={'/'}>
        Send it.
      </Link>
      <ul className='flex items-center gap-6'>
        {!session?.user && <Login />}
        {session?.user && <Logged session={session.user} />}
      </ul>
    </nav>
  );
}

export default Nav;
