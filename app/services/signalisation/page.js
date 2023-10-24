import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import PageTitle from '@/components/page-title/PageTitle'
import Image from 'next/image';
import Link from 'next/link'

export default function Signalisation(){
    return (
        <RootLayout>
            <Wrapper>
                <div className='w-full md:px-20 px-6'>
                    <PageTitle titleColor='text-darky-600' subtitle='Signalisation routière' subtitleColor='text-darky-500' spanColor='bg-darky-300' title="Solution moderne et adapté a vos besoins" />
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center mt-6 px-6 md:px-20'>
                <Image src='/images/helmet.png' width='180' height='180' alt='casque de signaleur routier'/>
                <article className='prose md'>
                <p className='text-base font-medium text-darky-500 md:px-24 px-6 py-8'>
                    Nos signaleurs dévoués sont déterminé à garantir le bon déroulement de vos projets en trouvant la solution idéale 
                    et adaptée a vos besoins spécifiques. Nous sommes fiers
                    de proposer un service personalisé, conscient que chaque chantiers est unique. 
                    C'est pourquoi nous accordons une grande importance à la commuinication. Nous prenons le 
                    temp d'élaborer une stratégie qui répond précisement à vos exigences.
                </p>
                </article>
                <span className='w-10 h-1 bg-primary-300 my-6'></span>
                <p className='text-base font-medium text-darky-500 md:px-24 px-6 py-8'>
                    En travaillant en étroite collaboration avec vous, nous nous assurons de comprendre vos attentes et objectifs.
                    Nos équipes experimentées mettrons en oeuvre des mesures de signalisation
                    routières efficaces en respecant les meilleurs pratiques de l'industrie. 
                    Nous sommes constament a l'affût des dernieres reglementations et normes de sécurité a fin 
                    d'offrir un service a la pointe de l'innovation.
                </p>
                <div className='w-full flex items-center justify-center pt-8 pb-20'> 
                    <a href='https://m.me/118775154651491' target='_blank' 
                    className='py-5 px-6 bg-primary text-white font-semibold rounded-md shadow-md hover:shadow-lg border border-b-4 border-primary-600'> Parler a un expert </a>
                </div>
                </div>
            </Wrapper>
        </RootLayout>
    )
}