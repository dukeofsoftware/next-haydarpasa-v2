import Link from 'next/link';
interface TanıtımProps {
  tanitims: any;
}
function Tanıtım({ tanitims }: TanıtımProps) {
  return (
    <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className=" table-fixed text-left text-sm text-gray-500 ">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Tam Ad
            </th>
            <th scope="col" className="py-3 px-6">
              Mail
            </th>
            <th scope="col" className="py-3 px-6">
              Telefon
            </th>
            <th scope="col" className="py-3 px-6">
              Mesaj
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tanitims.map((tanitim: any) => (
            <tr
              key={tanitim?.id}
              className="border-b bg-white   hover:bg-gray-50 "
            >
              <td className="overflow-hidden py-4 px-6">{tanitim?.tamAd}</td>
              <td className="overflow-hidden text-ellipsis whitespace-nowrap py-4 px-6">
                {tanitim?.mail}
              </td>
              <td className="overflow-hidden text-ellipsis whitespace-nowrap py-4 px-6">
                {tanitim?.telefon}
              </td>
              <td className="overflow-hidden text-ellipsis whitespace-nowrap py-4 px-6">
                {tanitim?.mesaj}
              </td>
              <td className="py-4 px-6 text-right">
                <Link
                  href={`dashboard/tanitim/${tanitim?.id}`}
                  className="font-medium text-blue-600  hover:underline"
                  prefetch={false}
                >
                  Düzenle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default Tanıtım;
