import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer';
import AboutPage from './AboutPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "L'entreprise | Shield Signalisation Inc.",
    description: "À propos de Shield Signalisation Inc",
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
