import {
  getCizergeById,
  updateCizergeById,
  deleteCizergeById,
} from '@/lib/prisma/cizerge';
const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const { cizerge, error } = await getCizergeById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ cizerge });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'DELETE') {
    deleteCizergeById(id);
    await res.revalidate('/cizerge');
    await res.revalidate('/dashboard/cizerge');
    return res.status(200).json({ message: 'cizerge deleted' });
  }
  if (req.method === 'PATCH') {
    const data = req.body;
    try {
      const { cizerge, error } = await updateCizergeById(id, data);
      await res.revalidate('/cizerge');
      await res.revalidate('/dashboard/cizerge');

      return res.status(200).json({ cizerge });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
