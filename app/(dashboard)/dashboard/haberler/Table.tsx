'use client';
import { useState } from 'react';
import Link from 'next/link';
import DeleteHaber from './DeleteHaber';
import { Posts, Post } from '@/types/PostTypes';
const Table = ({ posts }: Posts) => {
  const [postlar, setPostlar] = useState<Post[]>(posts);

  return (
    <section classNames="flex flex-col gap-4 ">
      <Link
        href="/dashboard/haberler/ekle"
        className="Haber bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Etkinlik Ekle
      </Link>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" table-fixed text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="max-w-[300px] py-3 px-6">
                Baslik
              </th>
              <th scope="col" className="max-w-[700px] py-3 px-6">
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
            {postlar.map((post: Post) => (
              <tr
                key={post.id}
                className="border-b bg-white   hover:bg-gray-50 "
              >
                <td className="overflow-hidden py-4 px-6">{post.title}</td>
                <td className="overflow-hidden text-ellipsis py-4 px-6 ">
                  {post.content}
                </td>
                <td className="overflow-hidden text-ellipsis py-4 px-6 ">
                  {post.imageURL}
                </td>

                <td className="py-4 px-6 text-right">
                  <DeleteHaber id={post.id} setPostlar={setPostlar} />
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
  );
};

export default Table;
