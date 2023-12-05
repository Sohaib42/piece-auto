import React from "react";
import Image from "next/image";
import '../styles/fonts.css';
import Carousel from "./components/Carousel";
import ListProduct from "./components/ListProduct";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-zinc-300 mb-0 flex-col flex mt-px max-sm:h-full">
    <Navbar />
    <div className="bg-zinc-300 self-stretch z-[1] flex min-h-full w-full flex-col mb-5 max-md:max-w-full max-md:mb-10">
      <div
        className="flex flex-col relative shrink-0 box-border min-h-0 shadow-[rgba(17,17,26,0.1)_0px_1px_0px,rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_48px] bg-zinc-300 border mt-5 mx-5 p-5 p-2 rounded border-none max-sm:rounded-[71px]"
      >
          <section id="aboutus" className="flex flex-col relative shrink-0 box-border min-h-0 bg-zinc-300 border w-full self-stretch grow max-w-[1200px] items-stretch mt-5 mx-auto p-5 p-2 rounded border-none max-sm:rounded-[71px]">
            <div className="relative shrink-0 box-border h-auto mt-5 mx-auto">
              <h2 className="section-title">À propos de nous</h2>
            </div>
            <div className="relative shrink-0 box-border h-auto text-center mt-5 mx-auto">
              <span className="text-base not-italic  bg-zinc-300">
                Chez Pièces-auto (Maxfil), nous nous engageons à fournir des
                pièces automobiles de qualité supérieure pour répondre à tous
                vos besoins. Avec une vaste sélection de pièces détachées, nous
              </span>
              <span className="text-base not-italic  bg-zinc-300"> </span>
              <span className="text-base not-italic  bg-zinc-300">
                sommes votre partenaire de confiance dans le secteur automobile.
                Notre équipe d&apos;experts travaille sans relâche pour vous offrir
                les meilleures solutions, que vous soyez un professionnel de
                l&apos;automobile ou un passionné de voitures.
              </span>
            </div>
            <Carousel images={[
          { url: '/Pieceautonuit.jpg', alt: 'Piece Auto Nuit', legend: 'Piece Auto Nuit' },
          { url: '/devanture bureau.jpg', alt: 'Devanture Bureau', legend: 'Devanture Bureau' },
          {
            url: '/4.jpg',
            alt: 'Random Image 1',
            legend: 'Image 1'
          },
          { url: '/bureau.jpg', alt: 'Bureau', legend: 'Bureau' },
          { url: '/Armoireentretien.jpg', alt: 'Armoire Entretien', legend: 'Armoire Entretien' },
          {
            url: '/5.jpg',
            alt: 'Random Image 1',
            legend: 'Image 1'
          },
          {
            url: '/3.jpg',
            alt: 'Random Image 1',
            legend: 'Image 1'
          },
          {
            url: '/6.jpg',
            alt: 'Random Image 1',
            legend: 'Image 1'
          },
         
          { url: '/Decalaminant.jpg', alt: 'Décalaminant', legend: 'Décalaminant' },
          { url: '/Oximo.jpg', alt: 'Oximo', legend: 'Oximo' },
          { url: '/parfumvoiture.jpg', alt: 'Parfum Voiture', legend: 'Parfum Voiture' },
          { url: '/Decrassmoteur.jpg', alt: 'Décrassmoteur', legend: 'Décrassmoteur' },
        ]} />
          </section>
        </div>
        <div
          className="flex flex-col relative shrink-0 box-border min-h-[114px] bg-zinc-300 shadow-[rgba(17,17,26,0.1)_0px_1px_0px,rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_48px] mt-5 mx-5 p-5 p-2 rounded border-none max-sm:rounded-[71px]"
          max-width={1200}
        >
          <section id="produits" className="flex flex-col relative shrink-0 box-border min-h-[114px] bg-zinc-300 w-full self-stretch grow max-w-[1200px] items-stretch mt-5 mx-auto p-5 p-2 rounded border-none max-sm:rounded-[71px]">
            <div className="relative shrink-0 box-border h-auto mt-5 mx-auto">
              <h2 className="section-title">Nos produits</h2>
            </div>
            <div className="relative shrink-0 box-border h-auto text-center mt-5 mx-auto">
              <span className="text-base not-italic  text-left bg-zinc-300">
                Explorez notre gamme complète de pièces automobiles détachées.
                Que vous cherchiez du freinage, des filtres, des éléments de suspensions ou
                des pièces moteur, nous avons ce qu&apos;il vous faut. Nous nous efforçons de vous fournir les pièces
                les plus fiables et durables du marché.
              </span>
              <br />
            </div>
          </section>
          <ListProduct/>
        </div>{" "}
        <div
          className="flex flex-col relative shrink-0 box-border min-h-[74px] bg-zinc-300 shadow-[rgba(17,17,26,0.1)_0px_1px_0px,rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_48px] mt-5 mx-5 p-5 p-2 rounded border-none max-sm:min-h-[306px] max-sm:bg-zinc-300 max-sm:rounded-[71px]"
          max-width={1200}
        >
          <section id="livraison" className="flex flex-col relative shrink-0 box-border min-h-[74px] bg-zinc-300 w-full self-stretch grow max-w-[1200px] items-stretch mt-5 mx-auto p-5 p-2 rounded border-none max-sm:min-h-[306px] max-sm:bg-zinc-300 max-sm:rounded-[71px]">
            <div className="relative shrink-0 box-border h-auto mt-5 mx-auto">
              <h2 className="section-title">Livraison</h2>
            </div>{" "}
            <div className="relative shrink-0 box-border h-auto text-center mt-5 mx-auto max-sm:h-auto max-sm:grow-0">
              <p>
                <span className="text-base not-italic  text-left bg-zinc-300">
                  Nous offrons la livraison gratuite à tous nos clients
                  professionnels. C&apos;est notre manière de vous remercier pour
                  votre partenariat et votre confiance. Nous comprenons
                  l&apos;importance d&apos;un service rapide et fiable, c&apos;est pourquoi
                  nous nous engageons à livrer vos commandes dans les plus brefs
                  délais.
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-[rgb(75,85,99)] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <h5 className="text-lg font-bold mb-2">Pièces auto (Maxfil)</h5>
              <p className="text-sm my-2">
                Votre fournisseur de confiance en pièces automobiles détachées.
              </p>
              <h5 className="text-lg font-bold mb-2">Contact</h5>
              <p className="text-sm my-1">
              06 52 31 89 42
              </p>
              <p className="text-sm my-1">
              09 55 30 82 81
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <h5 className="text-lg font-bold mb-2">Navigation</h5>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#aboutus" className="hover:underline">À propos de nous</a>
                </li>
                <li className="mb-1">
                  <a href="#produits" className="hover:underline">Nos produits</a>
                </li>
                <li className="mb-1">
                  <a href="#livraison" className="hover:underline">Livraisons</a>
                </li>
              </ul>
            </div>
            {/* Ajouter d'autres sections si nécessaire */}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} Pièces auto (Maxfil). Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
