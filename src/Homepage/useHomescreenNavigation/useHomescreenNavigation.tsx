import { useState } from "react";
import { useFolders } from "./useFolders";
import { Text } from "@chakra-ui/react";
import { useEasterEgg } from "context/EasterEggContext";

export const useHomescreenNavigation = () => {
  const [action, setAction] =
    useState<{
      windowName: string;
      onClose: () => void;
      text: string | React.ReactNode;
      onAccept: () => void;
    }>();

  const { easterEggStep, setEasterEggStep } = useEasterEgg();

  const { folder, openFolder, closeFolder } = useFolders({
    isEasterEggActive: easterEggStep !== "disabled",
    setNochesExe: () => setAction(nochesExeAction),
  });

  const nochesExeAction = {
    windowName: "Restore Noches.exe",
    text: (
      <>
        <Text as="p">Would you like to restore Noches.exe?</Text>{" "}
        <Text>[WARNING: THIS ACTION MAY BE UNSAFE]</Text>
      </>
    ),
    onClose: () => setAction(undefined),
    onAccept: () => {
      setEasterEggStep("nochesRestored");
      setAction(undefined);
      closeFolder();
    },
  };

  return {
    openFolder,
    folder,
    closeFolder,
    action,
  };
};
