'use client';
import Loading from '@/app/(client)/loading';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteNew } from 'utils/tanitim';

function DeleteTanitim({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteTanitim = async () => {
    setIsLoading(true);
    await deleteNew(id);
    setIsLoading(false);
    router.push('/dashboard/tanitim');
  };

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 "
          onClick={deleteTanitim}
        >
          Sil
        </button>
      )}
    </div>
  );
}

export default DeleteTanitim;
