import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Portfolio, Hifnie, Universitas Gadjah Mada, Geodetic Engineering"
        />
        <meta name="author" content="Hifnie Nazih" />
        <meta title="Web Portfolio Hifnie Nazih Al Ghifari" />
        <meta
          name="description"
          content="Portfolio Website of Hifnie Nazih Al Ghifari, Geodetic Engineering Student at Universitas Gadjah Mada"
        />
        <title>Hifnie Nazih Al Ghifari Profile</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
