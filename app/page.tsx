import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import { Metadata } from 'next';
import Footer from './components/footer/Footer';
import { ServiceItem } from './services/ServicesPage';
import Image from 'next/image';
import Button from './components/button/Button'
import * as Icon from 'react-icons/lu'

export const metadata: Metadata = {
    title: 'Shield Signalisation Inc',
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
}


export default function Home(){
    return (
        <>
            <Nav />
            <Hero />
            <div className="w-full flex flex-col md:flex-row md:flex-wrap  items-center justify-around mx-auto md:justify-around md:items-around md:pt-6 pt-8 px-8 md:px-20">
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
{/** 
                        <div className='w-full h-auto flex flex-row justify-between items-center'>


           

                          
                       
                          <div>
                           <div className='w-half flex flex-row'>
                                <Image src='/images/flaggerman.png' alt='signaleur routier' width='320' height='320' />
                                  <h1 className='text-lg font-semibold text-white py-3'> Tu aimerais devenir signaleur routier ?</h1>
                                    <Button size='md' label='Envoies ton C.V' icon='true'><Icon.LuArrowRight size='22' /></Button>
                            
                                </div>
                         </div>
                             <div className='w-half h-full flex flex-row bg-emeraude-300 pr-16 py-8'>
                           
                                  <h1 className='text-lg font-semibold text-emeraude-800'> Some other shit</h1>
                           
                             </div>

   
                        
                        </div>
    */}
                    <Footer />
        </>
    )
}