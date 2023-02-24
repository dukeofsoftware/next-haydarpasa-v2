import Post from './Post';
import { getPostById, getPosts } from '@/lib/prisma/news';
import { Post as PostType  } from '@/types/PostTypes';

async function page({ params }: any) {
  const {id} = params;  
  const { post } = await getPostById(id || params.id);

  return <section>
    {post ? <Post post={post} /> : <div>Post not found</div>
    }
  </section>
}

export default page;
export async function generateStaticParams() {
  const { posts } = await getPosts();
  if(!posts) return [];
  return posts.map((post:PostType)=>({
    id: post.id.toString()
  }))
}
