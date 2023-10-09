import '@/styles/fonts.css'
import './globals.css'
//import type { Metadata } from 'next'
import CustomerChat from '@/components/messenger/Messenger';




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
        <link rel="icon" href="/favicon.svg" />
        <title> {subtitle ? subtitle : ""} | Shield Signalisation </title>
      </head>
      <body>
        <CustomerChat />
        {children}

        </body>
    </html>
  )
}
