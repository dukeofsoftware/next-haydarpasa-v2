'use client';
import { useRouter } from 'next/navigation';
import { deleteNew } from 'utils/news';

interface DeleteHaberProps {
  id: string;
  setPostlar: any;
}
function DeleteHaber({ id, setPostlar }: DeleteHaberProps) {
  const router = useRouter();

  const deletePost = async () => {
    await deleteNew(id);
    setPostlar((prev: any) => prev.filter((post: any) => post.id !== id));
    router.refresh();
  };

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-3 hover:underline "
      onClick={deletePost}
    >
      Sil
    </button>
  );
}

export default DeleteHaber;
