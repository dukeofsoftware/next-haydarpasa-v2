import {  getEvents } from "lib/prisma/events";
import Link from "next/link";
function padTo2Digits(num:any) {
  return num.toString().padStart(2, '0');
}

function formatDate(date:Date) {
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
      <section className=" ">
        <Link href="/dashboard/etkinlikler/ekle" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Etkinlik Ekle</Link>
        <div className=" shadow-md sm:rounded-lg">
          <table className=" text-sm text-left text-gray-500 table-fixed ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                
                <th scope="col" className="py-3 px-6 max-w-[500px]">
                  Baslik
                </th>
                <th scope="col" className="py-3 px-6 max-w-[700px]">
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
              {events.map((event:any) => (
                <tr key={event?.id} className="bg-white border-b   hover:bg-gray-50 ">
                  <td className="py-4 px-6 overflow-hidden max-w-[500px]">{event?.title}</td>
                  <td className="py-4 px-6 overflow-hidden text-ellipsis maxp">{event?.content}</td>
                    <td className="py-4 px-6 overflow-hidden text-ellipsis whitespace-nowrap">{formatDate(event?.dateTime)}</td>
                  <td className="py-4 px-6 overflow-hidden text-ellipsis ">{event?.imageURL}</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`dashboard/etkinlikler/${event?.id}`}
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

        
    </>
  );
}
export default page;
