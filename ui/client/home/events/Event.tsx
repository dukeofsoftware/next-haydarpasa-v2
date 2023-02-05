import Image from 'next/image'
import { Event } from '@/types/EventTypes';
interface EventProps {
    event: Event
}

function Event({ event}:EventProps) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
 //@ts-expect-error
    const formatter = new Intl.DateTimeFormat("tr-TR", options);

    const dateArray = formatter.format(new Date(event.dateTime)).split(" ")
    const yıl = dateArray[2]
    const ay = dateArray[1]
    const gün = dateArray[0]
    const saat = dateArray[3]

    return (
        <div className="w-full     rounded-sm max-w-[400px]  flex items-center justify-center px-2 lg:px-8">
            <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4  lg:w-3/5 sm:min-w-[400px] ">
                <div className="w-full relative h-64 bg-top bg-cover rounded-t">
                    <Image src={event.imageURL} alt={event.title} fill />
                </div>
                <div className="flex flex-col w-full assd:flex-row">
                    <div className="flex flex-row justify-around p-4 font-bold leading-none text-white uppercase bg-primary-1  assd:flex-col assd:items-center assd:justify-center divide-x-2 md:divide-x-0   assd:w-1/4">
                        <div className="assd:text-3xl flex items-center justify-center w-1/4">{yıl}</div>

                        <div className="md:text-2xl flex items-center justify-center w-1/4 px-1">{ay}</div>
                        <div className="md:text-3xl flex items-center justify-center w-1/4 ">{gün}</div>
                        <div className="md:text-lg flex items-center justify-center w-1/4">{saat}</div>
                    </div>
                    <div className=" p-2 md:p-4 font-normal min-h-[150px] text-gray-800 assd:w-3/4">
                        <h1 className="mb-4  text-xl assd:text-3xl  font-bold leading-none tracking-tight text-primary">{event.title}</h1>
                        <p className="text-sm leading-normal ">{event.content}</p>
                        <div className="flex flex-row items-center mt-4 text-gray-700">

                            <div className="w-full flex justify-end">
                                <div className="w-8 h-8 relative"><Image src={event.logoURL} alt={event.logoAlt} fill /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event