'use client';
import Input from '@/ui/global/form_elements/Input';
import Label from '@/ui/global/form_elements/Label';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { createNews } from '@/utils/news';
import TextArea from '@/ui/global/form_elements/TextArea';
import Loading from '@/ui/global/loading';
import ContainerComp from '@/ui/global/Container';

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    baslik: '',
    icerik: '',
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
    await createNews(state.baslik, state.icerik, state.imageURL);
    setState({
      baslik: '',
      icerik: '',
      imageURL: '',
    });
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
                updateInput={updateInput}
                value={state.baslik}
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
              <Label htmlFor="icerik">İçerik</Label>
              <TextArea
                updateInput={updateInput}
                value={state.icerik}
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
