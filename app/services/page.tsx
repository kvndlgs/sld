import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper';
import Link from 'next/link'
import Image from 'next/image'




export default function Services(){
    return (
        <RootLayout>
            <Wrapper>
            <section className="bg-white">
  <div className="container px-5 py-24 mx-auto">
    <h1 className='font-bold sm:text-4xl text-5xl font-bold text-center text-darky-800 mb-20'>
      Nos services
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="h-['80px'] w-['80px'] inline-flex items-start justify-start mb-4 flex-shrink-0">
        <Image src="/images/signaleur.png" width="80" height="80" alt="signalisation routiere" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-darky-800 text-2xl font-bold mb-2">Signalisation routière</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <Link href="/services/signalisation" className="mt-3 bg-primary rounded-md text-darky py-3 px-4 inline-flex items-center font-bold text-lg tracking-wide">En savoir plus</Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
      <div className="h-['80px'] w-['80px'] inline-flex items-start justify-start mb-4 flex-shrink-0">
        <Image src="/images/signaleur.png" width="80" height="80" alt="signalisation routiere" />
        </div>
        <div className="flex-grow pl-6">
        <h2 className="text-darky-800 text-2xl font-bold mb-2">Véhicule d'accompagnement</h2>         
         <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
         <Link href="/services/escorte" className="mt-3 bg-primary rounded-md text-darky py-3 px-4 inline-flex items-center font-bold text-lg tracking-wide">En savoir plus</Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
      <div className="h-['80px'] w-['80px'] inline-flex items-start justify-start mb-4 flex-shrink-0">
        <Image src="/images/signaleur.png" width="80" height="80" alt="signalisation routiere" />
        </div>
        <div className="flex-grow pl-6">
        <h2 className="text-darky-800 text-2xl font-bold mb-2">Location d'équipements</h2>         
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <Link href="/services/location" className="mt-3 rounded-md bg-primary text-darky py-3 px-4 inline-flex items-center font-bold text-lg tracking-wide">En savoir plus</Link>

        </div>
      </div>
    </div>
  </div>
</section>  
<section>
</section>
         </Wrapper>
        </RootLayout>
    )
}