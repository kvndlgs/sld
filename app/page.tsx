import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { Metadata } from "next";
import Footer from "./components/footer/Footer";
import { ServiceItem, FeatureItem } from "./services/ServicesPage";
import PageTitle from "@/app/components/page-title/PageTitle";
import Image from "next/image";
import Button from "./components/button/Button";
import * as Icon from "react-icons/lu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shield Signalisation Inc",
  description:
    "Entreprise de signalisation routière basée dans les laurentides et offrant ses services partout au Québec.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="w-full flex flex-col md:flex-row md:flex-wrap  items-center justify-around mx-auto md:justify-around md:items-around md:pt-6 pt-8 px-4 md:px-20">
        <ServiceItem
          title="Signalisation routière"
          description="Nos signaleurs vous permettrons d’atteindre vos objectifs en tout sécurité"
          img="/images/signalisation-icon.png"
          link="/services/signalisation"
        />
        <ServiceItem
          title="Fermeture de voie"
          description="Solution de signalisation complete et sur mesure selons vos besoins."
          img="/images/gate-icon.png"
          link="/services/signalisation"
        />
        <ServiceItem
          title="Location d'équipement"
          description="Bientôt"
          img="/images/location-icon.png"
          link="/"
        />
        <ServiceItem
          title="24 Heures sur 24, 7 jours sur 7"
          description="Équipes de signaleurs compétent prêts a intervenir rapidement et en tout temps."
          img="/images/services-24h.png"
          link="/contact"
        />
      </div>

      <div className="w-full bg-darky-100 py-10">
        <div className="container w-fill mx-auto">
          <PageTitle
            subtitle="Pourquoi nous ?"
            title="Votre sécurité est notre priorité absolue"
            titleColor="text-darky-700"
            subtitleColor="text-darky-500"
            spanColor="bg-darky-500"
            aosData="fade-up"
            aosDataDuration="400"
            aosDataEasing="ease-in"
          />
          <div className="flex flex-col md:flex-row items-center justify-between  py-4 md:py-6 px-6 md:px-20">
            <div className=" w-full md:w-1/2 flex items-center justify-center p-4">
              <Image
                src="/images/workers.png"
                width="640"
                height="507"
                alt="Pourquoi nous ?"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="500"
              className="flex flex-col items-center justify-center md:px-20 px-6 md:w-1/2 w-full py-4 md:py-0"
            >
              <FeatureItem
                img={<Icon.LuShield size="32" />}
                title="Nos signaleurs sont certifier et ont votre sûreter a coeur."
                description=""
              />
              <FeatureItem
                img={<Icon.LuClock size="32" />}
                title="Nos équipes sont disponible 24 Heures sur 24, 7 jours sur 7."
                description=""
              />
              <FeatureItem
                img={<Icon.LuMapPin size="32" />}
                title="Nos services sont disponible a travers la province de Québec."
                description=""
              />
              <FeatureItem
                img={<Icon.LuCloudLightning size="32" />}
                title="Nous misons sur la qualitée de nos services, la rapidité d’exécution et la communication."
                description=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emeraude-600 px-4 md:px20">
        <div className="container w-full mx-auto py-8">
          <PageTitle
            subtitle="Régions désservis"
            title="Partout à travers le Québec."
            titleColor="text-emeraude-800"
            subtitleColor="text-emeraude-700"
            spanColor="bg-emeraude-700"
            aosData="fade-down"
            aosDataDuration="400"
            aosDataEasing="ease-in"
          />
          <div className="flex flex-col md:flex-row items-center justify-between py-6 md:px-20 px-4">
            <div className="md:w-1/2 w-full flex flex-col justify-center  items-start py-2 md:py-6">
              <h2 className="font-bold text-lg text-emeraude-800 md:w-[90%] md:-mt-20 pb-4">
                Travailler en toute confiance, et ce, partout au Québec.
              </h2>
              <p className="pb-6 text-base mt-2 text-emeraude-700 font-medium">
                {" "}
                Contacter nous par téléphone au{" "}
                <a
                  className="text-emeraude-50 font-semibold"
                  href="callto:18887603504"
                >
                  1 888-760-3504
                </a>
                . par courriel a l'adresse{" "}
                <a
                  className="font-semibold text-emeraude-50"
                  href="mailto:info@shieldsignalisation.com"
                >
                  info@shieldsignalisation.com
                </a>{" "}
                ou encore, clavardez en direct pour plus d'information sur la
                disponibilté de nos équipes dans votre region.
              </p>
              <Link
                className="bg-secondary-100 text-emeraude-800 font-semibold py-3 px-4 shadow-md rounded-md hover:bg-emeraude-200"
                href="/contact"
              >
                {" "}
                En savoir plus{" "}
              </Link>
            </div>
            <div
              data-aos="flip-up"
              data-aos-easing="ease-in"
              data-aos-duration="500"
              className="md:w-1/2 w-full flex items-center justify-center md:mt-0 mt-10"
            >
              <Image
                src="/images/map.png"
                width="1300"
                height="1300"
                alt="zone desservies par shield signalisation"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
