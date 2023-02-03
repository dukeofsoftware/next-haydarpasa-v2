import { getPosts } from '@/lib/prisma/news';
import Haber from './Haber';
import { Post } from '@/types/PostTypes';
import SectionTitle from '@/ui/client/global/SectionTitle';
async function page() {
  const { posts } = await getPosts();

  return (
    <section className="flex flex-col gap-1 px-[3%] pt-12 sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[10%] 2xl:px-[12%]">
      <SectionTitle>Haberler Arşivi</SectionTitle>

      {posts.map((post: Post) => (
        <Haber
          key={post.id}
          content={post.content}
          title={post.title}
          imageURL={post.imageURL}
          id={post.id}
        />
      ))}
    </section>
  );
}

export default page;
