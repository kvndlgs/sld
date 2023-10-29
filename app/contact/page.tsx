import { Metadata } from 'next'
import Nav from '../components/nav/Nav'	
import ContactForm from './ContactForm'
import Footer from '../components/footer/Footer'

export const metadata: Metadata = {
    title: 'Nous joindre | Shield Signalisation Inc',
    description: "Contact Shield Signalisation Inc pour tout vos besoins en matière de signalisation routière.",
}

export default function Contact(){
    return (
        <>
            <Nav />
            
            <ContactForm />

            <Footer />
        </>
    )
}