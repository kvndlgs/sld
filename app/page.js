import RootLayout from './layout'
import Wrapper from '@/components/wrapper/Wrapper'
import HomePage from './HomePage'



export default function Home() {

  return (
    <RootLayout>
      <Wrapper>
        <HomePage />
      </Wrapper>
    </RootLayout>
  )
}
