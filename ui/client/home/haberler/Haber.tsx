import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/PostTypes';

function Haber({ id, title, content, imageURL }: Post) {
  return (
    <div className="in-ease-out my-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md duration-300  hover:scale-[1.02]">
      <Link
        href={`/akademik/haberler/${id}`}
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
        <Link href={`/akademik/haberler/${id}`}>
          <h5 className="text-primary mb-2 text-2xl font-bold tracking-tight">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
        <Link
          href={`/akademik/haberler/${id}`}
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
  );
}

export default Haber;
