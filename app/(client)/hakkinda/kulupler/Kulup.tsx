import Image from 'next/image';
import Link from 'next/link';
interface KulupProps {
  kulup: {
    id: string;
    title: string;
    image: StaticImageData;
    vizyon: string;
  };
}

function Kulup({ kulup }: KulupProps) {
  return (
    <Link
      href={`/hakkinda/kulupler/${kulup.id}`}
      className="  relative m-4  flex h-full min-h-[180px] w-full max-w-[550px] grid-cols-9 flex-col   items-center  justify-center rounded-lg bg-primary-1 p-2 shadow-lg duration-300 ease-out hover:scale-[1.03]   xs:min-w-[340px] md:w-[calc(50%-2rem)] lg:grid lg:p-2 "
    >
      <div className="lg:grid-col-3 relative col-span-2 h-32 max-h-[160px] w-32 max-w-[16rem] overflow-visible rounded-full lg:h-full lg:w-full   lg:min-w-[160px] lg:-translate-x-[4.4rem] ">
        <Image src={kulup.image} alt={kulup.title} fill />
      </div>
      <div className="col-span-6 flex w-full flex-col justify-center ">
        <h1 className="py-1 text-center text-lg font-bold text-white sm:text-xl lg:text-start">
          {kulup.title}
        </h1>
        <p className="overflow-hidden text-ellipsis text-sm text-white  line-clamp-6 sm:text-sm">
          {kulup.vizyon}
        </p>
      </div>
    </Link>
  );
}

export default Kulup;
