"use client"

import './globals.css'
//import type { Metadata } from 'next'
import CustomerChat from '@/components/messenger/Messenger';
import localFont from 'next/font/local'

const cstmFont = localFont({
  src: '../public/fonts/ArticulatCF-Normal.ttf'
})


export default function RootLayout({
  children,
  subtitle,
}: {
  children: React.ReactNode,
  subtitle: string,
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cstmFont.className}>
        {children}
        <CustomerChat />
        </body>
    </html>
  )
}
