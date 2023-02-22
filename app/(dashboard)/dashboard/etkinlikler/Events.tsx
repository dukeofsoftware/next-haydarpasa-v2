"use client"
import { Event } from '@/types/EventTypes'
import Table from '@/ui/dashboard/global/Table'
import { deleteEventById } from '@/utils/event'
import Link from 'next/link'
import { useEffect } from 'react';
interface EventsProps {
    events: Event[]
}

const Events = ({ events }: EventsProps) => {
    const deletePost = async (id: string) => {
        await deleteEventById(id);
    };
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    // @ts-ignore
    const formatter = new Intl.DateTimeFormat('tr-TR', options);

   

    const head = [
        {
            name: "id",
            width:30,
            sortable: false
        },
        {
            name: "başlık",
            sortable: false
        },
        {
            name: "içerik",
            sortable: false

        },
        {
            name: "logoAlt",
            sortable: true,
        },

        {
            name: "tarih",
            sortable: true,

        },
        {
            name: "yayınlanma tarihi",
            sortable: true,

        },
        {
            name: "yayınlanma durumu",
            sortable: true,

        }
    ]
    return (
        <section>
            <Link
                href="/dashboard/haberler/ekle"
                className="Haber bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 my-5"
            >
                Etkinlik Ekle
            </Link>
            <Table
                head={head}
                body={events.map((event) => [
                    event.id,
                    event.title,
                    event.content,
                    event.logoAlt,

                    event.dateTime,
                    event.createdAt,
                    event.updatedAt
                ])}


                editable={{ href: "dashboard/etkinlikler" }}
                deletable={{
                    onDelete: deletePost
                }}
            />

        </section>
    )
}

export default Events