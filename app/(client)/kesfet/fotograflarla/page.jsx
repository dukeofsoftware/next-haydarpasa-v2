import FotograflarSection from '@/ui/client/kesfet/fotograflarla/FotograflarSection';
import ContainerComp from '@/ui/global/Container';
import SectionTitle from '@/ui/client/global/SectionTitle';
function page() {
  return (
    <ContainerComp classNames=" mt-12 flex flex-col gap-3 w-full items-center">
      <div className="flex flex-col gap-3 w-full">
        <SectionTitle className="font-bold text-2xl text-primary ">Haydarpaşa&apos;dan kareler</SectionTitle>
        <p className="text-gray-900 leading-relaxed text-lg ">Haydarpaşa&apos;da günler hızlı ve eğlenceli geçer. Bir gün okulun bahçesinde dolaşırsınız bazen tenis kortunda tenis oynarsınız bazen de çeşitli etkinliklere katılırsınız. Münazara ve MUN gibi etkinliklerde iletişim ve ingilizce konuşma yeteneklerinizi geliştirip yeni insanlarla tanışırsınız. Aynı zamanda  çeşitli konferans ve yarışmalara katılabilirsiniz. </p>
      </div>
      <FotograflarSection />
    </ContainerComp>)
}

export default page;
