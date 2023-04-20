import { useState } from "react";
import { useFolders } from "./useFolders";

export const useHomescreenNavigation = () => {
  const [action, setAction] =
    useState<{
      windowName: string;
      onClose: () => void;
      text: string;
      onAccept: () => void;
    }>();
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const { folder, openFolder, closeFolder } = useFolders({
    isEasterEggActive,
    setNochesExe: () => setAction(nochesExeAction),
  });

  const nochesExeAction = {
    windowName: "Restore Noches.exe",
    text: "[WARNING: THIS ACTION MAY BE UNSAFE] Would you like to restore Noches.exe?",
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
