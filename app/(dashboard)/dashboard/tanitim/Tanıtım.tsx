
import Link from 'next/link'
interface TanıtımProps {
  tanitims: any;
}
function Tanıtım({ tanitims }: TanıtımProps) {
  return (
    <section className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className=" text-sm text-left text-gray-500 table-fixed ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
            <tr key={tanitim?.id} className="bg-white border-b   hover:bg-gray-50 ">
              <td className="py-4 px-6 overflow-hidden">{tanitim?.tamAd}</td>
              <td className="py-4 px-6 overflow-hidden text-ellipsis whitespace-nowrap">{tanitim?.mail}</td>
              <td className="py-4 px-6 overflow-hidden text-ellipsis whitespace-nowrap">{tanitim?.telefon}</td>
              <td className="py-4 px-6 overflow-hidden text-ellipsis whitespace-nowrap">{tanitim?.mesaj}</td>
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
  )
}
export default Tanıtım