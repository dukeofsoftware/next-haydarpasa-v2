import Image from 'next/image';
interface HakkindaSectionProps {
  title: string;
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
  content: string;
}
const HakkindaSection = ({ title, images, content }: HakkindaSectionProps) => {
  return (
    <section className="mt-[90px] flex min-h-[100px] w-full flex-col rounded-md bg-white xl:flex-row">
      <div className="w-full basis-2/3 px-2 py-5 md:px-6 ">
        {/* Başkık */}
        <h2 className="text-primary  mb-4 text-center text-3xl font-bold ">
          {title}
        </h2>
        {/* İçerik */}
        <p
          className="text-[14px] leading-relaxed md:text-[15px] lg:text-[17.5px]
"
        >
          {content}
        </p>
      </div>
      {/* Resimler */}
      <div className="flex basis-1/3 flex-col items-center justify-center gap-2 p-5">
        <div className="relative h-[230px] w-full md:h-[300px] md:w-[540px]">
          <Image src={images[0].src} fill alt={images[0].alt} />
        </div>
        <div className="flex  w-full justify-center">
          <div className=" relative h-[230px] w-[50%] md:h-[200px]  md:w-[264px]">
            <Image src={images[1].src} fill alt={images[1].alt} />
          </div>
          <div className=" relative h-[230px] w-[50%]  md:h-[200px]  md:w-[264px]">
            <Image src={images[2].src} fill alt={images[2].alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HakkindaSection;
