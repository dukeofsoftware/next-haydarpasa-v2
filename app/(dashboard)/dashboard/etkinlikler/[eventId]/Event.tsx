"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
const DeleteEvent = dynamic(() => import("./DeleteEvent"));
const EditEvent = dynamic(() => import("./EditEvent"));
import Loading from "@/ui/global/loading";
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

 function Event({ event }:any) {
  const [isLoading, setIsLoading] = useState(false);


    function changeLoading(state:boolean){
      setIsLoading(
        state
      )
    }
  return (
    <section>
      {isLoading && <Loading/>}
     {!isLoading && <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div className="flex justify-between">
            <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl ">
              {event.title}
            </h2>
            <DeleteEvent id={event.id} changeLoading={changeLoading} />
          </div>
          <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl ">
            {event.id}
          </p>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">
              İçerik
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
              {event.content}
            </dd>
          </dl>
          <dl className="flex items-center space-x-6">
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                ImageURL
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {event.imageURL}
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                Etkinlik zamanı
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {formatDate(new Date(event.dateTime))}
              </dd>
            </div>
          </dl>
          <dl className="flex items-center space-x-6">
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                LogoURL
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {event.logoURL}
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                LogoAlt
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {event.logoAlt}
              </dd>
            </div>
          </dl>

          <EditEvent event={event} changeLoading={changeLoading} />
        </div>
      </section>}
    </section>
  );
}

export default Event;
