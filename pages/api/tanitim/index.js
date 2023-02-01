import { getTanıtım, createTanıtım } from 'lib/prisma/tanıtım';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { tanitims, error } = await getTanıtım();
      if (error) throw new Error(error);
      return res.status(200).json({ tanitims });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { tanitim, error } = await createTanıtım(data);
      await res.revalidate('/dashboard/tanitim');

      if (error) throw new Error(error);
      return res.status(200).json({ tanitim });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
