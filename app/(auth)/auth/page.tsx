'use client';
import { useState } from 'react';

import Label from '@/ui/global/form_elements/Label';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.push('/dashboard');
    }
    if (!res?.ok) {
      alert('Hatalı Giriş');
    }
  };
  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow  sm:max-w-md md:mt-0 xl:p-0 ">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Admin olarak giriş yap
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="mail"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-600 focus:ring-red-600 sm:text-sm "
                  placeholder="k12.tr"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-600 focus:ring-red-600 sm:text-sm "
                  placeholder="********"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={
                  !email ||
                  !password ||
                  email === '' ||
                  password === '' ||
                  email === ' ' ||
                  password === ' '
                }
                className="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 "
              >
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
