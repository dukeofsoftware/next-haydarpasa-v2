import { sözSection } from './constants';

const SozSection = () => {
  return (
    <section className="min-h-48 relative my-[2rem] flex  w-full  flex-col justify-center gap-5 border-[4px] border-primary-1 p-4 md:my-[64px] md:border-[10px] md:p-9 ">
      <p className="text-lg font-semibold italic text-primary-3 sm:text-xl">
        {sözSection.söz}
      </p>
      <span className="text-primary text-lg font-bold  sm:text-xl md:text-3xl md:font-extrabold">
        {sözSection.isim}
      </span>
    </section>
  );
};

export default SozSection;
