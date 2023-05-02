// ThemeContext.tsx
import React, { createContext, useContext, useRef, useState } from "react";

interface EmailCaptureContextType {
  showEmailCapture: boolean;
  setShowEmailCapture: (showEmailCapture: boolean) => void;
  onCloseCallback: React.MutableRefObject<(() => void) | null>;
  blurb?: string;
  setBlurb: (blurb: string) => void;
}

const EmailCaptureContext = createContext<EmailCaptureContextType>(
  {} as EmailCaptureContextType
);

export const EmailCaptureContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [showEmailCapture, setShowEmailCapture] = useState(true);
  const [blurb, setBlurb] = useState("");
  const onCloseCallback = useRef<(() => void) | null>(null);

  return (
    <EmailCaptureContext.Provider
      value={{
        showEmailCapture,
        setShowEmailCapture,
        onCloseCallback,
        blurb,
        setBlurb,
      }}
    >
      {children}
    </EmailCaptureContext.Provider>
  );
};

export function useEmailCapture(): EmailCaptureContextType {
  return useContext(EmailCaptureContext);
}
