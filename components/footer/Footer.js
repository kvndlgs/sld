import Link from 'next/link'

export default function Footer(){
    return (
        <footer className="bg-darky">
        <div className="container mx-auto w-fill p-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div
              className="border-b border-darky-700 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
            >
              <div className="block text-white lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width='70px'
                  x={0}
                  y={0}
                  enableBackground="new 123-184.1 504 541"
                  viewBox="123 -184.1 504 541"
                >
                  <path
                    id="bg"
                    d="M374.8 343.8c-83.2-26.5-154.5-79.5-204.1-148.9-23.3-32.7-35.7-71.9-35.7-112V-92.3c66.8-50.1 149.8-79.8 239.8-79.8s173 29.7 239.8 79.8V82.9c0 40.1-12.4 79.3-35.7 111.9-49.7 69.6-121 122.5-204.1 149z"
  
                  
                    fill="#2b353b"
                  />
                  <g id="letters">
                    <path
                      d="M370.8 310c-21.3-7.7-41.9-17.5-61.5-29v-24.4c5.5 3.2 11.1 6.3 16.6 9.1l2.9 1.5v-381.4l-2.2.3c-5.7.7-11.5 1.6-17.3 2.6v-21.6c20.1-3.6 40.8-5.5 61.5-5.7v21.7c-5.8.1-11.9.3-18.1.6l-1.9.1v393.7l1.2.5c6 2.5 12.3 5 18.8 7.3V310zM378.8-138.7c21 .2 42 2.2 62.5 5.9v24.1c-7.5-1.3-15-2.5-22.3-3.3-5.9-.7-12-1.3-18-1.7l-2.1-.1V32.6h22.5L418.1 53h-19.2v226.6l2.8-1.2c3.5-1.5 7.1-3.2 10.8-4.9 9.7-4.6 19.4-9.8 28.9-15.3v22.2c-19.8 11.8-40.8 21.8-62.5 29.6l-.1-448.7zM301.3 276.1c-7.3-4.6-14.5-9.5-21.5-14.5v-388c7.1-1.9 14.4-3.6 21.5-5v407.5zM449.2-131.2c6.7 1.4 13.2 2.9 19.5 4.5v364l4.1-3c13.2-9.7 26-20.4 37.9-31.8v24.4c-12.6 12.3-26.1 23.8-40.2 34.2l-.9.7c-6.5 4.7-13.3 9.3-20.3 13.8v-406.8h-.1zM257.9 244.3c-6.9-5.9-13.6-12.1-20.1-18.4v-338.4c6.7-2.7 13.4-5.2 20.1-7.4V32.5h17.3l-3.3 20.4h-14v191.4zM518.7-109.4c22.3 9.5 43.7 21.3 63.9 35.1V84.5c0 33.8-10.3 66.1-29.7 93.3-10.3 14.5-21.8 28.3-34.1 41.1l-.1-328.3zm20.1 269.1 3.7-6.6c11.8-20.7 18-44.4 18-68.6v-147l-.9-.6c-5.8-3.7-11.8-7.3-17.8-10.6l-3-1.7v235.1zM229.9 217.5c-12-12.6-23.2-26.1-33.1-40.1-19.5-27.2-29.8-59.5-29.8-93.3V70.8l22 9.4v3.9c0 24.4 6.3 48.2 18.2 69l3.7 6.5v-102L167 38.8V-74.7c19.8-13.6 40.9-25.3 62.9-34.7V10.7L211 2.6v-78.4l-3 1.6c-6 3.3-12.1 6.9-18 10.7l-.9.6v88.1l19.2 8.2 21.7 9.3v174.8h-.1z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
  
              <div className="mt-4 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-primary lg:block"></span>
  
                <div>
                  <h2 className="text-lg font-semibold text-darky-400">Soumission rapide</h2>
                </div>
  
                <form className="mt-4 w-full">
             
                  <div className="flex-col pb-2">
                    <label htmlFor="nom" className="text-darky-300 pb-2">Nom complet</label>
                    <input
                      type="text"
                      id="nom"
                      placeHolder="Nom"
                      className="w-full border-none font-medium rounded-md px-2 py-3 md:text-base focus:bg-darky-100 focus:ring-transparent text-sm"
                    />
                  </div>
                  <div
                    className="flex-col pb-2" >
                    <label htmlFor="email" className="text-darky-300 pb-32 font-medium text-base">Courriel</label>
                    <input
                      type="email"
                      id="email"
                      placeHolder="john@rhcp.com"
                      className="w-full border-none font-medium rounded-md px-2 py-3 md:text-base focus:bg-darky-100 focus:ring-transparent text-sm"
                    />
                  </div>
                
                    <div
                    className="flex-col pb-2" >
                    <label htmlFor="message" className="text-white pb-32 font-nrml">Details</label>
                    <textarea
                      id="message"
                      name="message"
                      placeHolder="Entrez votre message"
                      className="w-full border-none rounded-md md:text-base px-2 py-2 focus:border-transparent focus:ring-transparent text-sm"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-primary font-semibold text-primary-900 mt-2 px-4 py-3 rounded-md w-full">
                    Envoyer </button>
                </form>
              </div>
            </div>
  
            <div className="py-6 lg:py-16 lg:pe-16">
              <div className="hidden text-white lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width='70px'
                  x={0}
                  y={0}
                  enableBackground="new 123-184.1 504 541"
                  viewBox="123 -184.1 504 541"
                >
                  <path
                    id="bg"
                    d="M374.8 343.8c-83.2-26.5-154.5-79.5-204.1-148.9-23.3-32.7-35.7-71.9-35.7-112V-92.3c66.8-50.1 149.8-79.8 239.8-79.8s173 29.7 239.8 79.8V82.9c0 40.1-12.4 79.3-35.7 111.9-49.7 69.6-121 122.5-204.1 149z"
  
                    fill="#2b353b"
                  />
                  <g id="letters">
                    <path
                      d="M370.8 310c-21.3-7.7-41.9-17.5-61.5-29v-24.4c5.5 3.2 11.1 6.3 16.6 9.1l2.9 1.5v-381.4l-2.2.3c-5.7.7-11.5 1.6-17.3 2.6v-21.6c20.1-3.6 40.8-5.5 61.5-5.7v21.7c-5.8.1-11.9.3-18.1.6l-1.9.1v393.7l1.2.5c6 2.5 12.3 5 18.8 7.3V310zM378.8-138.7c21 .2 42 2.2 62.5 5.9v24.1c-7.5-1.3-15-2.5-22.3-3.3-5.9-.7-12-1.3-18-1.7l-2.1-.1V32.6h22.5L418.1 53h-19.2v226.6l2.8-1.2c3.5-1.5 7.1-3.2 10.8-4.9 9.7-4.6 19.4-9.8 28.9-15.3v22.2c-19.8 11.8-40.8 21.8-62.5 29.6l-.1-448.7zM301.3 276.1c-7.3-4.6-14.5-9.5-21.5-14.5v-388c7.1-1.9 14.4-3.6 21.5-5v407.5zM449.2-131.2c6.7 1.4 13.2 2.9 19.5 4.5v364l4.1-3c13.2-9.7 26-20.4 37.9-31.8v24.4c-12.6 12.3-26.1 23.8-40.2 34.2l-.9.7c-6.5 4.7-13.3 9.3-20.3 13.8v-406.8h-.1zM257.9 244.3c-6.9-5.9-13.6-12.1-20.1-18.4v-338.4c6.7-2.7 13.4-5.2 20.1-7.4V32.5h17.3l-3.3 20.4h-14v191.4zM518.7-109.4c22.3 9.5 43.7 21.3 63.9 35.1V84.5c0 33.8-10.3 66.1-29.7 93.3-10.3 14.5-21.8 28.3-34.1 41.1l-.1-328.3zm20.1 269.1 3.7-6.6c11.8-20.7 18-44.4 18-68.6v-147l-.9-.6c-5.8-3.7-11.8-7.3-17.8-10.6l-3-1.7v235.1zM229.9 217.5c-12-12.6-23.2-26.1-33.1-40.1-19.5-27.2-29.8-59.5-29.8-93.3V70.8l22 9.4v3.9c0 24.4 6.3 48.2 18.2 69l3.7 6.5v-102L167 38.8V-74.7c19.8-13.6 40.9-25.3 62.9-34.7V10.7L211 2.6v-78.4l-3 1.6c-6 3.3-12.1 6.9-18 10.7l-.9.6v88.1l19.2 8.2 21.7 9.3v174.8h-.1z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
  
              <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-md text-darky-400">Nos services</p>
  
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="/services/signalisation" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Signalisation routière
                      </a>
                    </li>
  
                    <li>
                      <a href="/services/escorte" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Urgences 24 heures
                      </a>
                    </li>
  
                    <li>
                      <a href="/services/location" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Location d'équipement
                      </a>
                    </li>
                  </ul>
                </div>
  
                <div>
                  <p className="font-semibold text-md text-darky-400">L'entreprise</p>
  
                  <ul className="mt-4 space-y-4 text-sm font-med">
                    <li>
                      <a href="/job" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Carrière
                      </a>
                    </li>
  
                    <li>
                      <a href="/about" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        L'équipe
                      </a>
                    </li>
  
                    <li>
                      <a href="/contact" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Nous joindre
                      </a>
                    </li>
                  </ul>
                </div>
  
                <div>
                  <p className="font-semibold text-md text-darky-400">Liens utiles</p>
  
                  <ul className="mt-4 space-y-4 text-sm">
                    <li>
                      <a href="#" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        AQTR
                      </a>
                    </li>
  
                    <li>
                      <a href="#" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        FAQs
                      </a>
                    </li>
  
                    <li>
                      <a href="#" className="font-medium text-base text-darky-200 transition hover:text-darky-200">
                        Clavarder avec un expert
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
  
              <div className="mt-8 border-t border-darky-500 pt-8">
                <ul className="flex flex-wrap gap-4 text-sm">
                  <li>
                    <a href="#" className="text-sm text-darky-400 transition hover:opacity-75">
                      Termes & Conditions
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="text-sm text-darky-400 transition hover:opacity-75">
                      Politique de confidentialité
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="text-sm text-darky-400  transition hover:opacity-75">
                      Cookies
                    </a>
                  </li>
                </ul>
  
                <p className="mt-8 text-sm text-darky-400">
                  &copy; 2023. Shield signalisation Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}