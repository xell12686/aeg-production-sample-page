import { Open_Sans } from "next/font/google";
import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
