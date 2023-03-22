import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../src/state/store";
import { Provider } from "react-redux";
import Head from "next/head";
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
