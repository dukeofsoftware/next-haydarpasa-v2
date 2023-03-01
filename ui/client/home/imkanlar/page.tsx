import { imkanlarArray } from './constants';
import Image from 'next/image';
function Imkanlar() {
  return (
    <section className="relative  lg:-translate-y-12">
      <div className=" grid  grid-cols-1  divide-y divide-primary-3 border-primary-3  p-5 last:border-b last:border-primary-3 sm:hidden">
        {imkanlarArray.map((imkan, index) => (
          <>
            <div className="flex  gap-3 py-3" key={index}>
              <div className="relative h-12 w-12">
                <Image src={imkan.image} alt={imkan.baslık} fill />
              </div>
              <div className="flex  flex-col justify-center  gap-2  pl-2 sm:pl-5">
                <h3 className="text-primary font-bold text-primary-3 ">
                  {imkan.baslık}{' '}
                </h3>
                <h4>{imkan.acıklama}</h4>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="container  mx-auto hidden bg-white px-4 shadow-lg sm:flex">
        <div className="grid h-[155px] w-full grid-cols-4 justify-around lg:flex">
          {imkanlarArray.map((imkan, index) => (
            <div className="col-span-2 my-auto flex gap-3 " key={index}>
              <div>
                <Image src={imkan.image} alt={imkan.baslık} height={50} />
              </div>
              <div className="pl-5">
                <h3 className="text-primary pb-2 font-extrabold text-primary-3">
                  {' '}
                  {imkan.baslık}
                </h3>
                <h4>{imkan.acıklama}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Imkanlar;
