'use client';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

type UserProps = {
  name: string;
  email: string;
  image: string;
};

export default function Logged({ user }: { user: UserProps }) {
  return (
    <li className='flex gap-8 items-center'>
      <Link href='/dashboard'>
        <a>
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className='rounded-full'
          />
        </a>
      </Link>
      <button
        className='text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25'
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </li>
  );
}
