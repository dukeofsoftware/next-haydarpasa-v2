import Image from 'next/image'
interface OgretmenProps {
  ogretmenSRC: StaticImageData
  isim: string
  branş: string
}
function Ogretmen({ ogretmenSRC, isim, branş }: OgretmenProps) {
  return (
    <div className='relative  h-[25vh] min-w-[190px]  md:w-[40vh] sm:w-[44vw] sm:h-[27vw] min-h-[200px] max-h-[300px] max-w-[450px] flex items-end   group '>
      <Image src={ogretmenSRC} alt={isim} fill />
      <div className='flex-col gap-2 flex justify-center px-3 z-10 bg-primary-1/90 w-full py-1 text-white opactiy-100 md:opacity-0 md:group-hover:opacity-100  md:translate-y-3 md:group-hover:translate-y-0 duration-200 ease-in-out transition-all'>
        <h1 className='font-bold'>{isim}</h1>
        <h1>{branş}</h1>
      </div>
    </div>
  )
}

export default Ogretmen