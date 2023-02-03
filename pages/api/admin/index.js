import { createAdmin } from '@/lib/prisma/admin';
const handler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid Token' });

  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { admin, error } = await createAdmin(data);

      if (error) throw new Error(error);
      return res.status(200).json({ admin });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
