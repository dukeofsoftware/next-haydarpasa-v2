import { getTanıtımById, deleteTanıtımById } from 'lib/prisma/tanıtım';

const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const { tanitim, error } = await getTanıtımById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ tanitim });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'DELETE') {
    deleteTanıtımById(id);
    await res.revalidate('/dashboard/tanitim');

    return res.status(200).json({ message: 'Tanıtım deleted' });
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
