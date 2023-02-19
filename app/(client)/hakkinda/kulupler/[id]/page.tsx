import Image from 'next/image';
import { kulupler } from '@/constants/kulupler';
async function page({ id }: any) {
  const kulup = await kulupler.find((kulup: any) => kulup.id === id);
  return (
    <section className="flex min-h-screen    w-full flex-col items-center px-[3%] pt-[6.2rem]  sm:block  sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[10%] 2xl:px-[15%]">
      <div className="relative  float-left m-3  flex h-[29vh]  w-full max-w-[29vh] justify-center sm:h-[33vw] sm:max-h-[285px] sm:w-[33vw] sm:max-w-[285px]  ">
        <Image src={kulup?.image || ''} alt={kulup?.title || 'Kulüp'} fill />
      </div>
      <div>
        <h1 className="text-primary text-lg font-bold">{kulup?.title}</h1>
        <p className="text-base">{kulup?.vizyon}</p>
      </div>
    </section>
  );
}

export default page;

export async function generateStaticParams() {
  return kulupler.map((kulup: any) => ({ id: `${kulup.id}` }));
}
