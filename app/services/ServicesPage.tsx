'use client'

import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'react-icons/lu'
import PageTitle from '../components/page-title/PageTitle'


interface ServiceItemProps {
  title?: string;
  link?: any;
  img?: any;
  description?: string;
  alt?: any;
}


export const ServiceItem = (props: ServiceItemProps) => {
    return (
        
        <div className="flex flex-col md:py-8 py-10 px-8 md:px-0 items-center md:items-start justify-center md:w-[46%] w-full">
        <Image data-aos='flip-up' data-aos-easing='ease-in' data-aos-duration='200' className="pb-4 justify-self-start" src={props?.img} width={130} height={130} alt={props?.alt} />
        <h1 data-aos='fade-down' data-aos-duration='300' data-aos-easing='ease-in' className="text-md font-bold pb-3 text-darky">{props?.title}</h1>
        <p className="pb-4 text-darky-700">{props?.description}</p>
        <Link className="text-primary font-bold hover:text-primary-600 transition inline-flex items-center justify-between py-4" href={props?.link}>
            En savoir plus 
            <Icon.LuArrowRightCircle className="ml-2" size="18px" />
        </Link>
       </div>
    
    )
}

interface FeatureItemProps {
  img?: any;
  title?: string;
  description?: string;
}


export const FeatureItem = (props: FeatureItemProps) => {
    return (
        <div className="py-4 self-start">
            <div className="inline-flex items-center justify-start mx-auto">
                <div className="text-primary p-4 pb-5">
                 {props?.img}
                 </div>
                <h1 className='text-darky-600 text-md ml-2'> { props?.title }</h1>
                <p className='text-sm text-darky-300'>{ props?.description}</p>
            </div>
           
        </div>
    
    )
}

export default function ServicesPage(){

    return (

        <>
                <div className="py-10 md:py-12 px-6 md:px-20">
                    <PageTitle
                      titleColor='text-darky-700'
                      subtitleColor='text-darky-500'
                      title='Pour une circulation fluide et sécuritaire'
                      subtitle='Nos services'
                      spanColor='bg-primary-200'
                      />
                    <div className="flex flex-wrap items-around justify-around pt-8 px-6 md:px-20">
                        <ServiceItem
                          title="Signalisation routière"
                          description="Nos experts vous permettrons d’atteindre vos objectifs dans les délais et en tout sécurité"
                          img="/images/signalisation-icon.png"
                          link="/services/signalisation"
                        />
                        <ServiceItem
         
                          title="Fermeture de voie"
                          description="Solution de signalisation complete et sur mesure selons vos besoins."
                          img="/images/gate-icon.png"
                          link="/"
                        />
                        <ServiceItem

                          title="Location d'équipement"
                          description="À venir"
                          img="/images/location-icon.png"
                          link="/"
                        />
                        <ServiceItem
                          title="24 Heures sur 24, 7 jours sur 7"
                          description="Nous sommes prêts a intervenir en tout temps pour vos urgences. partout au Québec."
                          img="/images/services-24h.png"
                          link="/"
                        />
                      
                    </div>
                </div>
       {/** why us */}
                <div className="w-full bg-darky-100 py-10">
                    <div className="container w-fill mx-auto">
                    <PageTitle
                    subtitle='Pourquoi nous ?'
                     title='Votre sécurité est notre priorité absolue'
                     titleColor='text-darky-700'
                     subtitleColor='text-darky-500'
                     spanColor='bg-darky-500'
                     aosData='fade-up'
                     aosDataDuration='400'
                     aosDataEasing='ease-in'
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between  py-4 md:py-6 px-6 md:px-20">
                    <div className=" w-full md:w-1/2 flex items-center justify-center p-4">
                       <Image src="/images/workers.png" width="640" height="507" alt="Pourquoi nous ?" />
                    </div>
                    <div data-aos='fade-right' data-aos-easing='ease-in' data-aos-duration='500' className="flex flex-col items-center justify-center md:px-20 px-6 md:w-1/2 w-full py-4 md:py-0">
                        <FeatureItem
                          img={<Icon.LuShield size="32"  />}
                          title="Nos signaleurs sont certifier et ont votre sûreter a coeur."
                          description=""
                        />
                        <FeatureItem
                          img={<Icon.LuClock size="32" />}
                          title="Nos équipes sont disponible 24 Heures sur 24, 7 jours sur 7."
                          description=""
                        />
                        <FeatureItem
                          img={<Icon.LuMapPin  size="32" />}
                          title="Nos services sont disponible a travers la province de Québec." 
                          description=""
                        />
                        <FeatureItem
                          img={<Icon.LuCloudLightning  size="32" />}
                          title="Nous misons sur la qualitée de nos services, la rapidité d’exécution et la communication." 
                          description=""
                        />
                    </div>
    
                    </div>
                    </div>
                </div>
{/** where*/}
                <div className="bg-secondary-600 px-6 md:px20">
                    <div className="container w-full mx-auto py-8">
                    <PageTitle
                    subtitle='Régions désservis'
                     title='Partout à travers le Québec.'
                     titleColor='text-secondary-800'
                     subtitleColor='text-secondary-700'
                     spanColor='bg-secondary-700'
                     aosData='fade-down'
                     aosDataDuration='400'
                     aosDataEasing='ease-in'
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between py-6 md:px-20 px-6">
                    <div className="md:w-1/2 w-full flex flex-col justify-center  items-start py-2 md:py-6">
                           <h2 className="font-bold text-lg text-secondary-800 md:w-[90%] md:-mt-20 pb-4">Travailler en toute confiance, et ce, partout au Québec.</h2>
                           <p className="pb-6 text-base mt-2 text-secondary-700 font-medium"> Contacter nous par téléphone au <a className="text-secondary-50 font-semibold" href="callto:18887603504">1 888-760-3504</a>. par courriel a l'adresse <a className="font-semibold text-secondary-50" href="mailto:info@shieldsignalisation.com">info@shieldsignalisation.com</a> ou encore, clavardez en direct pour plus d'information sur la disponibilté de nos équipes dans votre region.</p>
                           <Link className="bg-secondary-100 text-secondary-800 font-semibold py-3 px-4 shadow-md rounded-md hover:bg-secondary-200" href="/contact"> En savoir plus </Link>
                        </div>
                        <div data-aos='flip-up' data-aos-easing='ease-in' data-aos-duration='500' className="md:w-1/2 w-full flex items-center justify-center md:mt-0 mt-10">
                            <Image src="/images/map.png" width="1300" height="1300" alt="zone desservies par shield signalisation" />
                        </div>
                    </div>
                    </div>
                </div>
            </>
    
    )
}