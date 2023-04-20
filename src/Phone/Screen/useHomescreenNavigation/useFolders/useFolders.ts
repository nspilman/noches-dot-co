import { useState } from "react";
import { openExternalLink } from "utils/openExternalLink";
import { Label } from "../../types";

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
  const [folder, setFolder] = useState<typeof folders[number]>();

  const folders = [
    {
      windowName: "Music" as const,
      buttonProps: [
        {
          label: "Spotify" as const,
          icon: "/spotify.png",
          onClick: () => openExternalLink(cookThuglessSpotifyUrl),
        },
      ],
    },
    {
      windowName: "Merch" as const,
      buttonProps: [
        {
          label: "Merch" as const,
          icon: "/folder.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    {
      windowName: "Socials" as const,
      buttonProps: [
        {
          label: "Instagram" as const,
          icon: "/instagram.png",
          onClick: () => openExternalLink(cookThuglessInstagram),
        },
      ],
    },
    {
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
  ];

  const openFolder = (
    folderName: Extract<Label, "Music" | "Merch" | "Socials" | "Recycling Bin">
  ) => {
    const folder = folders.find((folder) => folder.windowName === folderName);
    setFolder(folder);
  };

  return { folder, openFolder, closeFolder: () => setFolder(undefined) };
};
