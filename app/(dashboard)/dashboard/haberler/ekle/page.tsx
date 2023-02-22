'use client';
import Input from '@/ui/global/form_elements/Input';
import Label from '@/ui/global/form_elements/Label';
import {  SyntheticEvent, useState } from 'react';
import { createNews } from '@/utils/news';
import TextArea from '@/ui/global/form_elements/TextArea';
import Loading from '@/ui/global/loading';
import ContainerComp from '@/ui/global/Container';
import { useInput } from 'hooks/useInput';

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
    const baslik=useInput("") 
    const icerik=useInput("") 
    const imageURL=useInput("") 
  

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await createNews(baslik.value, icerik.value, imageURL.value);
      baslik.reset()
      icerik.reset()
      imageURL.reset()
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
              <Label htmlFor="baslik">Başlık</Label>
              <Input
                id="baslik"
                name="baslik"
                onChange={baslik.onChange}
                value={baslik.value}
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
                onChange={imageURL.onChange}
                value={imageURL.value}
                placeholder="Image URL"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="icerik">İçerik</Label>
              <TextArea
                onChange={icerik.onChange}
                value={icerik.value}
                placeholder="İçeriği girin."
                required={true}
                name="icerik"
                id="icerik"
                rows={5}
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
