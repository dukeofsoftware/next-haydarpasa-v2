'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Accordion from '../accordion';
import { links, sidebarVariants } from './constants';
import { logolar } from '@/constants/okul_logoları';
import Image from 'next/image';
import CloseButton from './CloseButton';

interface SidebarProps {
  setIsOpen: (state: boolean) => void;
}
function Sidebar({ setIsOpen }: SidebarProps) {
  return (
    <motion.div
      variants={sidebarVariants}
      initial={'hidden'}
      animate={'show'}
      className="fixed  right-0 z-50 hidden min-h-screen w-1/3 max-w-[390px] overflow-y-auto bg-white  px-[2%] md:block"
    >
      <div className="my-6 flex items-center justify-between ">
        <Link href="/" className="relative">
          <Image src={logolar.okulLogo} alt="Ana Sayfaya Dön" />
        </Link>
        <CloseButton setIsOpen={setIsOpen} />
      </div>
      {links.map((link, index) => (
        <Accordion key={link.main.title} main={link.main} links={link.links} />
      ))}
    </motion.div>
  );
}

export default Sidebar;
