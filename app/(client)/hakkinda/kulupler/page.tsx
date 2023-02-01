
import Kulup from './Kulup'
import {kulupler} from "@/constants/kulupler"
function page() {
  return (
    <section className="w-full min-h-screen pt-12 px-[3%] sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[7%] ">
    <h1 className='text-2xl text-primary font-extrabold text-center uppercase'>Kulüplerimiz</h1>
    <div className='flex flex-wrap w-full justify-center '>
      {kulupler.map((klup, index) => (
     <Kulup key={index} kulup={klup} />
      ))}
    </div>
    
    </section>
  )
}

export default page
