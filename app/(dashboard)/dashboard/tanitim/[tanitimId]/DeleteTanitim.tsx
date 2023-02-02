"use client";
import Loading from "@/app/(client)/loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteNew } from "utils/tanitim";

function DeleteTanitim({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteTanitim = async () => {
    setIsLoading(true);
    await deleteNew(id);
    setIsLoading(false);
    router.push("/dashboard/tanitim");
  };

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <button
          type="button"
          className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          onClick={deleteTanitim}
        >
          Sil
        </button>
      )}
    </div>
  );
}

export default DeleteTanitim;
