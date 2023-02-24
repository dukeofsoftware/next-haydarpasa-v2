import Event from './Event';
import { getEventById } from 'lib/prisma/events';

async function page({ params }: any) {
  const { event } = await getEventById(params.eventId);
  event.createdAt = event.createdAt.toISOString();
  event.dateTime = event.dateTime.toISOString();
  event.updatedAt = event.updatedAt.toISOString();
  return <Event event={event} data-superjson/>;
}
export const revalidate = 5;
export default page;
