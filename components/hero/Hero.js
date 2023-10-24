import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-icons/lu';


export default function Hero(){
    return (
        <div className="w-full md:px-16 px-4 py-10 bg-darky-600">
            <div className="md:flex-row flex items-center justify-between flex-col w-full">
                <div className="w-full md:w-1/2 md:p-5 p-2">
                    <Image src='/images/hero-truck.png' alt='shield signalisation truck' width="1000" height="1000" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:p-5 p-2">
                    <h2 className="md:text-2xl text-xl font-bold text-darky-100 pb-2"> La sécurité de vos chantiers entre de bonnes mains </h2>
                    <p className="pb-5 font-medium text-base text-darky-50"> Chaques chantiers est unique et nos equipes mettront en place une solution adaptée a vos besoins.</p>
                    <Link href="/services" className='text-primary-900 font-semibold bg-primary-400 rounded-md drop-shadow-md py-3 px-5 hover:bg-primary-300 transition inline-flex items-center mt-2 justify-between'> En savoir plus <Icon.LuArrowRight className="ml-2 text-md font-semibold" /></Link>
    
                </div>
            </div>
        </div>
    )
}