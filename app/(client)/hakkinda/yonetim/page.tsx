import Image from 'next/image';

import { kadro } from './constants';
import İdari from './İdari';
function page() {
  return (
    <section className="min-h-screen pt-[5rem]">
      <div className="relative flex  h-[40vh] w-full items-center">
        <Image
          src="https://drive.google.com/uc?export=view&id=1IGhoAIAwqMuo_03vHE39N5LGxifviWpZ"
          alt="Vahdet Kemal Oral"
          fill
        />
        <div className="z-20 flex h-1/2 w-full items-center justify-center bg-primary-5/90">
          <h1 className="text-center text-5xl font-extrabold text-white ">
            {new Date().getFullYear()} İdari kadrosu
          </h1>
        </div>
      </div>
      {kadro.map((idare, index) => (
        <İdari key={index} idare={idare} />
      ))}
    </section>
  );
}

export default page;
