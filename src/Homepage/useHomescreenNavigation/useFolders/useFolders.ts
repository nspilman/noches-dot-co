import { useState } from "react";
import { openExternalLink } from "utils/openExternalLink";
import { Label } from "../../../../components/ScreenWrapper/Phone/Screen/types";

const cookThuglessSpotifyUrl =
  "https://open.spotify.com/artist/6nP9APsxfZXjwl4vl3e3DF";

const cookThuglessInstagram = "https://www.instagram.com/cookthugless/?hl=en";
export const useFolders = ({
  isEasterEggActive,
  setNochesExe,
}: {
  isEasterEggActive: boolean;
  setNochesExe: () => void;
}) => {
  const [folderKey, setFolderKey] = useState<keyof typeof folders>();

  const folders = {
    music: {
      windowName: "My Music" as const,
      buttonProps: [
        {
          label: "Spotify" as const,
          icon: "/spotify.png",
          onClick: () => openExternalLink(cookThuglessSpotifyUrl),
        },
      ],
    },
    merch: {
      windowName: "My Merch" as const,
      buttonProps: [
        {
          label: "My Merch" as const,
          icon: "/folder.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    socials: {
      windowName: "Internet Explorer" as const,
      buttonProps: [
        {
          label: "Instagram" as const,
          icon: "/instagram.png",
          onClick: () => openExternalLink(cookThuglessInstagram),
        },
      ],
    },
    recyclingBin: {
      windowName: "Recycling Bin" as const,
      buttonProps: isEasterEggActive
        ? []
        : [
            {
              label: "Noches.exe" as const,
              icon: "/noches.png",
              onClick: () => setNochesExe(),
            },
          ],
    },
  };

  const openFolder = (folderName: keyof typeof folders) => {
    setFolderKey(folderName);
  };

  return {
    folder: folderKey && folders[folderKey],
    openFolder,
    closeFolder: () => setFolderKey(undefined),
  };
};
