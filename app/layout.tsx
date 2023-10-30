import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script  from 'next/script'
import './globals.css'
import Analytics from './components/google/Analytics'
import Fb from './components/fb/Messenger';
import CustomerChat from './components/fb/Messenger'



const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shield Signalisation Inc',
  description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',  
  metadataBase: new URL('https://shieldsignalisation.com')
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <head>
        <meta charSet='utf-8'/>
        <meta property='og:title' content='Shield Signalisation Inc' />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property='og:image:type' content='image/png png' />
        <meta property='og:image:alt' content='Site officielle de Shield Signalisation Inc' /> 
        <meta property='og:description' content='Entreprise de signalisation routière offrant ses services a travers le Québec' />
        <meta property='og:url' content='https://shieldsignalisation.com' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:locale' content='fr_CA' />
        <meta property='og:locale:alternate' content='en_CA' />
        <Script
         id='ldjson-data'
         type='application/ld+json'
         dangerouslySetInnerHTML={{
          __html:  `{
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Shield Signalisation Inc",
            "url": "https://shieldsignalisation.com/",
            "logo": "https://shieldsignalisation.com/images/logo.png",
            "telephone": "+18887603504",
            "email": "info@shieldsignalisation.com",
            "description": "Entreprise de signalisation routière offrant ses services a travers la province de Québec",
            "openingHours": "Mon-Sun 00:00-23:59",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "53 Boul. Lajeunesse Ouest",
              "addressLocality": "Saint Jérôme",
              "addressRegion": "Québec",
              "addressCountry": "Canada",
              "postalCode": "J7Y 1W4"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.7894951,
              "longitude": -74.0157389
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
               "@type": "GeoCoordinates",
                 "latitude":  45.7894951,
                 "longitude": -74.0157389
                      },
                      "geoRadius": 2000
                  }
            },
          }`
         }}
        >

        </Script>
      </head>
      <body className={montserrat.className}>
      <Analytics />
      <CustomerChat />
     {children}
     </body>
    </html>
  )
}
