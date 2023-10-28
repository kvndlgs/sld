import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import { Metadata } from 'next';
import Footer from './components/footer/Footer'
import { ServiceItem } from './services/ServicesPage';


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
                    <Footer />
        </>
    )
}