import Post from './Post';
import { getPostById, getPosts } from '@/lib/prisma/news';

async function page({ id }: any) {
  const { post } = await getPostById(id);

  return <Post post={post} />;
}

export default page;
export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts?.map((post: any) => ({ id: `${post.id}` }));
}
