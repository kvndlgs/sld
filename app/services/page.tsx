import Nav from '../components/nav/Nav'
import ServicesPage from './ServicesPage'
import Footer from '../components/footer/Footer'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | Shield Signalisation Inc',
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
}

export default function Services() {
    return (
        <>
            <Nav />
            <ServicesPage />
            <Footer />
        </>
    )
}
