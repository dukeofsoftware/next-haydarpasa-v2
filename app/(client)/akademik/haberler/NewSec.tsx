import Link from 'next/link';
import Image from 'next/image';

interface NewSecProps {
  id: string;
  imageURL: string;
  title: string;
  content: string;
}

function NewSec({ id, imageURL, title, content }: NewSecProps) {
  return (
    <div className="">
      <Link
        href={`/haberler/${id}`}
        className="flex h-[150px] gap-3 rounded-md"
      >
        <div className="min-h-12 relative h-full w-[300px]  lg:w-[400px]">
          <Image src={imageURL} alt={title} fill />
        </div>
        <div className="flex flex-col gap-2 py-3 ">
          <h1 className="text-xl font-bold"> {title} </h1>
          <p className="text-base"> {content}</p>
        </div>
      </Link>
    </div>
  );
}

export default NewSec;
