import React from 'react';
import Image from 'next/image';
import FotoItem from './FotoItem';
import { kisacaImages } from './constants';
const FotoSection = () => {
  return (
    <section className="mb-6 flex min-h-[1000px] w-full  flex-col gap-5  md:grid md:grid-cols-3 lg:grid-cols-6">
      {kisacaImages.map((item, idx) => (
        <FotoItem
          key={item.title}
          src={item.src}
          alt={item.alt}
          title={item.title}
        />
      ))}
    </section>
  );
};

export default FotoSection;
