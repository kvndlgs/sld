"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/handleSend";
import * as Icon from "react-icons/lu";
import Button from "@/app/components/button/Button";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
};

export const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isSent, setIsSent] = useState(false);

  function onSubmit(data: FormData) {
    sendEmail(data);
    setIsSent(true);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-8 md:py-20 py-16"
    >
      <div className="flex flex-col items-start justify-between w-full md:w-3/4 mx-auto">
        <label
          htmlFor="fullname"
          className="text-darky-400 font-medium ml-2 pb-2"
        >
          Nom
        </label>
        <input
          type="text"
          placeholder="Entrer votre nom"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-400  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...register("name", { required: true })}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2 md:w-3/4 mx-auto">
        <label
          htmlFor="email"
          className="text-darky-400 font-medium text-base ml-2 pb-2"
        >
          Courriel
        </label>
        <input
          type="string"
          placeholder="Entrer votre courriel"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...register("email", { required: true })}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-center pt-2 pb-3 pr-2 md:pl-2 md:w-3/4 mx-auto">
        <label
          htmlFor="phone"
          className="text-darky-400 font-medium text-base ml-2 pb-2"
          {...register("phone", { required: true })}
        >
          Téléphone
        </label>
        <input
          type="text"
          placeholder="Entrer votre téléphone"
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...register("phone", { required: true })}
        />
      </div>
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start md:w-3/4 mx-auto">
        <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
          <label
            htmlFor="company"
            className="text-darky-400 font-medium text-base ml-2 pb-2"
            {...register("company", { required: true })}
          >
            Entreprise
          </label>
          <input
            type="text"
            placeholder="Entrer le nom de l'entreprise"
            className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
            {...register("company", { required: true })}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-around  pt-2 pb-3 pl-2">
          <label
            htmlFor="role"
            className="text-darky-400 font-medium text-base ml-2 pb-2"
          >
            Role
          </label>
          <input
            type="text"
            placeholder="Votre role dans l'entreprise"
            className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
            {...register("role", { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-around pt-2 pb-3 w-full md:w-3/4 mx-auto">
        <label
          htmlFor="message"
          className="text-darky-400 font-medium text-base ml-2 pb-2"
        >
          Message
        </label>
        <textarea
          placeholder="Entrez les détails"
          className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <div className="flex flex-col items-start justify-around pt-2 pb-2 w-full md:w-3/4 mx-auto">
        <Button
          size="md"
          icon="true"
          label={isSent ? "En cours..." : "Envoyer"}
          type="submit"
        >
          {isSent ? (
            <Icon.LuLoader size="18" />
          ) : (
            <Icon.LuArrowRight size="18" />
          )}
        </Button>
      </div>
    </form>
  );
};
