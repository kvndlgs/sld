import RootLayout from '@/app/layout';

import Wrapper from '@/components/wrapper/Wrapper';

export default function About(){
    return (
        <RootLayout>
        <Wrapper>
    <section className="bg-white">
        <div className="container px-16 pt-16 pb-0 mx-auto">
          <div className="flex flex-col items-start w-full mx-auto">
        <h1 className="text-3xl font-medium mb-4 text-darky-800"> Qui sommes-nous ? </h1>
        </div>
    <p className="pt-12 w-1/2">
    Jeune mais resolument amibitieuse, notre entreprise vise a atteindre un statut de leader dans l'industrie. 
    Chez Shield Signalisation, nous nous distinguons par nos normes de recrutement rigoureuse et notre ethique de 
    travail exceptionelle. Apres avoir visite de nombreux chantiers routiers a travers le Quebec, nous sommes convaincus 
    que personne n'est a l'abri Des betises humaines, surtout lorsque nous sommes derrière un volant. La sécurité et le bien-être 
    des travailleurs routiers ainsi que des usagers de la route nous tiennent à coeur, et nous avons fait de cette priorité une seconde nature.
    </p>
  </div>
</section>
        <section className="text-darky-800 body-font bg-white">
  <div className="container px-10 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-medium title-font mb-4 text-darky-800 tracking-widest">L'équipe</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-darky">Sebastien Côté</h2>
            <h3 className="text-darky-800 mb-3">Président</h3>
           
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-darky">Ken Lamoureux</h2>
            <h3 className="text-darky-800 mb-3">Vice-président</h3>

          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-darky">Kevin Desloges</h2>
            <h3 className="text-darky-800 mb-3">Vice-président</h3>
        
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
</Wrapper>
</RootLayout>
    )
}