import { getPosts } from "lib/prisma/news";
import Link from "next/link";
async function page() {
  const { posts } = await getPosts();
  return (
    <>
      <section className="flex flex-col gap-4 ">
      <Link href="/dashboard/etkinlikler/ekle" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 Haber">Etkinlik Ekle</Link>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">

          <table className=" text-sm text-left text-gray-500 table-fixed ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
             
                <th scope="col" className="py-3 px-6 max-w-[300px]">
                  Baslik
                </th>
                <th scope="col" className="py-3 px-6 max-w-[700px]">
                  Açıklama
                </th>
                <th scope="col" className="py-3 px-6">
                  ImageURL
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post:any) => (
                <tr key={post.id} className="bg-white border-b   hover:bg-gray-50 ">
                  <td className="py-4 px-6 overflow-hidden">{post.title}</td>
                  <td className="py-4 px-6 overflow-hidden text-ellipsis ">{post.content}</td>
                  <td className="py-4 px-6 overflow-hidden text-ellipsis ">{post.imageURL}</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`dashboard/haberler/${post.id}`}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Düzenle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

        
    </>
  );
}

export default page;
