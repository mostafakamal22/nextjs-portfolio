import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MK WebDev || Everything You Need!</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
