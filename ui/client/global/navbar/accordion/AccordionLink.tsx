import Link from 'next/link';
interface AccordionLinkProps {
  link: { title: string; href: string };
}
const AccordionLink = ({ link }: AccordionLinkProps) => {
  return (
    <Link
      key={link.title}
      className="md:hover:text-primary text-lg text-white  duration-200  hover:underline active:underline md:text-base md:text-primary-1 "
      href={link.href}
      prefetch={true}
    >
      {link.title}{' '}
    </Link>
  );
};

export default AccordionLink;
