import { createPost, getPosts } from 'lib/prisma/news';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { posts, error } = await getPosts();

      if (error) throw new Error(error);
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.query.secret !== process.env.SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid Token' });

  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { post, error } = await createPost(data);
      await res.revalidate('/');
      await res.revalidate('/dashboard/haberler');

      if (error) throw new Error(error);
      return res.status(200).json({ post });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
