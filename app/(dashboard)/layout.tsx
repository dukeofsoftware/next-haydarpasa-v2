
import '@/styles/globals.css';
import Sidebar from "@/ui/dashboard/sidebar";
import { getServerSession } from "next-auth/next"
import authOptions from "pages/api/auth/[...nextauth]"
import Link from "next/link";
import {redirect} from "next/navigation"
interface IProps {
  children: React.ReactNode;
}
export default async function RootLayout({
  children
}: IProps) {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/auth")
  }
  return (
    <html>
      <head>
        <title>Dashboard</title>
      </head>
      <body className="overflow-y-scroll flex ">

        {session ? (
          <>
            <Sidebar />
            <main className='min-h-screen flex-1'>
              {children}
            </main>
          </>
        ) :
          <Link href="/auth">Giriş Yap</Link>}



      </body>
    </html>
  );
}
