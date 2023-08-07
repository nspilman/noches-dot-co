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
import { SiteMetadataContextProvider } from "context/SiteMetadataContext";

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
            <SiteMetadataContextProvider>
              <Component {...pageProps} />
            </SiteMetadataContextProvider>
          </ChakraProvider>
        </EasterEggContextProvider>
      </EmailCaptureContextProvider>
    </ShowPhoneNumberContextProvider>
  );
}

export default MyApp;
