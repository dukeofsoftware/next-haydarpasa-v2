import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/PostTypes';

function Haber({ id, title, content, imageURL }: Post) {
  return (
    <section className="flex flex-col items-center md:block md:items-start">
      <div className="my-3 block max-w-sm rounded-lg border border-gray-200 bg-white shadow-md  duration-300 hover:shadow-lg md:hidden">
        <Link
          href={`akademik/haberler/${id}`}
          className="relative h-[50%] w-full overflow-hidden"
        >
          <Image
            className="rounded-t-lg"
            src={imageURL}
            alt={title}
            width={500}
            height={300}
          />
        </Link>
        <div className="p-5">
          <Link href={`akademik/haberler/${id}`}>
            <h5 className="text-primary mb-2 text-2xl font-bold tracking-tight">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
          <Link
            href={`akademik/haberler/${id}`}
            className="bg-primary hover:bg-secondary in-ease-out inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white duration-300 focus:outline-none  focus:ring-4 focus:ring-red-300 "
          >
            Devamını Oku
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="w-fll mx-auto hidden min-w-[400px] flex-col gap-3 py-3 px-2 sm:flex-row md:flex  lg:gap-3 ">
        {/* Resim */}
        <div className="min-w-screen relative  h-[170px] w-full max-w-[400px] sm:h-[185px] sm:w-1/3 md:max-w-none lg:h-[210px] xl:h-[240px] ">
          <Image src={imageURL} alt={title} fill />
        </div>
        {/* Content */}
        <div className=" flex   h-[170px] flex-col justify-between gap-1 py-1 sm:h-[185px] sm:w-2/3 lg:h-[210px] xl:h-[240px]">
          <div>
            <h1 className="text-primary text-lg font-bold uppercase lg:text-2xl lg:font-extrabold">
              {title}{' '}
            </h1>
            <p className="overflow-hidden text-ellipsis text-sm leading-relaxed text-gray-700 line-clamp-6 first-letter:uppercase lg:text-lg">
              {content}
            </p>
          </div>
          <Link
            href={`akademik/haberler/${id}`}
            className="flex h-8  w-24 items-center justify-center  rounded-md bg-red-700 text-sm text-white transition-all    duration-300   ease-in-out hover:scale-105 hover:bg-red-800 active:scale-105 active:bg-red-800 lg:h-8 lg:w-32 lg:font-bold "
          >
            Devamını oku
          </Link>
        </div>
      </div>
      <div className="border-secondary  hidden w-full border-[1px] md:block"></div>
    </section>
  );
}

export default Haber;
