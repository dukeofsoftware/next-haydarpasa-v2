'use client';
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);

import { editEventById } from 'utils/event';
interface EditEventProps {
  event: any;
  changeLoading: any;
}
function EditEvent({ event, changeLoading }: EditEventProps) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  const [state, setState] = useState({
    title: '',
    content: '',
    dateTime: new Date(),
    imageURL: '',
    logoURL: '',
    logoAlt: '',
  });

  const updateInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setState({
      title: event?.title,
      content: event?.content,
      dateTime: event?.dateTime,
      logoURL: event?.logoURL,
      logoAlt: event?.logoAlt,
      imageURL: event?.imageURL,
    });
  }, []);

  const editEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeLoading(true);
    await editEventById(
      event.id,
      state.title,
      state.content,
      state.imageURL,
      startDate,
      state.logoAlt,
      state.logoURL,
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
            value={state.title}
            onChange={updateInput}
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
            value={state.imageURL}
            onChange={updateInput}
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
            value={state.logoURL}
            onChange={updateInput}
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
            value={state.logoAlt}
            onChange={updateInput}
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
            value={state.content}
            onChange={updateInput}
            id="content"
            placeholder="İçerik..."
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="in-ease-out delay-25 inline-flex max-w-[300px] rounded-lg bg-primary-5 py-2 px-3 text-xl font-medium text-white duration-300 hover:bg-primary-1 "
            value="Kaydet"
          >
            Kaydet
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditEvent;
