interface SectionTitleProps {
  children: React.ReactNode;
  classNames?: string;
}

const SectionTitle = ({ children, classNames }: SectionTitleProps) => {
  return (
    <h4
      className={`${classNames} py-4 text-center  text-xl font-extrabold uppercase text-primary-3 xl:text-2xl `}
    >
      {children}
    </h4>
  );
};

export default SectionTitle;
