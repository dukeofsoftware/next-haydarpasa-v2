'use client';
import { motion } from 'framer-motion';
import Haber from './Haber';

import './haberler.css';
import { Posts, Post } from '@/types/PostTypes';
function Haberler({ posts }: Posts) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className=" xl:  hide-scrollbar fixed  left-0 z-30 hidden h-full min-h-screen w-8/12 gap-3   overflow-y-auto bg-black/90 pt-[200px] backdrop-blur-md delay-75 xl:block xl:w-10/12 xl:px-[5%] ">
      <h1 className="text-xl font-bold text-white">Haydarpaşa&apos;dan </h1>
      <h1 className="text-8xl font-extrabold text-primary-3">En yeniler</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-5 flex  min-h-screen max-w-[87%] flex-wrap"
      >
        {posts &&
          posts.map(
            (post: Post, index: number) =>
              index < 7 && (
                // @ts-ignore
                <Haber key={post.id} post={post} />
              ),
          )}
      </motion.div>
    </div>
  );
}

export default Haberler;
