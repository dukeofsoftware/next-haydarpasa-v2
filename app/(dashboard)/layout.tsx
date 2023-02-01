
import '@/styles/globals.css';
import Sidebar from "@/ui/dashboard/sidebar";


interface IProps {
  children: React.ReactNode;
}
export default async function RootLayout({
  children
}: IProps) {

  return (
    <html>
      <head>
        <title>Dashboard</title>
      </head>
      <body className="overflow-y-scroll flex ">
        <Sidebar/>
        <main className='min-h-screen flex-1'>
        {children}

        </main>

        </body>
    </html>
  );
}
