import { cizerges } from './constants';
import SectionTitle from '@/ui/client/global/SectionTitle';
function page() {
  return (
    <section className="min-h-screen w-full bg-white px-[10%] pt-12">
      <SectionTitle>Haydarpaşa lisesi ders giriş çıkış saatleri</SectionTitle>

      <div className="relative overflow-x-auto">
        <table className="border-primary w-full rounded-lg border-2  text-left text-sm text-gray-500">
          <thead className="bg-primary-5 py-2 text-xs uppercase text-white  ">
            <tr>
              <th scope="col" className="py-3 px-6 text-[16px] font-bold">
                Ders
              </th>
              <th scope="col" className="py-3 px-6  text-[16px] font-bold">
                Giriş
              </th>
              <th scope="col" className="py-3 px-6  text-[16px] font-bold">
                Çıkış
              </th>
            </tr>
          </thead>
          <tbody>
            {cizerges.map((cizerge) => (
              <tr key={cizerge.id} className="border-b bg-white ">
                <th
                  scope="row"
                  className="whitespace-nowrap py-4 px-6 text-lg font-medium text-gray-900  "
                >
                  {cizerge.ders}
                </th>
                <td className="py-4 px-6">{cizerge.giris}</td>
                <td className="py-4 px-6">{cizerge.cikis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
