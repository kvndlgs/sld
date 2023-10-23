import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import PageTitle from '@/components/page-title/PageTitle'
import Image from 'next/image';


export default function Signalisation(){
    return (
        <RootLayout>
            <Wrapper>
                <div className='w-full md:px-20 px-6'>
                    <PageTitle titleColor='text-darky-600' subtitle='Signalisation routière' spanColor='bg-darky-300' title="Solution moderne et adapté a vos besoins" />
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center mt-6 px-6 md:px-20'>
                <Image src='/images/helmet.png' width='140' height='140' alt='casque de signaleur routier'/>
                <p className='text-base font-medium text-darky-500 md:px-16 px-6 py-8'>
                    Nos signaleurs dévouées sont déterminé à garantir le bon déroulement de vos projets en trouvant la solution idéale 
                    et adapté a vos besoins spécifiques. Nous sommes fier 
                    de proposer un service personalisé, conscient que chaque chantiers est unique. 
                    C'est pourquoi nous accordons une grande importance à la commuinication. Nous prenons le 
                    temp d'élaboré une strategie qui répond précisementa vos exigences.
                </p>
                <span className='w-10 h-1 bg-primary-300 my-6'></span>
                <p className='text-base font-medium text-darky-500 md:px-16 px-6 py-8'>
                    En travaillant en étroite collaboration avec vous, nous nous assurons de comprendre vos attentes et objectifs.
                    Nos équipes experimentée mettrons en oeuvre des mesures de Signalisation
                    routières efficaces en respecant les meilleurs pratiques de l'industrie. 
                    Nous sommes constament a l'affut des dernieres reglementations et normes de sécurité a fin 
                    d'offir un service a la pointe de l'innovation.
                </p>
                </div>
            </Wrapper>
        </RootLayout>
    )
}