import Haber from './Haber';
import { getPostById } from '@/lib/prisma/news';

async function page({ params }: any) {
  const { post } = await getPostById(params.haberId);
  post.createdAt = post.createdAt.toISOString() || '';
  post.updatedAt = post.updatedAt.toISOString() || '';
  return <Haber post={post} />;
}
export const revalidate = 5;
export default page;
