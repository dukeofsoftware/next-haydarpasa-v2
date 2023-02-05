import Haber from "./Haber";
import Link from "next/link";
import { getPosts } from "lib/prisma/news";
import { Post } from '@/types/PostTypes';
import SectionTitle from "@/ui/client/global/SectionTitle";

 async function Haberler() {
    const { posts }  = await getPosts();
 

  return (
    <section className="flex flex-col gap-7 w-full bg-white px-[3%] sm:px-[6%] py-7 ">
      <SectionTitle >
        Haydarpaşa'dan En Yeni Haberler
        
      </SectionTitle>
      <div className="gap-5 flex flex-col">
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {posts && posts.map((post:Post,idx:number) => (
            idx < 4 && (
              <Haber
        
              key={post?.id}
              id={post?.id}
              title={post?.title}
              content={post?.content}
              imageURL={post?.imageURL}
              createdAt={post?.createdAt}
              />)))}
        </div>
        <div className="mx-[10%] flex justify-end">
          <Link className="hover:bg-red-900 duration-300 in-ease-out py-3 px-5 h-[39px]  bg-primary text-white md:font-bold text-2xl text-center flex items-center justify-center rounded-lg shadow-sm  " href="/akademik/haberler">Bütün Haberler</Link>
        </div>
      </div>
    </section>
  );
}

export default Haberler;

