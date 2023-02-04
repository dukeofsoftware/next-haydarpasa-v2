'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { navs } from './constants';

import KesfetLink from './KesfetLink';
function KesfetNavbar() {
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    if (pathName?.includes('kisaca')) {
      setName('kısaca');
      setIsActive('kisaca');
    }
    if (pathName?.includes('sayilarla')) {
      setName('sayılarla');
      setIsActive('sayilarla');
    }
    if (pathName?.includes('fotograflarla')) {
      setName('fotoğraflarla');
      setIsActive('fotograflarla');
    }
    if (pathName?.includes('sozlerle')) {
      setName('sözlerle');
      setIsActive('sozlerle');
    }
  }, [pathName]);
  return (
    <nav className="flex min-h-[300px] w-full flex-col items-center justify-end gap-7 border-b-2 border-primary-5 bg-primary-5 pt-24">
      <div>
        <h1 className="text-xl font-extrabold text-white md:text-2xl xl:text-3xl">
          Haydarpaşa&apos;yı <span className="text-primary-3">{name}</span> keşfet
        </h1>
      </div>
      <div className="flex flex-wrap justify-center sm:flex-nowrap md:flex-row md:gap-1">
        {navs.map((nav) => (
          <KesfetLink
            key={nav.id}
            name={nav.name}
            href={nav.href}
            active={nav.active}
            icon={nav.icon}
            isActive={isActive}
          />
        ))}
      </div>
    </nav>
  );
}

export default KesfetNavbar;
