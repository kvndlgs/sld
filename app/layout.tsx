"use client"

import './globals.css'
//import type { Metadata } from 'next'
import CustomerChat from '@/components/messenger/Messenger';
import localFont from 'next/font/local'

const cstmFont = localFont({

  src:[{

  path: '../public/fonts/RightGrotesk-Regular.otf',
  weight: '400',
  style: 'normal'
  },
  {
    path: '../public/fonts/RightGrotesk-Medium.otf',
    weight: '500',
    style: 'medium'
  },
  {
    path: '../public/fonts/RightGrotesk-Bold.otf',
    weight: '800',
    style: 'bold'
  }
]
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
