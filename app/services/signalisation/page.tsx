import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper';

export default function Signalisation(){
    return (
        <RootLayout>
        <Wrapper>
<section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/cone.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Signalisation routière
      </h1>
      <p className="mb-8 leading-relaxed">Nos signaleurs routiers certifiés de l'Association québécoise des transports (AQTr) s'engagent à assurer une circulation fluide et sécuritaire 
      sur tous vos chantiers, où que vous soyez au Québec. Chez Shield Signalisation, nous mettons l'accent sur la qualité de nos services, la rapidité d'exécution et la communication 
      efficace. Nos experts dévoués sont déterminés à garantir le bon déroulement de vos projets en trouvant la solution idéale et adaptée à vos besoins spécifiques. Nous sommes fiers 
      de proposer un service personnalisé, conscients que chaque chantier est unique. C'est pourquoi nous accordons une grande importance à la communication. Nous prenons le temps 
      d'élaborer une stratégie qui répond précisément à vos exigences. En travaillant en étroite collaboration avec vous, nous nous assurons de comprendre vos attentes et objectifs. 
      Notre équipe expérimentée met en œuvre des mesures de signalisation routière efficaces, en utilisant les dernières technologies et les meilleures pratiques de l'industrie. Nous sommes 
      constamment à l'affût des nouvelles tendances et réglementations en matière de signalisation, afin de vous offrir un service à la pointe de l'innovation. La sécurité est notre priorité absolue. 
      Nos signaleurs sont formés pour gérer les situations d'urgence et faire face aux imprévus sur les chantiers. Nous veillons à ce que toutes les normes de sécurité soient respectées, afin de protéger 
      à la fois les travailleurs et les usagers de la route. En choisissant Shield Signalisation, vous optez pour une équipe de professionnels dévoués, compétents et à l'écoute de vos besoins. 
      Nous nous engageons à fournir un service de qualité supérieure, en respectant les délais et en maintenant une communication transparente tout au long du processus. Faites confiance à notre 
      expertise pour assurer le succès de vos projets de signalisation routière.
</p>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font bg-darky-500">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">

        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </Wrapper>
        </RootLayout>
    )
}