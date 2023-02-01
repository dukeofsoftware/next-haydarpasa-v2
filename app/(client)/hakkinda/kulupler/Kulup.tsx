import Image from 'next/image'
import Link from 'next/link'
interface KulupProps {
  kulup: {
    id: string
    title: string
    image: StaticImageData
    vizyon: string
  }
}

function Kulup({ kulup }: KulupProps) {
  return (
    <Link href={`/hakkinda/kulupler/${kulup.id}`} className="  m-4 min-w-[340px]  relative md:w-[calc(50%-2rem)] h-full min-h-[180px] rounded-lg shadow-lg   max-w-[550px]  p-2 lg:p-2 lg:grid grid-cols-9 flex flex-col justify-center items-center   bg-primary-1 hover:scale-[1.03] duration-300 ease-out ">
      <div className="max-w-[16rem] max-h-[160px] lg:h-full lg:w-full lg:grid-col-3 lg:-translate-x-[4.4rem] relative overflow-visible rounded-full w-32 h-32   lg:min-w-[160px] col-span-2 ">
        <Image src={kulup.image} alt={kulup.title} fill />
      </div>
      <div className="w-full flex flex-col justify-center col-span-6 ">
        <h1 className='font-bold text-lg sm:text-xl text-white text-center lg:text-start py-1'>{kulup.title}</h1>
        <p className='text-white text-sm sm:text-sm line-clamp-6  text-ellipsis overflow-hidden'>{kulup.vizyon}</p>
      </div>
    </Link>
  )
}



export default Kulup