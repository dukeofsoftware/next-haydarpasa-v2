import Image from 'next/image';
interface FooterLogoProps {
  width?: number;
  height?: number;
  alt: string;
  src: StaticImageData;
}
const FooterLogo = ({
  width = 170,
  height = 170,
  alt,
  src,
}: FooterLogoProps) => {
  return (
    <div className=" - rounded-b-lg p-6">
      <Image src={src} alt={alt} width={width} height={height} />
      {/*bg-white   <Image
      src={logolar.okulLogo}
      alt="Okul Logosu"
      width={170}
      height={170}
    /> */}
    </div>
  );
};

export default FooterLogo;
