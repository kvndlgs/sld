import Wrapper from '@/components/wrapper/Wrapper'
import RootLayout from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound(){
    return (
        <RootLayout>
            <Wrapper>
                <div className='w-full h-auto bg-warning-200 py-16'>
                    <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-3xl font-bold text-warning'> 404 </h1>
                    <Image src='/images/closedroad.png' width='220' height='220' alt='road closed' className='py-10' />
                    <Link className='bg-warning font-bold text-base rounded-md shadow-md py-4 px-6 ' href='/'>
                        Retourner à l'accueil 
                    </Link>
                </div> 
                </div>
            </Wrapper>
        </RootLayout>    
        )
}