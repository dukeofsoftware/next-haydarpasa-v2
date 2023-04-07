import { sözSection } from './constants';

const SozSection = () => {
  return (
    <section className=" relative my-[2rem] flex  w-full  flex-col justify-center  gap-2 border-[4px] border-primary-1 p-4 sm:gap-3 md:my-[64px] md:gap-4 md:border-[10px] md:p-9 ">
      <p className="  text-[0.7rem] font-semibold italic text-primary-3 xs:text-sm sm:text-base md:text-lg ">
        {sözSection.söz}
      </p>
      <span className="text-primary   text-[0.7rem] font-bold xs:text-sm sm:text-base md:text-lg   md:font-extrabold">
        {sözSection.isim}
      </span>
    </section>
  );
};

export default SozSection;
