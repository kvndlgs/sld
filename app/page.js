"use client"

import RootLayout from './layout'
import Wrapper from '@/components/wrapper/Wrapper'
import { useRouter } from 'next/router'
import Hero from '@/components/hero/Hero'
import * as React from 'react'


export default function Home() {
  const { locale, locales, asPath } = useRouter;
  return (
    <RootLayout>
      <Wrapper>
        <Hero />
        {/** services */}
        <div className="bg-white py-10 md:py-16 px-16 md:px-20">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-300 font-medium pb-4"> {ServicesSubtitle.fr }</h4>
                        <h2 className="text-xl text-darky-600 font-semibold pb-8">{ServicesTitle.fr }</h2>
                        <span className="w-32 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div className="flex flex-wrap items-around justify-around pt-8">
                        <ServiceItem
                          title="Signalisation routière"
                          description="Nos experts vous permettrons d’atteindre vos objectifs en tout sécurité"
                          img="/images/signalisation-icon.png"
                          link="/services/signalisation"
                        />
                        <ServiceItem
                          title="Fermeture de voie"
                          description="Solution de signalisation complete et sur mesure selons vos besoins."
                          img="/images/gate-icon.png"
                          link="/services/signalisation"
                        />
                        <ServiceItem
                          title="Location d'équipement"
                          description="Louer nos équipements a la fine pointe de la technologie."
                          img="/images/location-icon.png"
                          link="/"
                        />
                        <ServiceItem
                          title="24 Heures sur 24, 7 jours sur 7"
                          description="Nous sommes prêts a intervenir rapidement et en tout temps."
                          img="/images/services-24h.png"
                          link="/contact"
                        />
                      
                    </div>
                </div>
      </Wrapper>
    </RootLayout>
  )
}
