import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer';
import AboutPage from './AboutPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "L'entreprise | Shield Signalisation Inc.",
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
}

export default function About() {
    return (
        <>
            <Nav />
            <AboutPage />
            <Footer />
        </>
    )
}
