"use client";
import  { useState, useEffect, FormEvent } from "react";
import { useRouter } from 'next/navigation'
import DatePicker,{ registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr)

import { editEventById } from "utils/event";
interface EditEventProps{
  event:any,
  changeLoading:any
}
function EditEvent({ event, changeLoading }:EditEventProps) {

  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  const [state, setState] = useState({
    title: "",
    content: "",
    dateTime: new Date(),
    imageURL: "",
    logoURL:"",
    logoAlt:""
  });


  const updateInput = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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


  const editEvent = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    changeLoading(true)
    await editEventById(event.id, state.title, state.content, state.imageURL, startDate,state.logoAlt,state.logoURL)
    changeLoading(false)
    router.push('/dashboard/etkinlikler')
  };

  return (
    <section className="flex flex-col ">
      <h1 className="text-center text-2xl text-primary-3 my-4">Düzenle</h1>
      <form onSubmit={(e)=>editEvent(e)} className="grid gap-6 mb-6 ">
        <div>
          <label
            htmlFor="title"
            className="text-primary-3 block mb-2  font-medium  text-xl "
          >
            Başlık
          </label>
          <input
            id="title"
            className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className="text-primary-3 block mb-2  font-medium  text-xl"
          >
            Etkinlik Zamanı
          </label>
          <DatePicker selected={startDate} showTimeSelect locale="tr" onChange={(date:Date) => {
            console.log("Update öncesi : ", "startDate:",startDate,"Girilen Date", date);
            setStartDate(date)
            console.log("Update Sonrası : ", "startDate:",startDate,"Girilen Date", date);
          }} dateFormat="Pp"
          />
          {/*  */}
        </div>
        <div>
          <label
            htmlFor="url"
            className="text-primary-3 block mb-2  font-medium  text-xl"
          >
            İmage url
          </label>
          <input
            id="url"
            className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className="text-primary-3 block mb-2  font-medium  text-xl"
          >
            Logo URL
          </label>
          <input
            id="logoURL"
            className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className="text-primary-3 block mb-2  font-medium  text-xl"
          >
            Logo Alt
          </label>
          <input
            id="logoAlt"
            className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className="text-primary-3 block mb-2  font-medium   text-xl"
          >
            İçerik
          </label>
          <textarea
            rows={4}
            name="content"
            className="block p-2.5 w-full   bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark: "
            value={state.content}
            onChange={updateInput}
            id="content"
            placeholder="İçerik..."

          />
        </div>
        <div className="flex items-center justify-center">
        <button
            type="submit"
            className="bg-primary-5 rounded-lg inline-flex max-w-[300px] py-2 px-3 hover:bg-primary-1 duration-300 in-ease-out delay-25 text-white text-xl font-medium "
            value="Kaydet"
          >Kaydet</button>
        </div>
      </form>
    </section>
  );
}

export default EditEvent;
