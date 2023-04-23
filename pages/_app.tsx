import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/styles";
import Head from "next/head";
import { EasterEggContextProvider } from "src/EasterEggContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EasterEggContextProvider>
      <ChakraProvider theme={theme}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <Head>
          <title>Noches | Welcome to the Nocheverse</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </EasterEggContextProvider>
  );
}

export default MyApp;
