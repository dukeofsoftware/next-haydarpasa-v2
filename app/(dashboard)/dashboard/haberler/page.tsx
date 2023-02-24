import { getPosts } from 'lib/prisma/news';
import Posts from './Posts';

async function page() {
  const { posts } = await getPosts();
  posts.forEach((post: any) => {
    post.createdAt = post.createdAt.toISOString();
    post.updatedAt = post.updatedAt.toISOString();
  });

  return <Posts posts={posts} data-superjson/> 
}

export default page;
