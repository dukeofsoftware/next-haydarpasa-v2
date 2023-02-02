"use client"
import DeleteTanitim from "./DeleteTanitim";
import { useState } from "react";
import Loading from "@/app/(client)/loading";
function Haber({ tanitim }: { tanitim: any }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div className="flex justify-between">
            <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl ">
              {tanitim.tamAd}
            </h2>
            <DeleteTanitim id={tanitim.id}  />
          </div>
          <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl ">
            {tanitim.id}
          </p>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">
              Mail
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
              {tanitim.mail}
            </dd>
          </dl>
          <dl className="flex items-center space-x-6">
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                telefon
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {tanitim.telefon}
              </dd>
            </div>
            <div>

              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                Yükleme zamanı
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {tanitim.createdAt}
              </dd>
            </div>

          </dl>
          <dl className="flex items-center space-x-6">
            <div>

              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                Mesaj
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {tanitim.mesaj}
              </dd>
            </div>
          </dl>


        </div>
      </section>}
    </section>
  );
}

export default Haber;
