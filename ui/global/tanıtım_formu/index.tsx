"use client"
import { useState, ChangeEvent, SyntheticEvent } from "react";
import Loading from "@/ui/global/loading";
import Input from "@/ui/global/form_elements/Input";
import Label from '@/ui/global/form_elements/Label';


function TanıtımFormu() {
  const [isLoading, setIsLoading] = useState(false)
  const [check, setCheck] = useState(false)
  const [error, setError] = useState(false)

  const [state, setState] = useState({
    tamAd: "",
    mail: "",
    telefon: "",
    mesaj: "",
  })
  const updateInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true)
    const res = await fetch("/api/tanitim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).catch(() => {
      setIsLoading(false)
      setCheck(false)
      setError(true)

    })
    setState({
      tamAd: "",
      mail: "",
      telefon: "",
      mesaj: "",

    })
    setIsLoading(false)
    setCheck(true)
  }
  return (
    <section className="px-[3%] sm:px-[5%] md:px-[7%] lg:px-[10%] bg-white">
      <h1 className="text-xl font-bold text-primary mb-5">Tanıtım Başvurusu</h1>
      {isLoading && <Loading />}
      {check && <h1 className="text-lg font-bold text-blue-600">Form başarıyla gönderildi!</h1>}
      {error && <h1 className="text-xl text-red-600">Bir hata oluştu...</h1>}
      {!isLoading && <form onSubmit={sendForm}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Label htmlFor="tamAd">Tam Ad</Label>
            <Input name="tamAd" id="tamAd" type="text" updateInput={updateInput} value={state.tamAd} placeholder="Sena" required={true} />
         
          </div>
          <div className="mb-6">
            <Label htmlFor="mail">Email</Label>
          <Input name="mail" id="mail" type="email" updateInput={updateInput} value={state.mail} placeholder="example@gmail.com" required={true} />
     
          </div>



          <div>
            <Label htmlFor="phone">Telefon Numarası</Label>
            <Input name="telefon" id="phone" type="tel" updateInput={updateInput} value={state.telefon} placeholder="+90" required={true} />
         
          </div>


        </div>

        <label
          htmlFor="mesaj"
          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
        >
          Mesajınız
        </label>
        <textarea
          id="mesaj"
          value={state.mesaj}
          name="mesaj"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Mesajınızı buraya yazın"
          onChange={updateInput}
        ></textarea>

        <button
          type="submit"
          className="text-white my-5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center active:scale-105 active:bg-red-800 duration-500 in-ease-out "
        >
          Gönder
        </button>
      </form>}
    </section>
  );
}

export default TanıtımFormu;
