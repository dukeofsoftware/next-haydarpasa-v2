'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
interface SidebarLinkProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
}
const SidebarLink = ({ href, title, icon }: SidebarLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === 'href') {
      setIsActive(true);
    }
  }, [pathname]);
  return (
    <Link
      href={href}
      className="ml-[4%] flex items-center gap-4 rounded-full px-3 py-4 duration-200 hover:bg-primary-2"
    >
      {icon}

      <h3
        className={`text-xl text-primary-1 duration-300 hover:text-primary-3/50 ${
          isActive && 'text-blue-600'
        }`}
      >
        {title}
      </h3>
    </Link>
  );
};

export default SidebarLink;
