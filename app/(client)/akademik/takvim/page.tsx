import { getEvents } from '@/lib/prisma/events';
import { Event as EventTypes } from '@/types/EventTypes';
import Event from '@/ui/client/akademik/takvim/Event';
import SectionTitle from '@/ui/client/global/SectionTitle';

import ContainerComp from '@/ui/global/Container';
async function page() {
  const { events } = await getEvents();
  return (
    <ContainerComp classNames="min-h-screen  pt-16  ">
      <SectionTitle>
        Haydarpaşa Lisesinde olacak en güncel etkinlikler
      </SectionTitle>
      {events ? (
        events.map((event: EventTypes) => (
          <Event key={event.id} event={event} />
        ))
      ) : (
        <h1>Etkinlik bulunamadı...</h1>
      )}
    </ContainerComp>
  );
}

export default page;
