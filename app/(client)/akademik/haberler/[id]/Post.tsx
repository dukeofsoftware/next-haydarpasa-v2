import ContainerComp from '@/ui/global/Container';
import Image from 'next/image';
import { Post } from '@/types/PostTypes';
interface Props{
  post:Post
}

function Post({ post }:Props) {
  
  return (
    <ContainerComp classNames="pt-[5rem]  flex flex-col gap-2 min-h-screen items-center">
      <div className="relative h-[60vw]  max-h-[250px]  w-[90%] sm:max-h-[40vh]  sm:min-h-[330px] sm:w-[85vw] lg:w-[70vw] lg:max-w-[770px]">
        <Image src={post?.imageURL} alt={post?.title} fill />
      </div>
      <div className="w-[90%]">
        <h1 className="text-primary py-3 text-center text-2xl font-extrabold uppercase">
          {post?.title}
        </h1>
        <p className=" w-full text-base text-gray-700  first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:uppercase first-letter:italic first-letter:text-black ">
          {post?.content}
        </p>
      </div>
    </ContainerComp>
  );
}

export default Post;
