"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logolar } from '@/constants/constants';
import { useRouter } from 'next/navigation';
function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogOut = async () => {
/*     const user = await axios.get("/api/auth/logout");
 */
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    /*     const user = await axios.post("/api/auth/login", credentials);
     */
    const user =await fetch("/api/auth/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
     if(user.status ===200){
      Router.push("/dashboard")
     }
     
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <Image src={logolar.okulLogo} alt="Logo" width={175} height={50} />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Admin olarak giriş yap
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={() => handleSubmit(e)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Kullanıcı Adı</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="k12.tr" required={true} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " required={true} onChange={(e) => setPassword(e.target.value)} />
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