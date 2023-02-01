'use client';
import { logolar } from '@/constants/okul_logoları';

import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { links } from './constants';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../accordion';

interface SmallMenuProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

function SmallMenu({ isOpen, setIsOpen }: SmallMenuProps) {
  return (
    <div>
      <div
        className={`fixed z-40 flex max-h-[90px] w-full items-center justify-between  px-[4%] py-4 md:hidden ${
          isOpen ? 'visible' : ' invisible'
        }`}
      >
        <Link
          href="/"
          className="relative block h-[80px] w-[80px] flex-none  md:hidden "
        >
          <Image src={logolar.beyazHaydarpasa} alt="okul logosu" />
        </Link>
        <div
          className={`flex h-full w-full   items-center justify-end ${
            isOpen ? '' : ''
          } `}
        >
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`in-ease-out flex max-w-[150px]  items-center justify-center rounded-full bg-red-700	 p-3  transition-all duration-300 active:bg-red-800 md:w-full md:gap-2 md:py-3 ${
              isOpen ? ' bg-white' : ''
            }`}
          >
            <IconContext.Provider value={{ color: 'white' }}>
              <div
                className={`in-ease-out duration-300  ${
                  isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`}
              >
                <AiOutlineClose size={24} />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="min-w-screen z-50 flex h-full min-h-screen w-full flex-col bg-red-800 bg-[length:200px_100px] px-[4%] pt-[5rem] duration-500 ease-out md:hidden  ">
          {links.map((link, index) => (
            <Accordion key={index} main={link.main} links={link.links} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SmallMenu;
