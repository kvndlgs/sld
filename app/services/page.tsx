import Nav from '../components/nav/Nav'
import ServicesPage from './ServicesPage'
import Footer from '../components/footer/Footer'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | Shield Signalisation Inc',
    description: "Services offert par Shield Signlisation Inc.",
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
