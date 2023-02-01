interface ContainerProps {
  children: React.ReactNode;
  classNames?: string;
}

const ContainerComp = ({ children, classNames }: ContainerProps) => {
  return (
    <section
      className={`px-[3%] sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[8%] 2xl:px-[12%]  ${classNames}`}
    >
      {children}
    </section>
  );
};

export default ContainerComp;
