import Image from 'next/image'
interface FotografCompProps {
    src: StaticImageData
    alt: string
}
const FotografComp = ({src,alt}:FotografCompProps) => {
  return (
    <div className="p-2 relative h-[500px] w-full lg:w-[700px]">
    <Image src={src} alt={alt} fill />
  </div>
  )
}

export default FotografComp