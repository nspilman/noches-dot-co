import { useState } from "react";
import { useFolders } from "./useFolders";
import { Text } from "@chakra-ui/react";

export const useHomescreenNavigation = () => {
  const [action, setAction] =
    useState<{
      windowName: string;
      onClose: () => void;
      text: string | React.ReactNode;
      onAccept: () => void;
    }>();
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const { folder, openFolder, closeFolder } = useFolders({
    isEasterEggActive,
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
      setIsEasterEggActive(true);
      setAction(undefined);
      closeFolder();
    },
  };

  return {
    openFolder,
    folder,
    isEasterEggActive,
    closeFolder,
    action,
  };
};
