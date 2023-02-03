import { sidebarLinks } from './constants';
import LogOut from './LogOut';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <aside className="l-0 sticky h-screen w-[16vw] flex-none border-r-2">
      {sidebarLinks.map((link) => (
        <SidebarLink
          href={link.href}
          key={link.href}
          title={link.title}
          icon={link.icon}
        />
      ))}
      <LogOut />
    </aside>
  );
};

export default Sidebar;
