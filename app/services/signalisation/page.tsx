import Nav from '../../components/nav/Nav'
import { Metadata } from 'next'
import SignalisationPage from './SignalisationPage'
import Footer from '../../components/footer/Footer'

export const metadata: Metadata = {
    title: 'Signalisation | Shield Signalisation Inc.',
    description: 'Service de signalisation routières les municipalités, les entreprises de telecom de pavage et plus.'
}

export default function Signalisation() {
    return (
        <div>
            <Nav />
            <SignalisationPage />
            <Footer />
        </div>
    )
}