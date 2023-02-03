import { IconContext } from 'react-icons';
import Link from 'next/link';
interface KesfetLinkProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  active: string;
  isActive: string;
}

function KesfetLink({ name, href, icon, active, isActive }: KesfetLinkProps) {
  return (
    <Link
      href={href}
      className={`flex min-h-[120px] w-1/2 flex-col items-center justify-center   p-3 sm:w-auto  sm:min-w-[170px] ${
        active === isActive
          ? 'bg-white fill-primary-3 text-primary-3'
          : 'group  bg-primary-3  fill-white text-white duration-300 hover:bg-white   hover:text-primary-3 active:bg-white  active:text-primary-3 '
      } `}
    >
      <IconContext.Provider
        value={{
          className:
            'h-12 w-12 fill-inherit group-hover:fill-red-800 group-active:fill-red-800 duration-300 in-ease-out ',
        }}
      >
        {icon}
      </IconContext.Provider>
      <h1 className="text-lg font-bold uppercase tracking-wider text-inherit">
        {name}
      </h1>
    </Link>
  );
}

export default KesfetLink;
