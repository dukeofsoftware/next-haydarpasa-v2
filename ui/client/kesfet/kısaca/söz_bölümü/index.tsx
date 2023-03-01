import { sözSection } from './constants';

const SozSection = () => {
  return (
    <section className=" relative my-[2rem] flex  w-full  flex-col justify-center  gap-2 sm:gap-3 md:gap-4 border-[4px] border-primary-1 p-4 md:my-[64px] md:border-[10px] md:p-9 ">
      <p className="  text-[0.7rem] xs:text-sm sm:text-base md:text-lg font-semibold italic text-primary-3 ">
        {sözSection.söz}
      </p>
      <span className="text-primary   text-[0.7rem] xs:text-sm sm:text-base md:text-lg font-bold   md:font-extrabold">
        {sözSection.isim}
      </span>
    </section>
  );
};

export default SozSection;
