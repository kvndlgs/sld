"use client";

import * as React from "react";
import * as Icon from "react-icons/lu";
import { JobForm } from "@/app/components/Forms/Job";

export default function JobPage() {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full h-full">
        {/** left side start **/}
        <div className="bg-primary flex items-center justify-center md:w-1/3 w-full md:py-0 py-16">
          <div className="flex flex-col mx-auto md:w-2/3 px-8 md:px-0">
            <h4 className="text-base md:text-md font-medium text-white">
              {" "}
              Carrières{" "}
            </h4>
            <h1 className="text-lg md:text-xl font-semibold text-white">
              Faites le grand saut
            </h1>
            <span className="w-10 h-1 bg-white rounded-md mt-2"></span>
            <p className="text-sm md:text-base text-white mt-3">
              Vous ètes Fiable, ponctuel et professionnel ? Rejoignez les rangs
              de Shield Signalisation et propulser votre carrière vers de
              nouveau sommets.
            </p>
          </div>
        </div>
        {/** left side stop **/}
        {/** right side start **/}
        <div className="bg-white flex items-center justify-center md:w-2/3 w-full">
          <JobForm />
        </div>
        {/** right side stop **/}
      </div>
    </>
  );
}
