'use client';
import '../../styles/reset.css';
import '../../styles/globals.css';

import React, { useEffect, useState } from 'react';
import Footer from '@/ui/client/global/footer/Footer';
import Navbar from '@/ui/client/global/navbar/navbar';
import { usePathname } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <html lang="tr">
      <head>
        <title>Haydarpaşa Lisesi</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Haydarpaşa,Lise, Haydarpaşa Lisesi, haydarpaşa,lise ,1934, eğitim, lgs,education, Haydarpasa, altunizade, acıbadem ,okul,kurum,Altunizade, tyt,yks"
        />
        <link
          rel="icon"
          type="image/png"
          href="../public/logolar/logotrans.png"
        />
        <meta
          name="description"
          content="Haydarpaşa Lisesi 1934 yılından beri eğitime öncü eden köklü bir eğitim kurumdur."
        />
        <meta name="robots" content="index, follow" />

        <meta name="author" content="Haydarpaşa Lisesi" />
      </head>
      <body
        className={`  max-w-screen min-h-screen overflow-x-hidden  ${
          isOpen ? 'overflow-hidden overflow-y-hidden' : ''
        }`}
      >
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
