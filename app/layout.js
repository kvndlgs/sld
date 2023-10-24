'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'

import Fb from '@/components/messenger/Fb'
import GoogleAnalytics from '@/components/google/GoogleAnalytics';
import Script from 'next/script'
import AOS from 'aos';
import * as React from 'react';



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal'
});


export default function RootLayout({ children }) {
  React.useEffect(() => {
    AOS.init({
      
    }, [])
  })
  return (
    <html lang="fr">
      <head>
        <Script 
        id="gtm-script"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Company",
          "name": "Shield signalisation",
          "description": "Entreprise de signalisation routière. Basé à Saint-Jérôme. Nous offrons nos services partout au Québec.",
          "email": "mailto:info@shieldsignalisation.com",
          "telephone": "+1 888-760-3504",
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
              <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
              <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
              <link rel="icon" type="icon" href="./favicon.ico"/>
              <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#666666"/>
              <meta name="msapplication-TileColor" content="#ffffff"/>
              <meta name="theme-color" content="#ffffff"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="canonical" content="https://shieldsignalisation.com/" />
              <meta name="description" content="Entreprise de signalisation routière. Basé à Saint-Jérôme. Nous offrons nos services partout au Québec."/>
              <meta name="locale" content="fr_CA"/>
              <meta property="og:url" content="https://shieldsignalisation.com" />
              <meta property="og:image" content="/images/og-image.png"/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content="Shield signalisation Inc."/>
              <meta property="og:description" content="Entreprise de signalisation routière offrant ses services à la grandeur du Québec."/>
              <title> Shield Signalisation Inc. </title>
           
    </head>
    
    <GoogleAnalytics />
                  <body className={montserrat.className}>
                    {children}
                    <Fb />
                  </body>
                </html>
                )
}
