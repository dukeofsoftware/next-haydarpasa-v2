import Image from 'next/image';
interface FotoItemProps {
  src: StaticImageData | string;
  alt: string;
  title: string;
}
const FotoItem = ({ src, alt, title }: FotoItemProps) => {
  return (
    <div className=" relative  col-span-3 flex h-[300px] flex-col gap-3 sm:h-[500px]">
      <div className="relative h-[88%] w-full">
        <Image src={src} alt={alt} fill />
      </div>
      <p className=" text-relaxed pt-1  pl-1 text-sm sm:text-base ">
        {title}
      </p>
    </div>
  );
};

export default FotoItem;
