import Haber from './Haber';
import Link from 'next/link';
import { getPosts } from 'lib/prisma/news';
import { Post } from '@/types/PostTypes';
import SectionTitle from '@/ui/client/global/SectionTitle';

async function Haberler() {
  const { posts } = await getPosts();

  return (
    <section className="flex w-full flex-col gap-7 bg-white px-[3%] py-7 sm:px-[6%] ">
      <SectionTitle>Haydarpaşa'dan En Yeni Haberler</SectionTitle>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {posts &&
            posts.map(
              (post: Post, idx: number) =>
                idx < 4 && (
                  <Haber
                    key={post?.id}
                    id={post?.id}
                    title={post?.title}
                    content={post?.content}
                    imageURL={post?.imageURL}
                    createdAt={post?.createdAt}
                  />
                ),
            )}
        </div>
        <div className="mx-[10%] flex justify-end">
          <Link
            className="in-ease-out bg-primary flex h-[39px] items-center justify-center  rounded-lg py-3 px-5 text-center text-2xl text-white shadow-sm duration-300 hover:bg-red-900 md:font-bold  "
            href="/akademik/haberler"
          >
            Bütün Haberler
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Haberler;
