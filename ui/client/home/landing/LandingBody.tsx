interface LandingBodyProps {
  children: React.ReactNode;
}
const LandingBody = ({ children }: LandingBodyProps) => {
  return (
    <p className="mb-8 text-base font-normal text-gray-500 sm:px-16 sm:text-lg lg:text-xl xl:px-48 ">
      {children}
    </p>
  );
};

export default LandingBody;
