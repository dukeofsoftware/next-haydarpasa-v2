interface HeroBodyProps {
  children: React.ReactNode;
}
const HeroBody = ({ children }: HeroBodyProps) => {
  return (
    <p className="mb-5 text-sm text-gray-500 sm:text-base md:mb-12 md:text-lg  ">
      {children}
    </p>
  );
};

export default HeroBody;
