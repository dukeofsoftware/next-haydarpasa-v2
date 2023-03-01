import SectionTitle from '@/ui/client/global/SectionTitle';

const MezunlarSection = () => {
  return (
    <section>
      <div className="my-6 flex flex-col gap-4">
        <SectionTitle>Mezunlarımız</SectionTitle>
        <p className="mb-5 text-[0.6rem] leading-relaxed text-gray-600 xs:text-sm sm:text-base">
          Haydarpaşa ismini daha önce duyduysanız muhtemelen mezunlarımızıda
          duymuşsunuzdur. Haydarpaşa Lisesi başarılı insanlar yetiştirmektedir.
          Muhtemeln en azından birkaçının ismini daha önce duymuşsunuzdur.
        </p>
        <div className="flex flex-wrap gap-4"></div>
      </div>
    </section>
  );
};

export default MezunlarSection;
