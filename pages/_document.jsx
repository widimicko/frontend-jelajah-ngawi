/* eslint-disable @next/next/no-head-element */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <head>
        <meta name="application-name" content="Jelajah Ngawi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jelajah Ngawi" />
        <meta
          name="description"
          content="Jelajah Ngawi merupakan situs yang digunakan untuk menyajikan informasi mengenai daftar wisata dan umkm di Ngawi dalam rangka menunjang potensi ekonomi daerah"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="apple-touch-icon" href="/assets/icons/icon512.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="assets/icons/icon48.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
