import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
<section className="text-darky-800 bg-white">
  <div className="container mx-auto flex px-6 md:px-12 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="text-4xl mb-4 font-bld text-darky-800">La sécurité de vos chantiers entre de bonnes mains
      </h1>
      <p className="mb-8 leading-relaxed text-md font-med">
         Faite confiance a nos signaleurs routiers certifiers
      </p>
      <div className="flex justify-center">
        <Link href='/services' className="inline-flex text-darky bg-primary border-0 py-3 font-bold px-6 transition focus:outline-none hover:bg-primary-700 transition rounded-md shadow-md">En savoir plus</Link>
      </div>
    </div>
    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
      <Image width="720" height="600" alt="Shield signalisation hero" src="/images/hero-truck.png"/>
    </div>
  </div>
</section>
    )
}