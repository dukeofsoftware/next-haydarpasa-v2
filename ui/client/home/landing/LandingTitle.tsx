interface LandingTitleProps {
  children: React.ReactNode;
}

const LandingTitle = ({ children }: LandingTitleProps) => {
  return (
    <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl ">
      {children}
    </h2>
  );
};

export default LandingTitle;
