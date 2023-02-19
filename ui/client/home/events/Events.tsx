import { getEvents } from 'lib/prisma/events';
import Event from './Event';
import SectionTitle from '@/ui/client/global/SectionTitle';
import { Event as EventType } from '@/types/EventTypes';

const Events = async () => {
  const { events } = await getEvents();

  return (
    <section className="ms:px-[5%]  w-full px-[3%] py-12  sm:px-[4%] lg:px-[6%] xl:px-[7%]">
      <SectionTitle>Yaklaşan Etkinlikler</SectionTitle>
      <div className="flex flex-wrap justify-center gap-3">
        {events ? (
          events.map(
            (event: EventType, index: number) =>
              index < 5 && <Event key={event.id} event={event} />,
          )
        ) : (
          <div className="text-center text-gray-500">
            Etkinlik Bulunamadı...
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
