import Image from 'next/image';
interface OgretmenProps {
  ogretmenSRC: StaticImageData;
  isim: string;
  branş: string;
}
function Ogretmen({ ogretmenSRC, isim, branş }: OgretmenProps) {
  return (
    <div className="group  relative flex  h-[25vh] max-h-[300px] min-h-[200px] min-w-[190px] max-w-[450px] items-end sm:h-[27vw] sm:w-[44vw]   md:w-[40vh] ">
      <Image src={ogretmenSRC} alt={isim} fill />
      <div className="opactiy-100 z-10 flex w-full flex-col justify-center gap-2 bg-primary-1/90 px-3 py-1 text-white transition-all duration-200  ease-in-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <h1 className="font-bold">{isim}</h1>
        <h1>{branş}</h1>
      </div>
    </div>
  );
}

export default Ogretmen;
