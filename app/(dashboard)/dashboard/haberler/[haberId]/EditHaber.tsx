"use client";
import  { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { editNew } from "utils/news";


interface EditHaberProps{
  post:any,
  changeLoading:any
}
function EditHaber({ post,changeLoading }:EditHaberProps) {
  
  const router = useRouter();
  const [state, setState] = useState({
    title: "",
    content: "",

    imageURL: "",
  });
  const updateInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  },[]);
  const editPost = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    changeLoading(true)
    await editNew(post.id, state)
    changeLoading(false)
    router.push('/dashboard/haberler')
  };

  return (
    <section className="flex flex-col ">
      <h1 className="text-center text-2xl text-primary-3 my-4">Düzenle</h1>
      <form onSubmit={(e)=>editPost(e)} className="grid gap-6 mb-6 ">
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
            htmlFor="content"
            className="text-primary-3 block mb-2  font-medium   text-xl"
          >
            İçerik
          </label>
          <textarea
            rows={4}
            name="content"
            className="block p-2.5 w-full   bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
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
          >kaydet</button>
        </div>
      </form>
    </section>
  );
}

export default EditHaber;
