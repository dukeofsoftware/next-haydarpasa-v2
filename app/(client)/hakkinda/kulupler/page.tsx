import Kulup from './Kulup';
import { kulupler } from '@/constants/kulupler';
function page() {
  return (
    <section className="min-h-screen w-full px-[3%] pt-12 sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[7%] ">
      <h1 className="text-primary text-center text-2xl font-extrabold uppercase">
        Kulüplerimiz
      </h1>
      <div className="flex w-full flex-wrap justify-center ">
        {kulupler.map((klup, index) => (
          <Kulup key={index} kulup={klup} />
        ))}
      </div>
    </section>
  );
}

export default page;
