"use client";
import * as React from "react";
import * as Icon from "react-icons/lu";
import Button from "../components/button/Button";

export default function ContactForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <>
      <div className="flex md:flex-row flex-col w-full h-full">
        {/** left side start **/}
        <div className="bg-primary flex items-center justify-center md:w-1/3 w-full md:py-0 py-16">
          <div className="flex flex-col mx-auto md:w-2/3 px-8 md:px-0">
            <h4 className="text-base md:text-md font-medium text-white">
              {" "}
              Nous joindre{" "}
            </h4>
            <h1 className="text-lg md:text-xl font-semibold text-white">
              {" "}
              Faites-nous part de vos projets{" "}
            </h1>
            <p className="text-sm md:text-base text-white mt-3">
              Nos équipes de signaleurs se feront un plaisir de vous aider à
              mettre en place une solution adapté à tout vos besoins en matière
              de signalisation routière.
            </p>
          </div>
        </div>
        {/** left side stop **/}
        {/** right side start **/}
        <div className="bg-white flex items-center justify-center md:w-2/3 w-full">
          <form className="w-full px-8 md:py-20 py-16">
            <div className="flex flex-col items-start justify-between w-full md:w-3/4 mx-auto">
              <label
                htmlFor="fullname"
                className="text-darky-400 font-medium ml-2 pb-2"
              >
                Nom
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Entrer votre nom"
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-400  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>

            <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
              <label
                htmlFor="email"
                className="text-darky-400 font-medium text-base ml-2 pb-2"
              >
                Courriel
              </label>
              <input
                type="string"
                name="email"
                placeholder="Entrer votre courriel"
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center pt-2 pb-3 md:pl-2 md:w-3/4 mx-auto">
              <label
                htmlFor="phone"
                className="text-darky-400 font-medium text-base ml-2 pb-2"
              >
                Téléphone
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Entrer votre téléphone"
                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start md:w-3/4 mx-auto">
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                <label
                  htmlFor="company"
                  className="text-darky-400 font-medium text-base ml-2 pb-2"
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
                  className="text-darky-400 font-medium text-base ml-2 pb-2"
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
            <div className="flex flex-col items-start justify-around pt-2 pb-3 w-full md:w-3/4 mx-auto">
              <label
                htmlFor="message"
                className="text-darky-400 font-medium text-base ml-2 pb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Entrez les détails"
                className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
              ></textarea>
            </div>

            <div className="flex flex-col items-start justify-around pt-2 pb-2 w-full md:w-3/4 mx-auto">
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
        {/** right side stop **/}
      </div>
    </>
  );
}

{
  /**

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
      console.log(formData);

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
      <div className="w-full h-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around mx-auto text-center">
          <div className='bg-primary max-w-half h-screen flex items-center justify-center'>
          <div className="flex flex-col md:items-start ml-16 items-center justify-around mx-auto ">
            <h4 className="text-base md:text-md text-primary-800 font-medium pb-4">
              {" "}
              Nous joindre{" "}
            </h4>
            <h1 className="md:text-lg text-md text-darky-800 font-semibold pb-3 max-w-1/3">
              Faites-nous part de vos projets{" "}
            </h1>
            <span className="w-8 h-1.5 bg-primary-800"></span>
            <p className="text-base font-medium text-primary-800 mt-8 text-left">
              Nos équipes de signaleurs se feront un plaisir de vous aider à
              mettre en place une solution adapté à tout vos besoins en matière
              de signalisation routière.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-auto py-4 ">
            <form className="py-2 " onSubmit={onSubmit}>
              <div className="flex flex-col items-start justify-between pt-2 pb-3">
                <label
                  htmlFor="fullname"
                  className="text-darky-400 font-medium text-base ml-2 pb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Entrer votre nom"
                  className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                />
              </div>
              <div className="w-full h-auto flex md:flex-row flex-col md:justify-between md:items-between items-center justify-center ">
                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                  <label
                    htmlFor="email"
                    className="text-darky-400 font-medium text-base ml-2 pb-2"
                  >
                    Courriel
                  </label>
                  <input
                    type="string"
                    name="email"
                    placeholder="Entrer votre courriel"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-center pt-2 pb-3 md:pl-2">
                  <label
                    htmlFor="phone"
                    className="text-darky-400 font-medium text-base ml-2 pb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Entrer votre téléphone"
                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start">
                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                  <label
                    htmlFor="company"
                    className="text-darky-400 font-medium text-base ml-2 pb-2"
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
                    className="text-darky-400 font-medium text-base ml-2 pb-2"
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
                  className="text-darky-400 font-medium text-base ml-2 pb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Entrez les détails"
                  className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                ></textarea>
              </div>

              <div className="flex flex-col items-start justify-around pt-2 pb-2">
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
      </div>
    </>
  );
}

*/
}
