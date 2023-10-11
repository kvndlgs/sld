import './globals.css'
import { Montserrat } from 'next/font/google'
import Fb from '@/components/messenger/Fb'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal'
});


export const metadata = {
  title: 'Shield signalisation Inc',
  description: 'Site officielle de Shield signalisation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            <link rel="icon" type="icon" href="./favicon.ico"/>
              <link rel="manifest" href="./site.webmanifest"/>
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#666666"/>
                  <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="theme-color" content="#ffffff"/>
                  </head>
                  <body className={montserrat.className}>
                    {children}
                    <>
                      <Fb />
                    </>
                  </body>
                </html>
                )
}
