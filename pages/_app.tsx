import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../src/state/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";
const prefix = process.env.NEXT_PUBLIC_PATH || "";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={prefix + "/favicon.ico"}
          type="image/x-icon"
        />
      </Head>
      <Script
        async
        defer
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3502849656793135"
        crossOrigin="anonymous"
      ></Script>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
