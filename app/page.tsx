import RootLayout from '@/app/layout';
import Wrapper from  '@/components/wrapper/Wrapper';
import Hero from '@/components/hero/Hero';


export default function Home(){
  return (
    <RootLayout subtitle="Accueil">
      <Wrapper>
      <Hero />
      </Wrapper>
    </RootLayout>
  );
}
