import Image from "next/image";
import PageTitle from "../../components/page-title/PageTitle";

export default function SignalisationPage() {
  return (
    <>
      <div className="w-full">
        <div className="w-full h-auto bg-darky-400"></div>
        <PageTitle
          titleColor="text-darky-500"
          subtitle="Signalisation routière"
          subtitleColor="text-darky-700"
          spanColor="bg-primary-300"
          title="Solution moderne et adapté a vos besoins"
        />
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center px-4 md:px-20">
        <article className="prose md">
          <p className="text-base text-darky-500 md:px-24 px-2 py-4">
            Nos signaleurs dévoués sont déterminés à garantir le bon déroulement
            de vos projets en trouvant la solution idéale et adaptée à vos
            besoins spécifiques. Nous sommes fiers de proposer un service
            personnalisé, conscients que chaque chantier est unique. C'est
            pourquoi nous accordons une grande importance à la communication.
            Nous prenons le temps d'élaborer une stratégie qui répond
            précisément à vos exigences.
          </p>
        </article>
        <p className="text-base text-darky-500 md:px-24 px-2 py-8">
          En travaillant en étroite collaboration avec vous, nous nous assurons
          de comprendre vos attentes et objectifs. Nos équipes expérimentées
          mettront en œuvre des mesures de signalisation routière efficaces en
          respectant les meilleures pratiques de l'industrie. Nous sommes
          constamment à l'affût des dernières réglementations et normes de
          sécurité afin d'offrir un service à la pointe de l'innovation.
        </p>
        <div className="w-full flex items-center justify-center pt-8 pb-20">
          <a
            href="https://m.me/118775154651491"
            target="_blank"
            className="py-5 px-6 bg-primary text-white font-semibold rounded-md shadow-md hover:shadow-lg border border-b-4 border-primary-600"
          >
            {" "}
            Parler a un expert{" "}
          </a>
        </div>
      </div>
    </>
  );
}
