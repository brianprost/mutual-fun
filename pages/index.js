import React, { useState } from "react";
import Head from "next/head";
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
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Inter:wght@659&display=optional"
        />
        <meta
          name="theme-color"
          content="#ddc385"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#003049"
          media="(prefers-color-scheme: dark)"
        />
        <meta property="og:title" content="Mutual FUN" />
        <meta property="og:image" content="img/mutual-fun-logo.jpg" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen bg-sky-900">
        <img
          src="./img/mutual-fun-logo.jpg"
          className="sm:max-h-60 w-auto pb-20 rounded-lg"
          alt="mutual fun logo"
        />
        <div className="flex items-center px-6 py-32 h-1/3 w-auto max-w-lg bg-neutral-200 rounded-lg border border-gray-200 drop-shadow-lg mx-4 md:mx-0 bg-opacity-20">
          <h1 className="text-7xl text-center font-bold capitalize text-yellow-600 font-belleza drop-shadow-md">
            {companyName}
          </h1>
        </div>

        <button
          type="reset"
          className="text-white bg-transparent border-2 border-white hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl mt-20 px-5 py-2.5 text-center mr-2 mb-2 font-inter font-light tracking-narrow"
          onClick={() => setCompanyName(generateCompanyName())}
        >
          AnotherOne
        </button>
      </div>
    </div>
  );
}
