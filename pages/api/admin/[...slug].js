import {
  getAdminByEmailAndPassword,
  deleteAdminByEmailAndPassword,
  updateAdminByEmailAndPassword,
} from '@/lib/prisma/admin';
const handler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid Token' });

  const { slug } = req.query;
  if (req.method === 'GET') {
    try {
      const { admin, error } = await getAdminByEmailAndPassword(
        slug[0],
        slug[1],
      );
      if (error) throw new Error(error);
      return res.status(200).json({ admin });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'DELETE') {
    deleteAdminByEmailAndPassword(email, password);

    return res.status(200).json({ message: 'admin deleted' });
  }
  if (req.method === 'PATCH') {
    const data = req.body;
    try {
      const { admin, error } = await updateAdminByEmailAndPassword(
        slug[0],
        slug[1],
        data,
      );

      return res.status(200).json({ admin });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
