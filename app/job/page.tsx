import Nav from '../components/nav/Nav'
import JobPage from './JobPage'
import Footer from '../components/footer/Footer'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Carrières | Shield Signalisation Inc',
    description: 'Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.',
}

export default function Job() {
    return (
        <>
            <Nav />
            <JobPage />
            <Footer />
        </>
    )
}
