import Link from 'next/link';

interface MainLinkProps {
  main: { title: string; href: string };
}
const MainLink = ({ main }: MainLinkProps) => {
  return (
    <Link
      href={main.href}
      prefetch={true}
      className="w-full px-2 text-2xl font-bold  text-white duration-300  hover:translate-x-4 md:text-lg md:text-primary-3
    "
    >
      {main.title}
    </Link>
  );
};

export default MainLink;
