import { useEffect } from "react";
import TagManager from "react-gtm-module";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    TagManager.initialize({ gtmId: "GTM-TK5H4QZ" });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
