import { imkanlarArray } from './constants';
import Image from 'next/image';
function Imkanlar() {
  return (
    <section className="relative z-10 lg:-translate-y-12">
      <div className="z-10 grid  grid-cols-1 p-5 lg:hidden ">
        <div className="divider"></div>
        {imkanlarArray.map((imkan, index) => (
          <div key={index}>
            <div className="flex  gap-3">
              <div className="relative h-12 w-12">
                <Image src={imkan.image} alt={imkan.baslık} fill />
              </div>
              <div className="flex  flex-col justify-center  gap-3  pl-5">
                <h1 className="text-primary font-extrabold">{imkan.baslık} </h1>
                <h1>{imkan.acıklama}</h1>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
      <div className="container z-40 mx-auto hidden bg-white shadow-lg lg:flex">
        <div className="flex h-[155px] w-full justify-around">
          {imkanlarArray.map((imkan, index) => (
            <div className="my-auto flex gap-3 " key={index}>
              <div>
                <Image src={imkan.image} alt={imkan.baslık} height={50} />
              </div>
              <div className="pl-5">
                <h1 className="text-primary pb-2 font-extrabold">
                  {' '}
                  {imkan.baslık}
                </h1>
                <h1>{imkan.acıklama}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Imkanlar;
