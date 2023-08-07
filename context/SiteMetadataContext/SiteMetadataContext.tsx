import React, { createContext, useContext, useRef, useState } from "react";
import Head from "next/head";

interface SiteMetadataContextType {
  title: string;
  setTitle: (title: string) => void;
}

const SiteMetadataContext = createContext<SiteMetadataContextType>(
  {} as SiteMetadataContextType
);

export const SiteMetadataContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [title, setTitle] = useState("");

  return (
    <SiteMetadataContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Head>
        <title>
          Noches | Welcome to the Nocheverse {title ? `| ${title}` : ""}
        </title>
        <meta property="og:image" content="/home/noches.png" />
      </Head>
      {children}
    </SiteMetadataContext.Provider>
  );
};

export function useSiteMetadata(): SiteMetadataContextType {
  return useContext(SiteMetadataContext);
}
