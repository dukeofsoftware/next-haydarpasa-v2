'use client';
import { useState, useEffect } from 'react';
import SmallMenu from '../sidebar/SmallMenu';
import Haberler from '../haberler';
import NavbarLogos from './NavbarLogos';
import NavbarButton from './NavbarButton';
import Sidebar from '@/ui/client/global/navbar/sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import ContainerComp from '@/ui/global/Container';
function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    await fetch(`/api/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.posts;
        setPosts(data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  return (
    <>
      <ContainerComp  classNames={`${pathname === '/' ? '' : 'mb-6'} w-full fixed top-0 z-30 flex max-h-[90px]  items-center   py-4 `}>
        <NavbarLogos  />
          <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />

      </ContainerComp>
      {isOpen && (
        <div className="sticky top-0 left-0 h-full z-40 bg-black/90 backdrop-blur-md w-full">
          <Haberler posts={posts} />
          <Sidebar setIsOpen={setIsOpen} />
        </div>
      )}

      <SmallMenu isOpen={isOpen} />
    </>
  );
}

export default Navbar;
