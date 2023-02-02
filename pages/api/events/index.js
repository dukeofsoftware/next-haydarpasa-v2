import { createEvent, getEvents } from '@/lib/prisma/events';
const handler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_TOKEN) return res.status(401).json({message:"Invalid Token"})
  if (req.method === 'GET') {
    try {
      const { events, error } = await getEvents();
      if (error) throw new Error(error);
      return res.status(200).json({ events });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { event, error } = await createEvent(data);
      await res.revalidate('/');
      await res.revalidate('/etkinlikler');
      await res.revalidate('/dashboard/etkinlikler');

      if (error) throw new Error(error);
      return res.status(200).json({ event });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};
export default handler;
