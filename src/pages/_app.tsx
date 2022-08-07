import { AppProps } from "next/app";
import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MK WebDev</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
