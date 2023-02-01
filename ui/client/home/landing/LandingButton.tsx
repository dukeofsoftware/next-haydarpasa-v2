import Link from 'next/link';

interface LandingButtonProps {
  href: string;
  children: React.ReactNode;
}

const LandingButton = ({ href, children }: LandingButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-primary-1 py-2 px-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-primary-3 focus:ring-4 focus:ring-red-300 "
    >
      {children}
    </Link>
  );
};

export default LandingButton;
