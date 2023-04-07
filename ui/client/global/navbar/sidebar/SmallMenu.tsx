'use client';

import { links } from './constants';
import Accordion from '../accordion';
import { memo } from 'react';

interface SmallMenuProps {
  isOpen: boolean;
}

function SmallMenu({ isOpen }: SmallMenuProps) {
  return (
    <>
      {isOpen && (
        <div className="  max-w-screen z-30 flex h-full min-h-screen w-full flex-col bg-red-800 bg-[length:200px_100px] px-[2%] pt-[5rem] duration-500 ease-out sm:px-[4%] md:hidden  ">
          {links.map((link, index) => (
            <Accordion key={index} main={link.main} links={link.links} />
          ))}
        </div>
      )}
    </>
  );
}

export default memo(SmallMenu);
