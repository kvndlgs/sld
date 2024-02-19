"use client";

import { FC, useState } from "react";
import { sendJob } from "@/app/utils/handleSend";
import { useForm } from "react-hook-form";
import * as Icon from "react-icons/lu";

export type JobData = {
  name: string;
  email: string;
  position: string;
  phone: string;
  dl: boolean;
  aqtr: boolean;
  cv: string;
};

export const JobForm: FC = () => {
  const { register, handleSubmit } = useForm<JobData>();
  const [isSent, setIsSent] = useState(false);

  function onSubmit(data: JobData) {
    sendJob(data);
    setIsSent(true);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-8 md:py-20 py-16"
    >
      <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
        <label className="text-darky-400 text-md pb-2 pt-3 ml-2"> Nom </label>
        <input
          autoComplete="new-password"
          type="text"
          placeholder="Entrer votre nom complet"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...(register("name"), { required: true })}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
        <label className="text-darky-400 text-md pb-2 pt-3 ml-2">
          {" "}
          Mobile{" "}
        </label>
        <input
          placeholder="Entrer votre numéro de mobile"
          autoComplete="new-password"
          type="phone"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-400  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...(register("name"), { required: true })}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
        <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
          {" "}
          Courriel
        </label>
        <input
          placeholder="Entrer votre adresse courriel"
          autoComplete="new-password"
          type="email"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...(register("email"), { required: true })}
        />
      </div>
      <div className="flex flex-col justify-around items-start">
        <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
          {" "}
          C.V.{" "}
        </label>
        <input
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          type="file"
          {...(register("cv"), { required: true })}
        />
      </div>
      <div className="flex flex-col justify-around items-start">
        <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
          {" "}
          Permis de conduire valide ?{" "}
        </label>
        <input
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          type="radio"
          {...(register("dl"), { required: true })}
        />
      </div>
      <div className="flex flex-col justify-around items-start">
        <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
          {" "}
          Carte AQTR ?{" "}
        </label>
        <input
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          type="radio"
          {...(register("aqtr"), { required: true })}
        />
      </div>
      <div className="flex flex-col items-start justify-around pt-8 pb-3">
        <button type="submit">
          <Icon.LuArrowRight size="18" className="ml-3" />
        </button>
      </div>
    </form>
  );
};
