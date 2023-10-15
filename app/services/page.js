'use client'
import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper'
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'react-icons/lu'





export function ServiceItem({title, link, img, description}) {
    return (
        
        <div className="flex flex-col md:py-8 py-6 items-start justify-center md:w-[46%]">
        <Image className="mx-auto pb-6" src={img} width={140} height={140} alt={title} />
        <h4 className="text-lg pb-2">{title}</h4>
        <p className="text-base pb-4">{description}</p>
        <Link className="text-darky font-bold hover:text-primary transition inline-flex items-center justify-between py-4" href={link}>
            En savoir plus 
            <Icon.LuArrowRightCircle className="ml-2" size="18px" />
        </Link>
       </div>
    
    )
}


function FeatureItem({img, title, description}) {
    return (
        <div className="py-4 self-start">
            <div className="inline-flex items-center justify-start mx-auto">
                <div className="text-primary p-4">
                 {img}
                 </div>
                <h3> { title }</h3>
                <p>{ description}</p>
            </div>
           
        </div>
    
    )
}

export default function Services(){

    return (

        <RootLayout>
            <Wrapper>
                <div className=" py-10 md:py-16 px-16 md:px-20">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-300 font-medium pb-4"> Nos services</h4>
                        <h2 className="text-xl text-darky-600 font-semibold pb-8">Pour une circulation fluide et sécuritaire</h2>
                        <span className="w-12 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div className="flex flex-wrap items-around justify-around pt-8">
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
                <div className="w-full bg-darky-50 py-10 md:py-16 px-16">
                    <div className="container w-fill mx-auto">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-400 font-medium pb-4"> Pourquoi nous ?</h4>
                        <h2 className="text-xl text-darky-700 font-semibold pb-8"> Votre sécurité est notre priorité absolue </h2>
                        <span className="w-12 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between py-12">
                    <div className=" w-full md:w-1/2 flex items-center justify-center p-4">
                       <Image src="/images/workers.png" width="640" height="507" alt="Pourquoi nous ?" />
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/2 w-full py-4 md:py-0">
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
                          title="Nous misons sur la qualité de nos services, la rapidité d’exécution et la communication." 
                          description=""
                        />
                    </div>
    
                    </div>
                    </div>
                </div>
{/** where*/}
                <div className="bg-primary-300">
                    <div className="container w-full mx-auto py-8">
                <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-primary-700 font-medium pb-4"> Régions désservis </h4>
                        <h2 className="text-xl text-primary-800 font-semibold pb-8 w-3/4"> Nos services sont disponible a travers la province de Québec. </h2>
                        <span className="w-12 h-1 bg-primary-600 rounded-lg "></span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between py-6 md:px-16 px-6">
                    <div className="md:w-1/2 w-full flex flex-col justify-center w-full items-start py-6">
                           <h2 className="font-bold text-lg text-primary-700 md:w-[90%] md:-mt-20">Travailler en toute confiance, et ce, partout au Québec.</h2>
                           <p className="pb-4 text-base mt-2 text-primary-700 font-medium"> Contacter nous par téléphone au <a className="text-darky-700" href="callto:4385265465"> 438-526-5465</a>, par courriel a l'adresse <a className="text-darky-700" href="mailto:info@shieldsignalisation.com">info@shieldsignalisation.com</a> ou encore, clavardez en direct pour plus d'information sur la disponibilté de nos équipes dans votre region.</p>
                           <Link className="bg-primary-200 text-primary-800 font-semibold py-3 px-4 shadow-md rounded-md" href="/contact"> En savoir plus </Link>
                        </div>
                        <div className="md:w-1/2 w-full flex items-center justify-center py-6">
                            <Image src="/images/map.png" width="1300" height="1300" alt="zone desservies" />
                        </div>
                    </div>
                    </div>
                </div>
            </Wrapper>
        </RootLayout>
    
    )
}