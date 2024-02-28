import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-icons/lu";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div>
      <div className="w-full md:px-16 px-4 py-12 pt-8 md:py-14 bg-darky-700">
        <div className="md:flex-row flex items-center justify-between flex-col w-full">
          <div className="w-full md:w-1/2 md:p-5 p-2">
            <Image
              src="/images/hero-truck.png"
              alt="Camion de signaleur routier"
              className="px-4"
              id="truck"
              width="900"
              height="900"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:px-5 px-2">
            <h1 className="md:text-xl text-lg font-bold text-darky-100 pb-1.5">
              {" "}
              La sécurité de vos chantiers entre de bonnes mains{" "}
            </h1>
            <p className="pb-[40px] text-base text-darky-50">
              {" "}
              Chaque chantier est unique et nos équipes mettront en place une
              solution adaptée a vos besoins.
            </p>
            <Link href="/services">
              <Button label="En savoir plus" size="md" icon="true">
                <Icon.LuArrowRight size="16" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
