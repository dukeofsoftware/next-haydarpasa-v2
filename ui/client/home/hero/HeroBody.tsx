interface HeroBodyProps {
  children: React.ReactNode;
}
const HeroBody = ({ children }: HeroBodyProps) => {
  return <p className="mb-12 text-lg text-gray-500  ">{children}</p>;
};

export default HeroBody;
