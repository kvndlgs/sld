import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import ContactPage from './ContactPage'
import { Metadata } from 'next'

export const metadata = {
  title: 'Contact | Shield signalisation Inc.',
}

export default function Contact(){
    
    return (
      
      <RootLayout>
        <Wrapper>
          <ContactPage />
        </Wrapper>
      </RootLayout>

    )
}