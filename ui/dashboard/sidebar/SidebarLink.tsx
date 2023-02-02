"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";
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
        <Link href={href} className="flex items-center ml-[4%] gap-4 px-3 py-4 rounded-full hover:bg-primary-2 duration-200">
            {icon}

            <h3 className={`text-xl text-primary-1 hover:text-primary-3/50 duration-300 ${isActive && "text-blue-600"}`}>
                {title}</h3>
        </Link>
    )
}

export default SidebarLink