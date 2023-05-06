// ThemeContext.tsx
import React, { createContext, useContext, useRef, useState } from "react";

interface ShowPhoneNumberContextType {
  showShowPhoneNumber: boolean;
  setShowPhoneNumber: (showShowPhoneNumber: boolean) => void;
  onCloseCallback: React.MutableRefObject<(() => void) | null>;
  blurb?: string;
  setBlurb: (blurb: string) => void;
}

const ShowPhoneNumberContext = createContext<ShowPhoneNumberContextType>(
  {} as ShowPhoneNumberContextType
);

export const ShowPhoneNumberContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [showShowPhoneNumber, setShowPhoneNumber] = useState(false);
  const [blurb, setBlurb] = useState("");
  const onCloseCallback = useRef<(() => void) | null>(null);

  return (
    <ShowPhoneNumberContext.Provider
      value={{
        showShowPhoneNumber,
        setShowPhoneNumber,
        onCloseCallback,
        blurb,
        setBlurb,
      }}
    >
      {children}
    </ShowPhoneNumberContext.Provider>
  );
};

export function useShowPhoneNumber(): ShowPhoneNumberContextType {
  return useContext(ShowPhoneNumberContext);
}
