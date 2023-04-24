import { useState } from "react";
import { openExternalLink } from "utils/openExternalLink";

const theGardenPresave =
  "https://distrokid.com/hyperfollow/noches/the-garden-2";

const cookThuglessInstagram = "https://www.instagram.com/cookthugless/?hl=en";
const tiktok = "https://www.tiktok.com/@noches.exe";
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
          onClick: () => openExternalLink(theGardenPresave),
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
        {
          label: "TikTok" as const,
          icon: "/tiktok.png",
          onClick: () => openExternalLink(tiktok),
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
