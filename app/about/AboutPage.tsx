"use client";

import Image from "next/image";
// import * as Icon from 'react-icons/lu'
import PageTitle from "../components/page-title/PageTitle";
import AOS from "aos";
import * as React from "react";

const TeamCard = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="ease-in"
      className="flex flex-col mb-8 items-center justify-between m-w-1/3 h-auto rounded-xl bg-darky-50 p-0 border-2 border-darky-50 shadow-md"
    >
      <div className="border-b-2 border-darky-100">
        <Image
          src={image}
          width="260"
          height="260"
          alt={name}
          className="rounded-t-xl"
        />
      </div>
      <div className="w-full flex flex-col items-start px-4 py-4">
        <h3 className="font-semibold text-md text-darky-800">{name}</h3>
        <p className="font-md text-base text-darky-400">{role}</p>
      </div>
    </div>
  );
};

export default function About() {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className=" py-12 md:py-16 px-4 md:px-16 bg-primary">
        <PageTitle
          subtitle="L'entreprise "
          title="Qui sommes-nous ?"
          titleColor="text-primary-100"
          subtitleColor="text-primary-50"
          spanColor="bg-primary-50"
          aosData=""
          aosDataDuration=""
          aosDataEasing=""
        />
        <div>
          <p className="font-base font-md text-darky-50 text-align-left mx-auto md:px-20 px-6 md:mt-8 md:mb-12 w-full pt-2 pb-6">
            Jeune mais résolument amibitieuse, notre entreprise vise a atteindre
            un statut de leader dans l'industrie. Chez Shield Signalisation,
            nous nous distinguons par nos normes de recrutement rigoureuse et
            notre éthique de travail exceptionelle. La sécurité et le bien-être
            des travailleurs routiers ainsi que des usagers de la route nous
            tiennent à coeur, et nous avons fait de cette priorité une seconde
            nature.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center w-full py-8 md:py-14">
          <PageTitle
            subtitle="L'équipe"
            title="Personnel éxécutifs"
            titleColor="text-primary-50"
            subtitleColor="text-primary-100"
            spanColor="bg-primary-100"
            aosData="flip-up"
            aosDataDuration="400"
            aosDataEasing="ease-in"
          />
        </div>
        <div className="flex flex-wrap items-around justify-around py-8">
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
    </>
  );
}
