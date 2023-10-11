import Image from 'next/image'
import Link from 'next/link'

export default function Hero(){
    return (
        <div className="w-full px-16 py-12 bg-primary-200">
            <div className="md:flex-row flex items-center justify-between flex-col w-full">
                <div className="w-full md:w-1/2 md:p-5 p-2">
                    <Image src='/images/hero-truck.png' width={800} height={800} alt='truck' />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-5 p-2">
                    <h2 className="md:text-1xl text-xl font-bold text-darky-800 pb-2"> La sécurité de vos chantiers entre de bonnes mains </h2>
                    <p className="pb-5"> Faite confiance a nos signaleurs routiers certifiers</p>
                    <Link href="/contact" className='text-primary-900 font-bold bg-primary rounded-md drop-shadow-md py-3 px-5 hover:bg-primary-500 transition'> En savoir plus</Link>
                </div>
            </div>
        </div>
    )
}