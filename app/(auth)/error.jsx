"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-white">
      <p className="text-red-600 text-3xl text-center">Birşeyler yanlış gitti...</p>
      <p className="font-bold text-xl">{error}</p>
      <button type="reset" onClick={() => reset()}>Error&apos;u yenile</button>
    </div>
  );
}
