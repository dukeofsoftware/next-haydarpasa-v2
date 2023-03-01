import Image from 'next/image';
interface FotografCompProps {
  src: StaticImageData;
  alt: string;
}
const FotografComp = ({ src, alt }: FotografCompProps) => {
  return (
    <div className="ratio relative aspect-video	  w-full p-2 md:h-[500px] lg:w-[700px]">
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default FotografComp;
