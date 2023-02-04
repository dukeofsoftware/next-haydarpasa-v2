'use client';
import Input from '@/ui/global/form_elements/Input';
import Label from '@/ui/global/form_elements/Label';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);

import { createEvents } from '@/utils/event';
import TextArea from '@/ui/global/form_elements/TextArea';
import Loading from '@/ui/global/loading';
import ContainerComp from '@/ui/global/Container';
import { kulüpler } from './constants';

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [logoURL, setLogoURL] = useState('');
  const [logoAlt, setLogoAlt] = useState('');
  const [state, setState] = useState({
    title: '',
    content: '',
    imageURL: '',
  });
  const updateInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true);
    createEvents(
      state.title,
      state.content,
      state.imageURL,
      startDate,
      logoAlt,
      logoURL,
    );
    setState({
      title: '',
      content: '',
      imageURL: '',
    });
    setLogoURL('');
    setLogoAlt('');
    setStartDate(new Date());
    setIsLoading(false);
  };
  return (
    <section className="mt-16 w-full justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <ContainerComp>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <Label htmlFor="title">Başlık</Label>
              <Input
                id="title"
                name="title"
                updateInput={updateInput}
                value={state.title}
                placeholder="İçerik Başlığı"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="imageURL">İmage url</Label>
              <Input
                id="imageURL"
                name="imageURL"
                updateInput={updateInput}
                value={state.imageURL}
                placeholder="Image URL"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="content">İçerik</Label>
              <TextArea
                updateInput={updateInput}
                value={state.content}
                placeholder="İçeriği girin."
                required={true}
                name="content"
                id="content"
                rows={5}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="logoAlt">Logo İsmi</Label>
              <Input
                id="logoAlt"
                name="logoAlt"
                updateInput={(e) => setLogoAlt(e.target.value)}
                value={logoAlt}
                placeholder="Bilişim Kulübü Logosu"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="logoURL"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kulüp seç
              </label>
              <select
                value={logoURL}
                name="logoURL"
                onChange={(e) => setLogoURL(e.target.value)}
                id="kulüpler"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              >
                <option selected>Kulüp Seç</option>
                <option value={'deneme'}>deneme</option>
                {kulüpler.map((item, idx) => (
                  <option key={idx} value={item.image.src}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="zaman"
                className="text-primary mb-2 block  text-xl  font-medium"
              >
                Etkinlik Zamanı
              </label>

              {/*  */}
              <DatePicker
                selected={startDate}
                showTimeSelect
                locale="tr"
                //@ts-ignore
                onChange={(date) => setStartDate(date)}
                dateFormat="Pp"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
            >
              Ekle
            </button>
          </form>
        </ContainerComp>
      )}
    </section>
  );
};

export default page;
