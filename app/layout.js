
import './globals.css'
import { Montserrat } from 'next/font/google'

import Fb from '@/components/messenger/Fb'
import GoogleAnalytics from '@/components/google/GoogleAnalytics';
import Script from 'next/script'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal'
});




export default function RootLayout({ children }) {
  return (
    <html lang="fr">

      <head>
        <Script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Company",
          "name": "Shield signalisation",
          "description": "Entreprise de signalisation routière. Basé à Saint-Jérôme. Nous offrons nos services partout au Québec.",
          "email": "mailto:info@shieldsignalisation.com",
          "telephone": "(438)-526-5465",
          "url": "http://www.shieldsignalisation.com",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "1"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Saint-Jérôme",
            addressRegion: "QC",
            postalCode: "J7Y 1W4",
            streetAddress: "53 Boul. Lajeunesse Ouest"
          },
        })
     }}
        />
             <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
              <link rel="icon" type="icon" href="./favicon.ico"/>
              <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#666666"/>
              <meta name="msapplication-TileColor" content="#ffffff"/>
              <meta name="theme-color" content="#ffffff"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="canonical" content="https://shieldsignalisation.com" />
              <meta name="description" content="Entreprise de signalisation routière. Basé à Saint-Jérôme. Nous offrons nos services partout au Québec."/>
              <meta name="og.image" content="/images/og-image.png"/>
              <meta name="locale" content="fr_CA"/>
              <title> Shield signalisation | Site officielle </title>
    </head>
    
    <GoogleAnalytics />
                  <body className={montserrat.className}>
                    {children}
                  </body>
                </html>
                )
}
