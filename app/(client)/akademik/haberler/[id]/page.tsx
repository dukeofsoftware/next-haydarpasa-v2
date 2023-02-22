import Post from './Post';
import { getPostById, getPosts } from '@/lib/prisma/news';

async function page({ id }: any) {
  const { post } = await getPostById(id);

  return <section>
    {post ? <Post post={post} /> : <div>Post not found</div>
    }
  </section>
}

export default page;
export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts && posts.map((post: any) => ({ params: { id: post.id } }));
}
