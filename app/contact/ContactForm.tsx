"use client";
import * as React from "react";
import * as Icon from "react-icons/lu";
import Button from "../components/button/Button";

interface ContactFormProps {
  error: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("api/send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Oops, une erreur est survenue.");
      }
      const data = await response.json();
    } catch (error) {
      if (
        typeof error === "object" &&
        error &&
        "message" in error &&
        typeof error.message == "string"
      )
        setError(error.message);

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="w-full py-10 md:py-10 px-6 md:px-12 ">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around md:py-8 py-4 mx-auto text-center px-6 md:px-20">
          <div className="w-full md:w-1/2 flex flex-col md:items-start md:mt-20 items-center justify-around pt-6 mx-auto md:px-8 ">
            <h4 className="text-base md:text-md text-darky-400 font-medium pb-4">
              {" "}
              Nous joindre{" "}
            </h4>
            <h1 className="md:text-lg text-md text-darky-800 font-semibold pb-3">
              Faites-nous part de vos projets{" "}
            </h1>
            <span className="w-8 h-1.5 bg-primary-400"></span>
            <p className="text-base font-medium text-darky-600 mt-8 text-center md:text-left">
              Nos équipes de signaleurs se feront un plaisir de vous aider à
              mettre en place une solution adapté à tout vos besoins en matière
              de signalisation routière.
            </p>
          </div>

          <div className="md:w-1/2 w-full py-4">
            <form className="py-2 w-full px-4 md:px-8" onSubmit={onSubmit}>
              <div className="flex flex-col items-start justify-between pt-2 pb-3">
                <label
                  htmlFor="fullname"
                  className="text-darky-400 font-medium text-base ml-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                />
              </div>
              <div className="w-full flex flex-row justify-between items-between">
                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                  <label
                    htmlFor="email"
                    className="text-darky-400 font-medium text-base ml-2"
                  >
                    Courriel
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Entrez votre courriel"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pl-2">
                  <label
                    htmlFor="phone"
                    className="text-darky-400 font-medium text-base ml-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="+1-438-526-5465"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-start">
                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                  <label
                    htmlFor="company"
                    className="text-darky-400 font-medium text-base ml-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Entrer le nom de l'entreprise"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-around  pt-2 pb-3 pl-2">
                  <label
                    htmlFor="role"
                    className="text-darky-400 font-medium text-base ml-2"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    placeholder="Votre role dans l'entreprise"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-around pt-2 pb-3">
                <label
                  htmlFor="message"
                  className="text-darky-400 font-medium text-base ml-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Entrez les détails"
                  className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                ></textarea>
              </div>

              <div className="flex flex-col items-start justify-around pt-2 pb-3">
                <Button
                  size="md"
                  icon="true"
                  label={isLoading ? "En cours..." : "Envoyer"}
                  type="submit"
                >
                  {isLoading ? (
                    <Icon.LuLoader size="18" />
                  ) : (
                    <Icon.LuArrowRight size="18" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
