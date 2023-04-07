import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '@/types/PostTypes';
// @ts-ignore
function Haber({ post }: Post) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      className="in-ease-out z-50 h-[300px]   w-full max-w-[575px] basis-1/2 overflow-hidden rounded-md px-[3%] shadow-sm brightness-90 duration-300   hover:scale-105 hover:shadow-xl	"
    >
      <Link
        href={`/akademik/haberler/${post.id}`}
        className="relative flex   h-full w-full flex-col  justify-end p-3  "
      >
        <Image src={post.imageURL} alt={post.title} fill />
        <div className="bg-primary z-50 flex h-[1.5rem] w-[3.5rem] flex-none items-center justify-center p-3 text-white ">
          <h2 className="text-sm">Haber</h2>
        </div>
        <h3 className="z-50 mb-6 pt-1 text-base font-extrabold text-white">
          {post.title}
        </h3>
        <div className="absolute bottom-0 left-0 z-40 h-1/2 w-full bg-gradient-to-t from-black/90 to-black/0"></div>
      </Link>
    </motion.div>
  );
}

export default Haber;
