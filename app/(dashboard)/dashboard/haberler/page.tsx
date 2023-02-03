import { getPosts } from 'lib/prisma/news';
import Table from './Table';

async function page() {
  const { posts } = await getPosts();
  return <Table posts={posts} />;
}

export default page;
