import Image from "next/image";
interface HakkindaSectionProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  content: string;
}
const HakkindaSection = ({title,images,content}:HakkindaSectionProps) => {
  return (
    <section className="z-20 flex-col xl:flex-row flex min-h-[100px] bg-white w-full mt-[90px] rounded-md">
    <div className="basis-2/3 w-full px-2 md:px-6 py-5 ">
      {/* Başkık */}
      <h1 className="text-center  text-primary text-3xl font-bold mb-4 ">
        {title}
      </h1>
      {/* İçerik */}
      <p
        className="text-[14px] md:text-[15px] lg:text-[17.5px] leading-relaxed
"
      >
      {content}
      </p>
    </div>
{/* Resimler */}
    <div className="basis-1/3 p-5 flex flex-col items-center justify-center gap-2">
      <div className="h-[230px] w-full relative md:h-[300px] md:w-[540px]">
        <Image src={images[0].src} fill alt={images[0].alt} />
      </div>
      <div className="flex  w-full justify-center">
        <div className=" relative h-[230px] w-[50%] md:h-[200px]  md:w-[264px]">
          <Image src={images[1].src} fill alt={images[1].alt}/>
        </div>
        <div className=" relative h-[230px] w-[50%]  md:h-[200px]  md:w-[264px]">
          <Image src={images[2].src} fill alt={images[2].alt} />
        </div>
      </div>
    
    </div>
  </section>
  )
}

export default HakkindaSection