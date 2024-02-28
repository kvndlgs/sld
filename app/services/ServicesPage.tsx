"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-icons/lu";
import PageTitle from "../components/page-title/PageTitle";

interface ServiceItemProps {
  title?: string;
  link?: any;
  img?: any;
  description?: string;
  alt?: any;
}

export const ServiceItem = (props: ServiceItemProps) => {
  return (
    <div className="flex flex-col md:py-8 py-10 items-center md:items-start justify-center md:max-w-[40%] w-full">
      <div className="px-2">
        <Image
          data-aos="flip-up"
          data-aos-easing="ease-in"
          data-aos-duration="200"
          className="pb-4 justify-self-start"
          src={props?.img}
          width={130}
          height={130}
          alt={props?.alt}
        />
        <h1
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          className="text-md font-bold pb-3 text-darky"
        >
          {props?.title}
        </h1>
        <p className="pb-4 text-darky-700 w-2/3">{props?.description}</p>
        <Link
          className="text-primary font-bold hover:text-primary-600 transition inline-flex items-center justify-between py-4"
          href={props?.link}
        >
          En savoir plus
          <Icon.LuArrowRightCircle className="ml-2" size="18px" />
        </Link>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  img?: any;
  title?: string;
  description?: string;
}

export const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className="py-4 self-start">
      <div className="inline-flex items-center justify-start mx-auto">
        <div className="text-primary p-4 pb-5">{props?.img}</div>
        <h1 className="text-darky-600 text-md ml-2"> {props?.title}</h1>
        <p className="text-sm text-darky-300">{props?.description}</p>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-10 md:py-12 px-6 md:px-20">
        <PageTitle
          titleColor="text-darky-700"
          subtitleColor="text-darky-500"
          title="Pour une circulation fluide et sécuritaire"
          subtitle="Nos services"
          spanColor="bg-primary-200"
        />
        <div className="flex flex-wrap items-around justify-around pt-8 px-6 md:px-20">
          <ServiceItem
            title="Signalisation routière"
            description="Nos signaleurs vous permettront d’atteindre vos objectifs dans les délais et en tout sécurité"
            img="/images/signalisation-icon.png"
            link="/services/signalisation"
          />
          <ServiceItem
            title="Fermeture de voie"
            description="Solution de signalisation complete et sur mesure selons vos besoins."
            img="/images/gate-icon.png"
            link="/"
          />
          <ServiceItem
            title="Location d'équipement"
            description="À venir"
            img="/images/location-icon.png"
            link="/"
          />
          <ServiceItem
            title="24 Heures sur 24, 7 jours sur 7"
            description="Équipes de signaleurs expérimentés prêts à intervenir en tout temps pour vos urgences, partout au Québec."
            img="/images/services-24h.png"
            link="/"
          />
        </div>
      </div>
    </>
  );
}
