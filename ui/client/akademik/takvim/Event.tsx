import { Event as EventTypes } from '@/types/EventTypes';
import Image from 'next/image';

interface EventProps {
  event: EventTypes;
}

const Event = ({ event }: EventProps) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  // @ts-ignore
  const formatter = new Intl.DateTimeFormat('tr-TR', options);

  const dateTime = formatter.format(new Date(event.dateTime)).split(' ');
  const yıl = dateTime[2];
  const ay = dateTime[1];
  const gün = dateTime[0];
  const saat = dateTime[3];

  return (
    <div className="     flex max-w-[400px]  items-center justify-center rounded-sm px-2 lg:px-8">
      <div className="flex w-full flex-col rounded bg-white shadow-lg sm:w-3/4  sm:min-w-[400px] lg:w-3/5 ">
        <div className="relative h-64 w-full rounded-t bg-cover bg-top">
          <Image src={event.imageURL} alt={event.title} fill />
        </div>
        <div className="flex w-full flex-col ">
          <div className="flex flex-row justify-around divide-x-2 bg-primary-5 p-4 font-bold uppercase leading-none  text-white md:divide-x-0   ">
            <div className=" flex w-1/4 items-center justify-center">{yıl}</div>

            <div className="flex w-1/4 items-center justify-center px-1 md:text-2xl">
              {ay}
            </div>
            <div className="flex w-1/4 items-center justify-center md:text-3xl ">
              {gün}
            </div>
            <div className="flex w-1/4 items-center justify-center md:text-lg">
              {saat}
            </div>
          </div>
          <div className=" min-h-[150px] p-2 font-normal text-gray-800 md:p-4 ">
            <h1 className="mb-4  text-xl   font-bold leading-none tracking-tight text-primary-3">
              {event.title}
            </h1>
            <p className="text-sm leading-normal ">{event.content}</p>
            <div className="mt-4 flex flex-row items-center text-gray-700">
              <div className="flex  w-1/2 justify-end">
                <div className="relative h-8 w-8">
                  <Image src={`${event.logoURL}`} alt={event.logoAlt} fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
