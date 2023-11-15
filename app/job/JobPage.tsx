"use client";

import * as React from "react";
import Button from "../components/button/Button";
import * as Icon from "react-icons/lu";

export default function JobPage() {
  const [state, setState] = React.useState({
    fullname: "",
    email: "",
    phone: "",
    file: "",
    errors: false,
    buttonText: "Envoyer",
    sending: false,
  });

  const { fullname, email, phone, file, buttonText, errors, sending } = state;

  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

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
          <form className="w-full px-8 md:py-20 py-16">
            <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
              <label className="text-darky-400 text-md pb-2 pt-3 ml-2">
                {" "}
                Nom{" "}
              </label>
              <input
                required
                autoComplete="new-password"
                type="text"
                value={fullname}
                placeholder="Entrer votre nom complet"
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
              <label className="text-darky-400 text-md pb-2 pt-3 ml-2">
                {" "}
                Mobile{" "}
              </label>
              <input
                required
                placeholder="Entrer votre numéro de mobile"
                autoComplete="new-password"
                type="phone"
                value={phone}
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-400  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
              <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
                {" "}
                Courriel
              </label>
              <input
                required
                placeholder="Entrer votre adresse courriel"
                autoComplete="new-password"
                type="email"
                value={email}
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>
            <div className="flex flex-col justify-around items-start">
              <label className="text-darky-400 font-medium text-md pb-2 pt-3 ml-2">
                {" "}
                C.V.{" "}
              </label>
              <input
                required
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                type="file"
                value={file}
              />
            </div>
            <div className="flex flex-col items-start justify-around pt-8 pb-3">
              <Button
                size="md"
                label={sending ? "Envois en cours" : buttonText}
                icon="true"
                type="submit"
              >
                <Icon.LuArrowRight size="18" className="ml-3" />
              </Button>
            </div>
          </form>
        </div>
        {/** right side stop **/}
      </div>
    </>
  );
}
