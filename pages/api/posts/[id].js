import { getPostById, updatePostById, deletePostById } from 'lib/prisma/news';
const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const { post, error } = await getPostById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ post });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.query.secret !== process.env.SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid Token' });

  if (req.method === 'DELETE') {
    deletePostById(id);
    await res.revalidate('/');
    await res.revalidate('/haberler');

    await res.revalidate('/dashboard/haberler');

    return res.status(200).json({ message: 'Post deleted' });
  }
  if (req.method === 'PATCH') {
    const data = req.body;
    try {
      const { post, error } = await updatePostById(id, data);
      await res.revalidate('/');

      await res.revalidate('/haberler');

      await res.revalidate('/dashboard/haberler');

      return res.status(200).json({ post });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
