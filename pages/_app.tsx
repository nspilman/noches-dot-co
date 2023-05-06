import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/styles";
import Head from "next/head";
import { EasterEggContextProvider } from "context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "utils/analytics";
import { EmailCaptureContextProvider } from "context/EmailCaptureContext";
import { ShowPhoneNumberContextProvider } from "context/ShowPhoneNumberContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ShowPhoneNumberContextProvider>
      <EmailCaptureContextProvider>
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
      </EmailCaptureContextProvider>
    </ShowPhoneNumberContextProvider>
  );
}

export default MyApp;
