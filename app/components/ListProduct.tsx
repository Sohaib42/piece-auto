import * as React from "react";

export default function ListProduct(props: any) {
  return (
    <div className="items-center shadow-sm flex flex-col">
        <h2 className="section-title text-center my-10">Notre collection complète : des produits pour tous vos besoins</h2>
      <h1 className="text-amber-500 text-center text-4xl leading-10">
        MOTEUR
      </h1>
      <img
        loading="lazy"
        srcSet="/trait.png"
      />
      <div className="flex-wrap justify-between items-stretch self-stretch flex w-full gap-5 my-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Filtres.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
            FILTRES
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Prechauffage.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            PRECHAUFFAGE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Demarrage & charge.svg"
          />
          <div className="text-white text-center text-xs leading-6 bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            DEMARRAGE & CHARGE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Courroie.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            COURROIES
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Echappement.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-2.5">
            ÉCHAPPEMENT
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/EMBRAYAGE.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
            EMBRAYAGE
          </div>
        </div>
      </div>
      <div className="flex-wrap justify-between items-stretch self-stretch flex w-full gap-5 my-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/THERMIQUE MOTEUR.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            THERMIQUE MOTEUR
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Injection.svg"
          />
          <div className="text-white text-center text-xs leading-6 bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            INJECTION
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            className="aspect-[1.68] object-contain object-center w-[94px] overflow-hidden max-w-full"
            src="/Gestion moteur.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
            GESTION MOTEUR
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Contacteur relai.svg"
          />
          <div className="text-white text-center text-xs leading-6 bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            CONTACTEURS & RELAIS
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Pieces moteurs.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            PIECES MOTEURS
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Turbo.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
            TURBO
          </div>
        </div>
      </div>
      
      <h1 className="text-amber-500 text-center text-4xl leading-10">
        CHASSIS
      </h1>
      <img
        loading="lazy"
        srcSet="/trait.png"
      />
      <div className="flex-wrap justify-between items-stretch self-stretch flex w-full gap-5 my-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-    [0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Frein friction.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
            FREIN / FRICTION
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Frein hydraulique.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
          FREIN / HYDRAULIQUE          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Direction et suspension.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          DIRECTION & SUSPENSION
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Amortisseurs ressorts.svg"
          />
          <div className="text-white text-center text-xs leading-6 bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          AMORTISSEURS & RESSORTS          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Roulement Moyeux de roue.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          ROULEMENTS & MOYEUX DE ROUE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Transmission.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-2.5">
          TRANSMISSION
          </div>
        </div>
      </div>
      <h1 className="text-amber-500 text-center text-4xl leading-10">
        AUTRES
      </h1>
      <img
        loading="lazy"
        srcSet="/trait.png"
      />
      <div className="flex-wrap justify-between items-stretch self-stretch flex w-full gap-5 my-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Essuyage.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
            ESSUYAGE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Eclairage.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          ÉCLAIRAGE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Climatisation.svg"
          />
          <div className="text-white text-center text-xs leading-6 bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          CLIMATISATION
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Attelages.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-3">
          ATTELAGES
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Securite confort habitacle.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center mt-1 px-5 py-2.5">
          SECURITE / CONFORT HABITACLE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Carrosserie.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
          CARROSSERIE
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="/Electronique.svg"
          />
          <div className="text-white text-center text-xs leading-6 whitespace-nowrap bg-amber-500 self-stretch items-center px-5 py-3">
          ELECTRONIQUE
          </div>
        </div>
      </div>
    </div>
  );
}