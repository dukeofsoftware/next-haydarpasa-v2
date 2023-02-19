import Link from 'next/link';
import Image from 'next/image';

import { logolar } from '@/constants/okul_logoları';
interface NavbarLogosProps {
  isOpen: boolean;
}

const NavbarLogos = ({ isOpen }: NavbarLogosProps) => {
  return (
    <>
      <Link
        href="/"
        className={`${
          isOpen ? 'invisible ' : 'visible'
        } max-w relative block h-[80px] w-[80px] flex-none md:hidden`}
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

export default NavbarLogos;
