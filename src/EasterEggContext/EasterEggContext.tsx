// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";

type Step = "disabled" | "nochesRestored" | "doorOpen";

interface EasterEggContextType {
  easterEggStep: Step;
  setEasterEggStep: (step: Step) => void;
}

const EasterEggContext = createContext<EasterEggContextType>(
  {} as EasterEggContextType
);

export const EasterEggContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [easterEggStep, setEasterEggStep] = useState<Step>("disabled");

  return (
    <EasterEggContext.Provider value={{ easterEggStep, setEasterEggStep }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export function useEasterEgg(): EasterEggContextType {
  return useContext(EasterEggContext);
}
