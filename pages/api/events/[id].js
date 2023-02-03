import {
  getEventById,
  updateEventById,
  deleteEventById,
} from '@/lib/prisma/events';
const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const { event, error } = await getEventById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ event });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.query.secret !== process.env.SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid Token' });

  if (req.method === 'DELETE') {
    deleteEventById(id);
    await res.revalidate('/');
    await res.revalidate('/etkinlikler');

    await res.revalidate('/dashboard/etkinlikler');

    return res.status(200).json({ message: 'event deleted' });
  }
  if (req.method === 'PATCH') {
    const data = req.body;

    try {
      const { event, error } = await updateEventById(id, data);
      await res.revalidate('/');
      await res.revalidate('/etkinlikler');

      await res.revalidate('/dashboard/etkinlikler');

      return res.status(200).json({ event });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
