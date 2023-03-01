import Image from 'next/image'

import {kadro} from "./constants"
import İdari from "./İdari"
function page() {

  return (
    
    <section className="min-h-screen pt-[5rem]">
      <div className='w-full h-[40vh]  relative flex items-center'>
        <Image src="https://drive.google.com/uc?export=view&id=1IGhoAIAwqMuo_03vHE39N5LGxifviWpZ" alt="Vahdet Kemal Oral" fill/>
        <div className='h-1/2 w-full bg-primary-5/90 z-20 flex items-center justify-center'>
          <h1 className='text-center text-white text-5xl font-extrabold '>{new Date().getFullYear() } İdari kadrosu</h1>
        </div>
      </div>
     {kadro.map((idare,index)=>(
      <İdari key={index}  idare={idare} />
     ))}
      
      
    </section>
  )
}

export default page