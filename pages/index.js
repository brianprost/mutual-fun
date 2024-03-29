/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Nouns, Adjectives } from "../data/words";

export default function Home() {
  function generateCompanyName() {
    let ranCompName = Adjectives[Math.floor(Math.random() * Adjectives.length)];
    ranCompName += " ";
    ranCompName += Nouns[Math.floor(Math.random() * Nouns.length)];
    ranCompName += " ";
    ranCompName += Nouns[Math.floor(Math.random() * Nouns.length)];

    return ranCompName;
  }

  const [companyName, setCompanyName] = useState(generateCompanyName());

  return (
    <div className="flex flex-col justify-between h-screen bg-mf-blue">
      <nav className="flex align-top justify-center h-28 bg-mf-gold overflow-hidden">
        <img src="/img/mutual-fun-logo.svg" alt="mutual fun logo" />
      </nav>
      <main className="flex flex-col justify-center items-center">
        <h2 className="mb-10 text-2xl text-center text-mf-gold font-belleza tracking-wide">
          Your business name is:
        </h2>
        <div className="container flex flex-col justify-center h-72 max-w-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-neutral-200 rounded-lg border border-gray-200 drop-shadow-lg bg-opacity-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold capitalize text-mf-gold font-belleza drop-shadow-md px-3">
            {companyName}
          </h1>
        </div>
        <button
          type="reset"
          className="text-mf-gold bg-transparent border-2 border-mf-gold hover:bg-mf-gold hover:text-mf-blue hover:scale-110 rounded-lg text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-20 p-5 py-2.5 text-center font-belleza tracking-tight"
          onClick={() => setCompanyName(generateCompanyName())}
        >
          AnotherOne
        </button>
      </main>
      <footer className="flex">
        <div className="text-mf-gold text-md:text-lg font-bold font-belleza tracking-wider mb-3 ml-3">
          Made with ❤️ and ☕️ by{" "}
          <a
            href="https://brianprost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            Brian Prost
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
