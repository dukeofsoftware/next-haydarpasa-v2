import Kulup from './Kulup';
import { kulupler } from '@/constants/kulupler';
import SectionTitle from '@/ui/client/global/SectionTitle';
import ContainerComp from '@/ui/global/Container';
function page() {
  return (
    <ContainerComp classNames="pt-24 min-h-screen">
      <SectionTitle>Kulüplerimiz</SectionTitle>
      <div className="flex w-full flex-wrap justify-center ">
        {kulupler.map((klup, index) => (
          <Kulup key={index} kulup={klup} />
        ))}
      </div>
    </ContainerComp>
  );
}

export default page;
