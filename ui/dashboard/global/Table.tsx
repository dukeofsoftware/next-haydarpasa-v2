'use client';
import Input from '@/ui/global/form_elements/Input';
import { useInput } from 'hooks/useInput';
import Link from 'next/link';
import { useState } from 'react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
interface TableProps {
  head: {
    name: string;
    width?: number;
    sortable?: boolean | false;
  }[];
  body: string[][];
  searchable?: boolean;
  deletable: {
    onDelete: (id: string) => void;
  };
  editable?: {
    href: string;
  };
  idArray?: string[];
}
interface Sorting {
  key: number;
  orderBy: 'asc' | 'desc' | false;
}

const Table = ({
  head,
  body,
  searchable,
  deletable,
  editable,
  idArray,
}: TableProps) => {
  const [sorting, setSorting] = useState<Sorting | null>(null);
  const search = useInput('');
  const filteredBody =
    body &&
    body
      .filter((row) =>
        row.some((item) =>
          item
            .toLocaleLowerCase('TR')
            .toString()
            .includes(search.value.toLocaleLowerCase('TR')),
        ),
      )
      .sort((a, b) => {
        if (sorting?.orderBy === 'asc') {
          return a[sorting.key].toString().localeCompare(b[sorting.key]);
        } else if (sorting?.orderBy === 'desc') {
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
        } else {
          return 0;
        }
      });

  if (!filteredBody || filteredBody.length === 0) {
    return (
      <div className="rounded bg-yellow-100 p-4 text-sm text-yellow-700">
        Gösterilecek veri bulunmuyor.
      </div>
    );
  }
  return (
    <>
      {searchable && (
        <div className="mb-4 flex gap-x-2">
          <Input
            value={search.value}
            onChange={search.onChange}
            placeholder="Tabloda ara"
            classNames=" h-10 border-rounded text-sm px-4 w-full border-gray-300 outline-none focus:border-black"
          />
          {sorting && (
            <button
              onClick={() => setSorting(null)}
              className="h-10 whitespace-nowrap rounded border border-red-500 px-4 text-sm text-red-500"
            >
              Sıralamayı iptal et
            </button>
          )}
        </div>
      )}
      <div className="rounded border p-4">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              {head.map((item, key) => (
                <th
                  key={key}
                  className={`${
                    item.width && `w-[${item?.width}px]`
                  } border-b p-3 text-left text-sm font-semibold text-gray-500`}
                >
                  {item.name}
                  {item.sortable && (
                    <button
                      onClick={() => {
                        if (sorting?.key === key) {
                          setSorting({
                            key,
                            orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc',
                          });
                        } else {
                          setSorting({ key, orderBy: 'asc' });
                        }
                      }}
                    >
                      {sorting?.key === key && sorting.orderBy === 'asc' ? (
                        <FaSortUp className="inline-block text-gray-500" />
                      ) : sorting?.key === key && sorting.orderBy === 'desc' ? (
                        <FaSortDown className="inline-block text-gray-500" />
                      ) : (
                        <FaSort className="inline-block text-gray-500" />
                      )}
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBody &&
              filteredBody.map((row, key) => (
                <tr className="group" key={key}>
                  {row.map((item) => (
                    <td
                      key={key}
                      className="p-3 text-sm group-hover:bg-gray-100"
                    >
                      {item}
                    </td>
                  ))}
                  <td>
                    {deletable && editable ? (
                      <div className="flex gap-x-2">
                        <button
                          className="text-red-500"
                          onClick={() => deletable.onDelete(row[0])}
                        >
                          Sil
                        </button>
                        <Link
                          className="text-blue-500"
                          href={`${editable.href}/${row[0]}`}
                        >
                          Düzenle
                        </Link>
                      </div>
                    ) : deletable ? (
                      <button
                        className="text-red-500"
                        onClick={() => deletable.onDelete(row[0])}
                      >
                        Sil
                      </button>
                    ) : (
                      editable && (
                        <Link
                          href={`${editable.href}/${row[0]}`}
                          className="text-blue-500"
                        >
                          Düzenle
                        </Link>
                      )
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
