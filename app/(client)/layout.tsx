import '../../styles/reset.css';
import '../../styles/globals.css';
import React from 'react';
import Footer from '@/ui/client/global/footer/Footer';
import Navbar from '@/ui/client/global/navbar/navbar';
import type { Metadata } from 'next';

interface IProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'Haydarpaşa Lisesi',
  description:
    'Haydarpaşa Lisesi 1934 yılından beri eğitime öncü eden köklü bir eğitim kurumdur.',
  keywords: [
    'Haydarpaşa,Lise, Haydarpaşa Lisesi, haydarpaşa,lise ,1934, eğitim, lgs,education, Haydarpasa, altunizade, acıbadem ,okul,kurum,Altunizade, tyt,yks',
  ],
  creator: 'Haydarpaşa Lisesi Bilişim Kulübü',
  authors: [
    {
      name: 'Furkan Emre Kozan',
      url: 'https://www.linkedin.com/in/dukeofsoftware/',
    },
  ],
  publisher: 'Haydarpaşa Lisesi',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '../public/logolar/haydarpasaBeyaz.png',
  },
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="tr">
      <head></head>
      <body
        className={`  max-w-screen } min-h-screen 
          overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
