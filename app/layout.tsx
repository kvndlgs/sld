import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script  from 'next/script'
import './globals.css'
import Analytics from './components/google/Analytics'
import Fb from './components/fb/Fb';



const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shield Signalisation Inc',
  description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',  
  metadataBase: new URL('https://shieldsignalisation.com'),
  openGraph: {
    title: 'Shield Signalisation Inc.',
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
    type: 'website'
  }
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
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:locale' content='fr_CA' />
        <meta property='og:locale:alternate' content='en_CA' />
        <Script
         id='ldjson-data'
         type='application/ld+json'
         dangerouslySetInnerHTML={{
          __html:  `{
            "@context": "htts://schema.org",
            "@type": "Service de sécurité routière",
            "name": "Shield Signalisation Inc.",
            "logo": "https://shieldsignalisation.com/images/logo.png"
            "address": {
              "@type": "PostalAddress",
              "streeAddress": "53 Boul. Lajeunesse Ouest",
              "addressLocality": "Saint Jérôme",
              "addressRegion": "Québec",
              "postalCode": "J7Y 1W4",
              "addressCountry": "Canada"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.7894951,
              "longitude": -74.0157389
            },
            "url": "https://shieldsignalisation.com",
            "telephone": "+18887603504",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "opens": "always",
              },
             }`
         }}
        >

        </Script>
      </head>
      <Analytics />
      <Fb />
      <body className={montserrat.className}>


     {children}

     </body>
    </html>
  )
}
