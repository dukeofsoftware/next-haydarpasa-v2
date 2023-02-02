"use client"
import { useState } from 'react';

import Label from "@/ui/global/form_elements/Label"
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();

    const res = await signIn("credentials",{
      email:email,
      password:password,
      redirect:false,
    })
    if(res?.ok){
      router.push("/dashboard")
    }
    if(!res?.ok){
      alert("Hatalı Giriş")
    }
  };
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Admin olarak giriş yap
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <Label htmlFor="email">Email</Label>
                <input type="mail" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="k12.tr" required={true} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
               <Label htmlFor="password">Password</Label>
               <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="********" required={true} onChange={(e) => setPassword(e.target.value)}  />
             
               
              </div>

              <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Giriş Yap</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page