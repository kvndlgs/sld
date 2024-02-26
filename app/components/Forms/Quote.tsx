"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type QuoteData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  staff: string;
  region: string;
  when: string;
};

export const Quote: FC = () => {
  const { register, handleSubmit } = useForm<QuoteData>();

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Nom complet"
          {...register("name", { required: true })}
        />
      </div>
    </form>
  );
};
