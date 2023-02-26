'use client';
import { Post } from '@/types/PostTypes';
import { deleteNew } from 'utils/news';
import Table from '@/ui/dashboard/global/Table';
import Link from 'next/link';

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  const head = [
    {
      name: 'id',
      width: 50,
      sortable: false,
    },
    {
      name: 'title',

      sortable: false,
    },
    {
      name: 'content',
      sortable: false,
    },
    {
      name: 'imageURL',

      sortable: false,
    },
    {
      name: 'Oluşturma Tarihi',
      sortable: true,
    },
    {
      name: 'Güncellenme Tarihi',
      sortable: true,
    },
  ];

  const deletePost = async (id: string) => {
    await deleteNew(id);
  };

  return (
    <section>
      <Link
        href="/dashboard/haberler/ekle"
        className="Haber my-5 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Etkinlik Ekle
      </Link>
      <Table
        head={head}
        editable={{ href: 'dashboard/haberler' }}
        deletable={{
          onDelete: deletePost,
        }}
        searchable={true}
        // @ts-ignore
        body={posts.map((post: Post) => {
          return [
            post.id,
            post.title,
            post.content,
            post.imageURL,
            post.createdAt,
            post.updatedAt,
          ];
        })}
      />
    </section>
  );
};

export default Posts;
