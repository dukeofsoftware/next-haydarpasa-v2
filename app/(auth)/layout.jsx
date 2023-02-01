import "../../styles/globals.css"
import { SessionProvider } from 'next-auth/react';

import { Open_Sans } from "@next/font/google";
const open = Open_Sans({
  weight: "400",
});

export default function RootLayout({ children }) {
  
  return (
    <html lang="tr">
      <head />
      <body className={`min-h-screen ${open.className} s overflow-y-auto lg:grid lg:grid-cols-5  w-full flex flex-col  `}>
        
       
        <div className="lg:col-span-4">
          
          {children}</div>
        
      </body>
    </html>
  );
}
