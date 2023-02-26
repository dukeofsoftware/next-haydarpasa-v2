'use client';
import Table from '@/ui/dashboard/global/Table';
import { deleteNew } from 'utils/tanitim';

interface TanıtımProps {
  tanitims: any;
}
function Tanıtım({ tanitims }: TanıtımProps) {
  const handleDelete = async (id: string) => {
    await deleteNew(id);
  };
  const head = [
    { name: 'id', width: 1, sortable: false },

    { name: 'Ad', sortable: false },
    { name: 'Mail', sortable: false },
    { name: 'Telefon', sortable: false },

    { name: 'Mesaj ', sortable: false },
    { name: 'Gönderim Tarihi', sortable: true },
  ];
  return (
    <section>
      <Table
        head={head}
        body={tanitims.map((tanitim: any) => {
          return [
            tanitim.id,
            tanitim.tamAd,
            tanitim.mail,
            tanitim.telefon,
            tanitim.mesaj,
            tanitim.createdAt,
          ];
        })}
        deletable={{
          onDelete: handleDelete,
        }}
      />
    </section>
  );
}
export default Tanıtım;
