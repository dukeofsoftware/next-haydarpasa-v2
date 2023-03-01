import Link from 'next/link';
import Image from 'next/image';
import {memo} from "react"
import { logolar } from '@/constants/okul_logoları';

const NavbarLogos = () => {
  console.log("render  navbar logos")
  return (
    <>
      <Link 
        href="/"
        className={` max-w relative block h-[60px] w-[60px] flex-none md:hidden`}
      >
        <Image src={logolar.okulLogoTrans} alt="okul logosu" />
      </Link>
      <Link
        href="/"
        className=" relative hidden h-full w-[29%] max-w-[200px] flex-none md:block "
      >
        <Image src={logolar.okulLogo} alt="okul logosu" />
      </Link>
    </>
  );
};

export default memo(NavbarLogos);
