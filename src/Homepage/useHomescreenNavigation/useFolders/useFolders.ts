import { useEmailCapture } from "context/EmailCaptureContext";
import { useState } from "react";
import { openExternalLink } from "utils/openExternalLink";

const theGardenYt = "https://www.youtube.com/watch?v=3abavR5ZfXE";

const uglyBoyYt = "https://www.youtube.com/watch?v=yG_fPKcfdBI";

const instagram = "https://www.instagram.com/noches.exe/";
const tiktok = "https://www.tiktok.com/@filename_noches.exe";
const youtube = "https://www.youtube.com/@noches_exe";
const spotify =
  "https://open.spotify.com/artist/4bqKmpTOZxoCvZinMYqML7?si=_plUSwrXREi2p7iYVfjTww";

const appleMusic = "https://music.apple.com/us/artist/noches/1683966010";
export const useFolders = ({
  isEasterEggActive,
  setNochesExe,
}: {
  isEasterEggActive: boolean;
  setNochesExe: () => void;
}) => {
  const [folderKey, setFolderKey] = useState<keyof typeof folders>();
  const { setShowEmailCapture } = useEmailCapture();

  const folders = {
    music: {
      windowName: "My Computer" as const,
      buttonProps: [
        {
          label: "THE GARDEN" as const,
          icon: "home/moon_pixel_icon.png",
          onClick: () => openExternalLink(theGardenYt),
        },
        {
          label: "UGLY BOY" as const,
          icon: "home/ugly_boy_link.png",
          onClick: () => openExternalLink(uglyBoyYt),
        },
      ],
    },
    merch: {
      windowName: "My Merch" as const,
      buttonProps: [
        {
          label: "My Merch" as const,
          icon: "/home/folder.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    socials: {
      windowName: "Internet Explorer" as const,
      buttonProps: [
        {
          icon: "/home/instagram.png",
          onClick: () => openExternalLink(instagram),
        },
        {
          icon: "/home/tiktok.png",
          onClick: () => openExternalLink(tiktok),
        },
        {
          icon: "/home/youtube.png",
          onClick: () => openExternalLink(youtube),
        },
        {
          icon: "/home/spotify.png",
          onClick: () => openExternalLink(spotify),
        },
        {
          icon: "/home/apple-music.png",
          onClick: () => openExternalLink(appleMusic),
        },
        {
          icon: "/home/email-icon.png",
          onClick: () => setShowEmailCapture(true),
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
              icon: "/home/noches.png",
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
