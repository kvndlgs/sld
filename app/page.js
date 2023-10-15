import RootLayout from './layout'
import Wrapper from '@/components/wrapper/Wrapper'
import Hero from '@/components/hero/Hero'
import { ServiceItem } from '@/app/services/page';


export default function Home() {

  return (
    <RootLayout>
      <Wrapper>
        <Hero />
        {/** services */}
        <div className="bg-white py-10 md:py-16 px-16 md:px-24">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-4 md:py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-300 font-medium pb-4"> Nos services </h4>
                        <h2 className="text-xl text-darky-600 font-semibold pb-8">Pour une circulation fluide et sécuritaire</h2>
                        <span className="w-12 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div className="flex flex-wrap items-around justify-around md:pt-6 pt-2">
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
