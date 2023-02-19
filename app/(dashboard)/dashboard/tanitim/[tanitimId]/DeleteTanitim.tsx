'use client';
import { useRouter } from 'next/navigation';
import { deleteNew } from 'utils/tanitim';

function DeleteTanitim({
  id,
  setIsLoading,
}: {
  id: string;
  setIsLoading: any;
}) {
  const router = useRouter();

  const deleteTanitim = async () => {
    setIsLoading(true);
    await deleteNew(id);
    setIsLoading(false);
    router.push('/dashboard/tanitim');
  };

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 "
        onClick={deleteTanitim}
      >
        Sil
      </button>
    </div>
  );
}

export default DeleteTanitim;
