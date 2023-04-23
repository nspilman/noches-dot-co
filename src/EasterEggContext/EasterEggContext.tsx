// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useStorage } from "utils/useStorage";

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
  const easterEggPersistenceKey = "NocheseasterEgg" as const;
  const storage = useStorage<typeof easterEggPersistenceKey, Step>();
  const [easterEggStep, setEasterEggStep] = useState<Step>("disabled");

  useEffect(() => {
    const persistedEasterEggStep = storage.getItem(easterEggPersistenceKey);
    if (persistedEasterEggStep) {
      setEasterEggStep(persistedEasterEggStep);
    }
  }, [easterEggStep, storage]);

  const setAndPersistEasterEggStep = (step: Step) => {
    storage.setItem(easterEggPersistenceKey, step);
    setEasterEggStep(step);
  };

  return (
    <EasterEggContext.Provider
      value={{ easterEggStep, setEasterEggStep: setAndPersistEasterEggStep }}
    >
      {children}
    </EasterEggContext.Provider>
  );
};

export function useEasterEgg(): EasterEggContextType {
  return useContext(EasterEggContext);
}
