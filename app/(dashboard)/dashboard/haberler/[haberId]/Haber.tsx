'use client';
import { useState } from 'react';
import Loading from '@/ui/global/loading';
import EditHaber from './EditHaber';
interface HaberProps {
  post: any;
}
function Haber({ post }: HaberProps) {
  const [isLoading, setIsLoading] = useState(false);
  const changeLoading = (state: any) => {
    setIsLoading(state);
  };

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && (
        <section className="bg-white ">
          <div className="mx-auto max-w-2xl py-8 px-4 lg:py-16">
            <div className="flex justify-between">
              <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl ">
                {post.title}
              </h2>
            </div>
            <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl ">
              {post.id}
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                İçerik
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                {post.content}
              </dd>
            </dl>
            <dl className="flex items-center space-x-6">
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                  ImageURL
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                  {post.imageURL}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 ">
                  Yükleme zamanı
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
                  {post.createdAt}
                </dd>
              </div>
            </dl>

            <EditHaber post={post} changeLoading={changeLoading} />
          </div>
        </section>
      )}
    </section>
  );
}

export default Haber;
