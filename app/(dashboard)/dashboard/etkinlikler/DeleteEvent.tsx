'use client';
import { useRouter } from 'next/navigation';

import { deleteEventById } from 'utils/event';
interface DeleteEventProps {
  id: string;
}

function DeleteEvent({ id }: DeleteEventProps) {
  const router = useRouter();

  const deleteEvent = async () => {
    await deleteEventById(id);
    router.push('/dashboard/etkinlikler');
  };

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-3 hover:underline "
      onClick={deleteEvent}
    >
      Sil
    </button>
  );
}

export default DeleteEvent;
