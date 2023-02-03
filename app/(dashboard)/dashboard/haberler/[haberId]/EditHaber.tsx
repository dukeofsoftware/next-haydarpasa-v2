'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { editNew } from 'utils/news';

interface EditHaberProps {
  post: any;
  changeLoading: any;
}
function EditHaber({ post, changeLoading }: EditHaberProps) {
  const router = useRouter();
  const [state, setState] = useState({
    title: '',
    content: '',

    imageURL: '',
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
      title: post?.title,
      content: post?.content,
      imageURL: post?.imageURL,
    });
  }, []);
  const editPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeLoading(true);
    await editNew(post.id, state);
    changeLoading(false);
    router.push('/dashboard/haberler');
  };

  return (
    <section className="flex flex-col ">
      <h1 className="my-4 text-center text-2xl text-primary-3">Düzenle</h1>
      <form onSubmit={(e) => editPost(e)} className="mb-6 grid gap-6 ">
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
            htmlFor="content"
            className="mb-2 block text-xl  font-medium   text-primary-3"
          >
            İçerik
          </label>
          <textarea
            rows={4}
            name="content"
            className="block w-full rounded-lg   border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500  "
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
            kaydet
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditHaber;
