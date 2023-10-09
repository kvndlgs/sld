import RootLayout from '@/app/layout';
import Wrapper from  '@/components/wrapper/Wrapper';
import Hero from '@/components/hero/Hero';

const metadata = {
  title: "Shield Signalisation | Accueil",
}

export default function Home(){
  return (
    <RootLayout>
      <Wrapper>
      <Hero />
      </Wrapper>
    </RootLayout>
  );
}
