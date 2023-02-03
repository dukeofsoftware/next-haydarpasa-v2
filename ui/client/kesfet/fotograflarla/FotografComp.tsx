import Image from 'next/image';
interface FotografCompProps {
  src: StaticImageData;
  alt: string;
}
const FotografComp = ({ src, alt }: FotografCompProps) => {
  return (
    <div className="relative h-[500px] w-full p-2 lg:w-[700px]">
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default FotografComp;
