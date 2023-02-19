import Counter from './Counter';
import Link from 'next/link';
import SectionTitle from '@/ui/client/global/SectionTitle';
function Hakkinda() {
  return (
    <section className="  flex min-h-[700px] w-full flex-col justify-center gap-5 bg-white  p-5  px-[1%] md:px-[64px] xl:px-[128px]">
      <SectionTitle classNames="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-primary">
        Haydarpaşa Hakkında
      </SectionTitle>
      <p className=" text-center text-lg sm:text-xl xl:text-2xl">
        Akademik başarı elde edip sosyal becerilerini geliştirebileceğin bir
        ortam
      </p>
      <div className="flex w-full justify-evenly">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="">Kuruldu</p>
          <Counter
            from={0}
            to={1934}
            styles="font-bold text-base md:text-xl text-primary"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="">Öğrenci Sayısı</p>
          <Counter from={0} to={780} styles="font-bold text-xl text-primary" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="">lorem</p>
          <Counter from={0} to={1934} styles="font-bold text-xl text-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Link
          href="kesfet/sayilarla"
          className="mt-5 inline-flex h-[40px] w-[300px] items-center justify-center  rounded-md bg-primary-1 text-center text-xl font-extrabold text-white shadow-sm"
        >
          Sayılarla Haydarpaşa
        </Link>
      </div>
    </section>
  );
}

export default Hakkinda;
