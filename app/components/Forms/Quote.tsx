"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import * as Icon from "react-icons/lu";
import { sendQuote } from "@/app/utils/handleSend";

export type QuoteData = {
  name: string;
  email: string;
  message: string;
  phone: string;
  role: string;
  company: string;
  staff: string;
  region: string;
  when: string;
};

export const Quote: FC = () => {
  const { register, handleSubmit } = useForm<QuoteData>();
  const [isSent, setIsSent] = useState(false);

  function onSubmit(data: QuoteData) {
    sendQuote(data);
    setIsSent(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 w-full">
      <div className="flex-col pb-2">
        <label
          htmlFor="nom"
          className="text-darky-200 pb-3 font-medium text-base"
        >
          Nom
        </label>
        <input
          autoComplete="new-password"
          placeholder="Entrer votre nom"
          className="outline-none w-full  
          placeholder-darky-400 font-medium 
          rounded-md px-2 py-3 md:text-base 
          focus:bg-darky-50 ring-none border-transparent border-2 focus:border-primary"
          {...(register("name"), { required: true })}
        />
      </div>
      <div className="flex-col pb-2">
        <label
          htmlFor="email"
          className="text-darky-200 pb-3 font-medium text-base"
        >
          Courriel
        </label>
        <input
          autoComplete="new-password"
          type="email"
          id="email"
          placeholder="Entrer votre courriel"
          className="outline-none w-full placeholder-darky-400 font-medium rounded-md px-2 py-3 md:text-base 
          focus:bg-darky-50 ring-non border-transparent border-2 focus:border-primary"
          {...(register("email"), { required: true })}
        />
      </div>

      <div className="flex-col pb-2">
        <label
          htmlFor="message"
          className="text-darky-200 pb-3 font-medium text-base"
        >
          Message
        </label>
        <textarea
          placeholder="Entrer votre message"
          className="outline-none w-full placeholder-darky-400 font-medium rounded-md px-2 pt-3 mb-4 md:text-base 
          focus:bg-darky-50 ring-non  border-transparent border-2 focus:border-primary"
          {...(register("message"), { required: true })}
        ></textarea>
      </div>
      <Button type="submit" size="md" label="Envoyer" icon="true">
        <Icon.LuArrowRight size="22" className="ml-4" />
      </Button>
    </form>
  );
};
