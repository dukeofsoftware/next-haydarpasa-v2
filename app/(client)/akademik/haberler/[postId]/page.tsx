import Post from './Post';
import { getPostById } from '@/lib/prisma/news';

async function page({ params }: any) {
  const { post } = await getPostById(params.postId);
  return <Post post={post} />;
}

export default page;
