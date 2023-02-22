import { getPosts } from 'lib/prisma/news';
import Posts from './Posts';

async function page() {
  const { posts } = await getPosts();


  return <Posts posts={posts}/> 
}

export default page;
