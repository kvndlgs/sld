import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper'
import ServicesPage from './ServicesPage'
import { Metadata } from 'next'

export async function generateMetadate({params}){
    return {
        title: 'Services | Shield Signalisation Inc'
    }
}

export default function Services(){

    return (

    
        <RootLayout>
            <Wrapper>
             <ServicesPage />
            </Wrapper>
        </RootLayout>
    )
}