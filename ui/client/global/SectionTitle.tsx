interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h4 className="my-10 text-center text-3xl font-bold text-white">
      {children}
    </h4>
  );
};

export default SectionTitle;
