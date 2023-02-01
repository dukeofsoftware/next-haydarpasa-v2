import { createCizerge, getCizerges } from '@/lib/prisma/cizerge';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { cizerges, error } = await getCizerges();
      if (error) throw new Error(error);
      return res.status(200).json({ cizerges });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { cizerge, error } = await createCizerge(data);
      await res.revalidate('/cizerge');
      await res.revalidate('/dashboard/cizerge');
      if (error) throw new Error(error);
      return res.status(200).json({ cizerge });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
