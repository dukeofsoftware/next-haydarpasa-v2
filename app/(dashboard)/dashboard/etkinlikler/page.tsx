import { getEvents } from 'lib/prisma/events';
import Link from 'next/link';
import DeleteEvent from './DeleteEvent';
import { Event } from '@/types/EventTypes';
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
    <>
      {events ? (
        <section className=" ">
          <Link
            href="/dashboard/etkinlikler/ekle"
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Etkinlik Ekle
          </Link>
          <div className=" shadow-md sm:rounded-lg">
            <table className=" table-fixed text-left text-sm text-gray-500 ">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                <tr>
                  <th scope="col" className="max-w-[500px] py-3 px-6">
                    Baslik
                  </th>
                  <th scope="col" className="max-w-[700px] py-3 px-6">
                    Açıklama
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Zaman
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ImageURL
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event: Event) => (
                  <tr
                    key={event.id}
                    className="border-b bg-white   hover:bg-gray-50 "
                  >
                    <td className="max-w-[500px] overflow-hidden py-4 px-6">
                      {event.title}
                    </td>
                    <td className="maxp overflow-hidden text-ellipsis py-4 px-6">
                      {event.content}
                    </td>
                    <td className="overflow-hidden text-ellipsis whitespace-nowrap py-4 px-6">
                      {formatDate(event.dateTime)}
                    </td>
                    <td className="overflow-hidden text-ellipsis py-4 px-6 ">
                      {event.imageURL}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <DeleteEvent id={event.id} />
                      <Link
                        href={`dashboard/etkinlikler/${event.id}`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Düzenle
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <h1>Event bulunamadı...</h1>
      )}
    </>
  );
}
export default page;
