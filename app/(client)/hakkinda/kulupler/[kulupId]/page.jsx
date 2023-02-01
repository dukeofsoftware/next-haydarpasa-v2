"use client"
import { useEffect,useState } from 'react';
import Image from "next/image"
import { kulupler } from '@/constants/kulupler';
function page({params}) {
    const [klup,setKlup]=useState({})
    useEffect(()=>{
        const data = kulupler.find(klup=>klup.id==params.klupId)
        setKlup(data)
    },[])
  return (
    <section className='w-full min-h-screen    px-[3%] sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[10%]  2xl:px-[15%]  pt-[6.2rem] flex flex-col items-center sm:block'>
   <div className='flex  justify-center w-full  h-[29vh] max-w-[29vh]  sm:w-[33vw] sm:max-w-[285px] sm:max-h-[285px] sm:h-[33vw] float-left relative m-3  '>
     <Image src={klup.image}  alt={klup.title} fill/>
   </div>
   <div>
    <h1 className="text-lg font-bold text-primary">{klup.title}</h1>
     <p className='text-base'>{klup.vizyon}</p>
   </div>

    </section>
  )
}

export default page