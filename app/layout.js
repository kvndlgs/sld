
import './globals.css'
import { Montserrat } from 'next/font/google'
import * as React from 'react'
import { Metadata } from 'next'
import Fb from '@/components/messenger/Fb'
import GoogleAnalytics from '@/components/google/GoogleAnalytics';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal'
});

export const metadata = new Metadata = {
  title: {
    template: "%s | Shield signalisation",
    default: "Shield signalisation"
  }
}



export default function RootLayout({ children }) {
  return (
                <html lang="fr">
                 <GoogleAnalytics />
                  <body className={montserrat.className}>
                    {children}
                    <>
                      <Fb />
                    </>
                  </body>
                </html>
                )
}
