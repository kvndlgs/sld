import { Metadata } from 'next'
import Nav from '../components/nav/Nav'	
import ContactForm from './ContactForm'
import Footer from '../components/footer/Footer'

export const metadata: Metadata = {
    title: 'Nous joindre | Shield Signalisation Inc',
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
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