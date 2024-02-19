"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendQuote } from "@/app/utils/handleSend";
import * as Icon from "react-icons/lu";

export type QuickQuoteData = {
  name: string;
  phone: string;
  message: string;
};

export const QuickQuote: FC = () => {
  const { register, handleSubmit } = useForm<QuickQuoteData>();
  const [isSent, setIsSent] = useState(false);

  function onSubmit(data: QuickQuoteData) {
    sendQuote(data);
    setIsSent(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label> Nom </label>
        <input {...register("name", { required: true })} />
      </div>
      <div className="flex flex-col">
        <label> Telephone </label>
        <input {...register("phone", { required: true })} />
      </div>
      <div className="flex flex-col">
        <label> Nom </label>
        <textarea {...register("message", { required: true })} />
      </div>
      <button type="submit"> SOUMETTRE </button>
    </form>
  );
};
