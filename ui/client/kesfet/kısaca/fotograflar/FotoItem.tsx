import Image from 'next/image'
interface FotoItemProps {
    src: StaticImageData | string;
    alt: string;
    title: string;
}
const FotoItem = ({src,alt,title}:FotoItemProps) => {
    return (
        <div className=" col-span-3  relative flex flex-col gap-3 h-[300px] sm:h-[500px]">
            <div className="relative w-full h-[88%]">
                <Image src={src} alt={alt} fill />
            </div>
            <p className=" pt-1 pl-1  text-base text-relaxed">
             {title}
            </p>
        </div>
    )
}

export default FotoItem