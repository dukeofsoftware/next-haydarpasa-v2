import Link from "next/link";
import Image from "next/image";
import { Post } from '@/types/PostTypes';

function Haber({ id, title, content, imageURL, }: Post) {
    return (
        <div className="hover:scale-[1.02] duration-300 in-ease-out max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  my-3">
            <Link href={`/akademik/haberler/${id}`} className="relative w-full h-[50%] overflow-hidden">
                <Image className="rounded-t-lg" src={imageURL} alt={title} width={500} height={300} />
            </Link>
            <div className="p-5">
                <Link href={`/akademik/haberler/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
                <Link href={`/akademik/haberler/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-red-300  in-ease-out duration-300 ">
                    Devamını Oku
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default Haber