import Image from 'next/image'
function İdari({idare}) {
  return (
    <ContainerComp classNames="my-12 flex items-center justify-center mx-auto">
    <div className="grid grid-rows-1  items-center  justify-center lg:grid-cols-2 lg:place-content-center">
      <div className="z-10 mb-12 h-[90%] md:mt-12 lg:mt-0 lg:mb-0">
        <div className="block rounded-lg py-6  px-3 shadow-lg backdrop-blur-[2px] md:px-12 lg:-mr-8 ">
          <div className="relative my-2 block h-[50vw] w-full md:mb-12 lg:mb-0 lg:hidden lg:h-[25vw]  lg:min-h-[25rem]">
            <Image
              src={heroConstants.HERO_IMAGE}
              className="w-full rounded-lg shadow-lg"
              alt={heroConstants.HERO_IMAGE_ALT}
              fill
            />
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:mb-12 md:text-5xl xl:text-6xl">
            {heroConstants.HERO_TITLE} <br />
            <span className="text-primary-3">
              {heroConstants.HERO_SUBTITLE}
            </span>
          </h1>

          <HeroBody>{heroConstants.HERO_BODY}</HeroBody>
          <div className="grid grid-cols-12 gap-3">
            {tickArray.map((tick) => (
              <Tick tick={tick} key={tick} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative hidden md:mb-12 lg:mb-0 lg:block lg:h-[25vw] lg:min-h-[25rem] ">
        <Image
          src={heroConstants.HERO_IMAGE}
          className="w-full rounded-lg shadow-lg"
          alt={heroConstants.HERO_IMAGE_ALT}
          fill
        />
      </div>
    </div>
  </ContainerComp>
  
  )
}

export default İdari
{/* <div className='my-12 flex flex-col-reverse items-center md:flex-row gap-5 md:justify-between  px-[3%] sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[10%] 2xl:px-[11%]'>
<div className="md:basis-8/12">
  <h1 className="text-2xl md:text-3xl font-extrabold pb-6 text-gray-800">{idare.isim}</h1>
 {idare.yazilar?.map(yazi=>(
     <p key={yazi} className="text-lg text-gray-600">
     {yazi}
     <br />
   </p>
   
 ))}
 
</div>
<div className="md:basis-4/12 relative h-[80vh] max-h-[500px]  md:h-[70vw] w-[300px]">
  <Image src={idare.resim} alt={idare.isim} fill  />
</div>
</div> */}