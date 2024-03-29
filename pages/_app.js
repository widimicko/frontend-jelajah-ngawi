import { useEffect } from "react";
import Router from "next/router";
import TagManager from "react-gtm-module";
import nprogress from "nprogress";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "nprogress/nprogress.css";

import "../styles/style.css";

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    TagManager.initialize({ gtmId: "GTM-TK5H4QZ" });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
