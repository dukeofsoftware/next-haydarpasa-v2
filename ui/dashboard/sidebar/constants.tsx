import { FaBeer, FaUserFriends } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { BsCalendarEventFill } from 'react-icons/bs';

export const sidebarLinks = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <FaBeer />,
  },
  {
    title: 'Haberler',
    href: '/dashboard/haberler',
    icon: <BiNews />,
  },
  {
    title: 'Etkinlikler',
    href: '/dashboard/etkinlikler',
    icon: <BsCalendarEventFill />,
  },

  {
    title: 'Tanitim',
    href: '/dashboard/tanitim',
    icon: <FaUserFriends />,
  },
];
