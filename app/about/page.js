import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import Image from 'next/image'
import * as Icon from 'react-icons/lu'



const TeamCard = ({name, role, image}) => {
    return (
        <div className="flex flex-col mb-6 items-center justify-between m-w-1/3 h-auto rounded-xl bg-darky-50 p-0 border-2 border-darky-100">
            <div className="border-b-2 border-darky-100">
                <Image src={image} width="350" height="350" alt={name} className="rounded-t-xl" />
            </div>
            <div className="w-full flex flex-col items-start px-4 py-4">
                <h3 className="font-semibold text-md text-darky-800">{name}</h3>
                <p className="font-md text-base text-darky-400">{role}</p>
            </div>
        </div>
    )
}

export default function About(){
    return (
        <RootLayout>
            <Wrapper>
            <div className=" py-10 md:py-16 px-10 md:px-24">
                    <div className="w-full flex flex-col items-center justify-center md:justify-around py-8 mx-auto text-center">
                        <h4 className="text-md text-darky-500 font-md pb-4"> L'entreprise </h4>
                        <h2 className="text-xl text-darky-600 font-semibold pb-8">Qui sommes-nous ?</h2>
                        <span className="w-12 h-1 bg-primary-200 rounded-lg "></span>
                    </div>
                    <div>
                        <p className="font-base font-md text-darky mx-auto md:px-24 w-full pt-2 pb-6">
                        Jeune mais resolument amibitieuse, notre entreprise vise a atteindre un statut de leader dans l'industrie. 
    Chez Shield Signalisation, nous nous distinguons par nos normes de recrutement rigoureuse et notre ethique de 
    travail exceptionelle. Apres avoir visité de nombreux chantiers routiers a travers le Québec, nous sommes convaincus 
    que personne n'est a l'abri Des bétises humaines, surtout lorsque nous sommes derrière un volant. La sécurité et le bien-être 
    des travailleurs routiers ainsi que des usagers de la route nous tiennent à coeur, et nous avons fait de cette priorité une seconde nature.
                        </p>
                    </div>
                    <div className='flex inline-flex items-center justify-center w-full py-5'>
                        <h4 className="text-md text-darky-500 font-md pb-4">  L'équipe </h4>
                        </div>
                    <div className="flex flex-wrap items-around justify-around pt-8">
                       <TeamCard
                         name="Sebastien Côté"
                         role="Président"
                         image="/images/user.jpg"
                        />
                        <TeamCard
                         name="Ken Lamoureux"
                         role="Vice-président"
                         image="/images/user.jpg"
                        />
                                               <TeamCard
                         name="Kevin Desloges"
                         role="Vice-président"
                         image="/images/user.jpg"
                        />
                    </div>
                </div>
            </Wrapper>
        </RootLayout>
    )
}