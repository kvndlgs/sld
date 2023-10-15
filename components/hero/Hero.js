import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/public/images/hero-truck.png'

const Content = {
    "fr": {
        "title": "La sécurité de vos chantiers entre de bonnes mains",
        "subtitle": "Faite confiance a nos signaleurs routiers certifiers",
        "link": "En savoir plus",
    },
    "en": {
        "title": "Your traffic control need in good hands",
        "subtitle": "Trust our certified traffic controllers",
        "link": "Learn more",
    }
}

export default function Hero(){
    return (
        <div className="w-full md:px-16 px-4 py-10 bg-primary-300">
            <div className="md:flex-row flex items-center justify-between flex-col w-full">
                <div className="w-full md:w-1/2 md:p-5 p-2">
                    <Image src={HeroImage} objectFit='cover' className="px-4" alt='Shield signalisation hero truck' priority />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-5 p-2">
                    <h2 className="md:text-1xl text-xl font-semibold text-primary-800 pb-2"> La sécurité de vos chantiers entre de bonnes mains </h2>
                    <p className="pb-5 font-medium text-base text-primary-800"> Faite confiance a nos signaleurs routiers certifiers</p>
                    <Link href="/services" className='text-primary-800 font-semibold bg-primary-200 rounded-md drop-shadow-md py-3 px-5 hover:bg-primary-100 transition'> En savoir plus</Link>
                </div>
            </div>
        </div>
    )
}