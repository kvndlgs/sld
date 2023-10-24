import Hero from '@/components/hero/Hero'
import { ServiceItem } from '@/app/services/ServicesPage';
import PageTitle from '@/components/page-title/PageTitle';



export default function HomePage() {

  return (
    <>
        <Hero />
        {/** services */}
        <div className="bg-white py-10 md:py-16 px-16 md:px-24">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-4 md:py-8 mx-auto text-center">
                      <PageTitle
                         title='Pour une circulation fluide et sécuritaire'
                         subtitle='Nos services'
                         subtitleColor='text-darky-400'
                         titleColor='text-darky-700'
                         spanColor='bg-primary-300'
                         />
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
                          description="Bientôt"
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
    </>
  )
}
