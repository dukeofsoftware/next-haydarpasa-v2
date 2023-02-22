'use client';
import Input from '@/ui/global/form_elements/Input';
import Label from '@/ui/global/form_elements/Label';
import { SyntheticEvent, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);

import { createEvents } from '@/utils/event';
import TextArea from '@/ui/global/form_elements/TextArea';
import Loading from '@/ui/global/loading';
import ContainerComp from '@/ui/global/Container';
import { kulüpler } from './constants';
import { useInput } from 'hooks/useInput';

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const logoURL = useInput("")
  const logoAlt = useInput("")
  const title = useInput('')
  const content = useInput('')
  const imageURL = useInput('')


  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true);
    await createEvents(
      title.value,
      content.value,
      imageURL.value,
      startDate,
      logoAlt.value,
      logoURL.value,
    );
    title.reset()
    content.reset()
    imageURL.reset()
    logoAlt.reset()
    logoURL.reset()
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
                updateInput={title.onChange}
                value={title.value}
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
                updateInput={imageURL.onChange}
                value={imageURL.value}
                placeholder="Image URL"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="content">İçerik</Label>
              <TextArea
                updateInput={content.onChange}
                value={content.value}
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
                updateInput={logoAlt.onChange}
                value={logoAlt.value}
                placeholder="Bilişim Kulübü Logosu"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <Label
                htmlFor="logoURL"
              >
                Kulüp seç
              </Label>
              <select
                value={logoURL.value}
                name="logoURL"
                onChange={logoURL.onChange}
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
              <Label
                htmlFor="zaman"
              >
                Etkinlik Zamanı
              </Label>

              {/*  */}
              <DatePicker
                selected={startDate}
                showTimeSelect
                locale="tr"
                onChange={(date:Date) => setStartDate(date)}
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
