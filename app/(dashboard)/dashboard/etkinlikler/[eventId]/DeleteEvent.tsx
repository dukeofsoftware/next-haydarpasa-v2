"use client"
import { useRouter } from 'next/navigation'

import { deleteEventById } from 'utils/event';
interface DeleteEventProps {
  id: string;
  changeLoading: any;
}

function DeleteEvent({ id, changeLoading }: DeleteEventProps) {
  const router = useRouter()

  let deleteEvent = async () => {
    changeLoading(true);
    await deleteEventById(id);
    changeLoading(false);
    router.push('/dashboard/etkinlikler')
  };

  return (

    <button
      type="button"
      className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      onClick={deleteEvent}
    >
      Sil
    </button>
  )
}

export default DeleteEvent