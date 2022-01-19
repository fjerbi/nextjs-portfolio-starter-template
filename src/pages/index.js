import React, { useState, useEffect } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import favicon from "../images/logojohndoe.png";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default function Home() {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <link rel="icon" href={favicon} />
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </div>
  );
}
