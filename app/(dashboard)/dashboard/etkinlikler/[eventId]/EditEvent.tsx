'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);

import { editEventById } from 'utils/event';

import { useInput } from '@/hooks/useInput';
interface EditEventProps {
  event: any;
  changeLoading: any;
}
function EditEvent({ event, changeLoading }: EditEventProps) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  const title = useInput(event?.title || "")
  const content = useInput(event?.content || "")
  const [startTime, setStartTime] = useState(event?.dateTime || new Date())
  const imageURL = useInput(event?.imageURL || '')
  const logoURL = useInput(event?.logoAlt || '')
  const logoAlt = useInput(event?.logoAlt || '')





  const editEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeLoading(true);
    await editEventById(
      event.id,
      title.value,
      content.value,
      imageURL.value,
      startDate,
      logoAlt.value,
      logoURL.value,
    );
    changeLoading(false);
    router.push('/dashboard/etkinlikler');
  };

  return (
    <section className="flex flex-col ">
      <h1 className="my-4 text-center text-2xl text-primary-3">Düzenle</h1>
      <form onSubmit={(e) => editEvent(e)} className="mb-6 grid gap-6 ">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-xl  font-medium  text-primary-3 "
          >
            Başlık
          </label>
          <input
            id="title"
            className="block w-full rounded-lg   border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
            name="title"
            value={title.value}
            onChange={title.onChange}
            type="text"
            placeholder="Başlık"
          />
        </div>
        <div>
          <label
            htmlFor="url"
            className="mb-2 block text-xl  font-medium  text-primary-3"
          >
            Etkinlik Zamanı
          </label>
          <DatePicker
            selected={startDate}
            showTimeSelect
            locale="tr"
            onChange={(date: Date) => {
              setStartDate(date);
            }}
            dateFormat="Pp"
          />
          {/*  */}
        </div>
        <div>
          <label
            htmlFor="url"
            className="mb-2 block text-xl  font-medium  text-primary-3"
          >
            İmage url
          </label>
          <input
            id="url"
            className="block w-full rounded-lg   border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
            name="imageURL"
            value={imageURL.value}
            onChange={imageURL.onChange}
            type="text"
            placeholder="İmageURL"
          />
        </div>
        <div>
          <label
            htmlFor="logoURL"
            className="mb-2 block text-xl  font-medium  text-primary-3"
          >
            Logo URL
          </label>
          <input
            id="logoURL"
            className="block w-full rounded-lg   border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
            name="logoURL"
            value={logoURL.value}
            onChange={logoURL.onChange}
            type="text"
            placeholder="İmageURL"
          />
        </div>
        <div>
          <label
            htmlFor="logoAlt"
            className="mb-2 block text-xl  font-medium  text-primary-3"
          >
            Logo Alt
          </label>
          <input
            id="logoAlt"
            className="block w-full rounded-lg   border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
            name="logoAlt"
            value={logoAlt.value}
            onChange={logoAlt.onChange}
            type="text"
            placeholder="logoAlt"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="mb-2 block text-xl  font-medium   text-primary-3"
          >
            İçerik
          </label>
          <textarea
            rows={4}
            name="content"
            className="dark: block w-full   rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 "
            value={content.value}
            onChange={content.onChange}
            id="content"
            placeholder="İçerik..."
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="in-ease-out delay-25 inline-flex max-w-[300px] rounded-lg bg-primary-5 py-2 px-3 text-xl font-medium text-white duration-300 hover:bg-primary-1 "
            value="Kaydet"
            disabled={title.value === '' || content.value === '' || imageURL.value === '' || logoURL.value === '' || logoAlt.value === '' || startDate === null || startTime === null}
          >
            Kaydet
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditEvent;
