import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
<section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-darky-800">La sécurité de vos chantiers entre de bonnes mains
      </h1>
      <p className="mb-8 leading-relaxed">

      </p>
      <div className="flex justify-center">
        <Link href='/services' className="inline-flex text-white bg-primary border-0 py-3 font-medium px-6 focus:outline-none hover:bg-primary-700 rounded-lg shadow-md">En savoir plus</Link>

      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image width="720" height="600" alt="Shield signalisation hero" src="/images/workers.png"/>
    </div>
  </div>
</section>
    )
}