import { sidebarLinks } from './constants';
import LogOut from './LogOut';
import SidebarLink from './SidebarLink';


const Sidebar = () => {

  return (
    <aside className="w-[16vw] fixed border-r-2 h-screen">
       {sidebarLinks.map((link) => (
        <SidebarLink href={link.href} key={link.href}  title={link.title} icon={link.icon}/>
       ))}
       <LogOut/>
    </aside>
  )
}

export default Sidebar