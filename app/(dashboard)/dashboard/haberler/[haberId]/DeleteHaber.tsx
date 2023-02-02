"use client"
import { useRouter } from 'next/navigation'
import { deleteNew } from 'utils/news';
import Loading from '@/ui/global/loading';
import { useState } from 'react';

interface DeleteHaberProps {
  id: string;
  changeLoading: any;
}
function DeleteHaber({ id ,changeLoading}: DeleteHaberProps) {
  const router = useRouter()

  const deletePost = async () => {
    changeLoading(true);
    await deleteNew(id);
    changeLoading(false);
    router.push('/dashboard/haberler')
  };

  return (

    <button
      type="button"
      className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      onClick={deletePost}
    >
      Sil
    </button>
  )
}

export default DeleteHaber