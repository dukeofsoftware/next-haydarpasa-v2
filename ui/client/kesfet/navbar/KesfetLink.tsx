import { IconContext } from "react-icons";
import Link from "next/link"
interface KesfetLinkProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  active: string;
  isActive: string;
}

function KesfetLink({ name, href, icon, active, isActive }:KesfetLinkProps) {
  return (
    <Link href={href} className={`w-1/2 sm:w-auto flex flex-col items-center justify-center   p-3 min-h-[120px]  sm:min-w-[170px] ${active === isActive ? "bg-white text-primary-3 fill-primary-3" : "group  hover:text-primary-3  hover:bg-white bg-primary-3 text-white active:bg-white   active:text-primary-3 duration-300  fill-white "} `}>

      <IconContext.Provider value={{className: "h-12 w-12 fill-inherit group-hover:fill-red-800 group-active:fill-red-800 duration-300 in-ease-out " }}>
        {icon}
      </IconContext.Provider>
      <h1 className="text-lg text-inherit font-bold tracking-wider uppercase">{name}</h1>

    </Link>
  )
}

export default KesfetLink