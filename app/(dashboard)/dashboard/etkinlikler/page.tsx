import { getEvents } from 'lib/prisma/events';
import Events from './Events';
function padTo2Digits(num: any) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

async function page() {
  const { events } = await getEvents();

  return (

    <Events events={events}
    data-superjson
    />



  );
}
export default page;
