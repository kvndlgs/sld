import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper'
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'react-icons/Lu'


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


export default function Services(){
    return (
        <RootLayout>
            <Wrapper>
                <div className="bg-secondary py-10 md:py-16 px-16 md:px-20">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-300 font-medium pb-4"> Nos services</h4>
                        <h2 className="text-xl text-darky-600 font-semibold pb-8">Nous prenons votre sécurité au serieux </h2>
                        <span className="w-32 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div className="flex flex-wrap items-around justify-around pt-8">
                        <ServiceItem
                          title="Signalisation routière"
                          description="Nos experts vous permettrons d’atteindre vos objectifs en tout sécurité"
                          img="/images/signalisation-icon.png"
                          link="/"
                        />
                        <ServiceItem
                          title="Fermeture de voie"
                          description="Solution de signalisation complete et sur mesure selons vos besoins."
                          img="/images/gate-icon.png"
                          link="/"
                        />
                        <ServiceItem
                          title="Location d'équipement"
                          description="Louer nos équipements a la fine pointe de la technologie pour vos chantiers."
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
                */ services /*
                <div>
                    Nos experts vous permettrons d’atteindre vos objectifs en tout sécurité
                </div>
            </Wrapper>
        </RootLayout>
    )
}