'use client';
import { signOut } from 'next-auth/react';

import { BiLogOutCircle } from 'react-icons/bi';
const LogOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="ml-[4%] flex items-center gap-4 rounded-full px-3 py-4 duration-200 hover:bg-primary-2"
    >
      <BiLogOutCircle size={30} />
      <h3
        className={`text-xl text-primary-1 duration-300 hover:text-primary-3`}
      >
        Çıkış Yap
      </h3>
    </button>
  );
};

export default LogOut;
