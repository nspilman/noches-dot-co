import { useEmailCapture } from "context/EmailCaptureContext";
import { useState } from "react";
import { openExternalLink } from "utils/openExternalLink";

const theGardenPresave =
  "https://distrokid.com/hyperfollow/noches/the-garden-2";

const instagram = "https://www.instagram.com/noches_exe/";
const tiktok = "https://www.tiktok.com/@noches.exe";
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
          icon: "/moon_pixel_icon.png",
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
          onClick: () => openExternalLink(instagram),
        },
        {
          label: "TikTok" as const,
          icon: "/tiktok.png",
          onClick: () => openExternalLink(tiktok),
        },
        {
          label: "Mailing List" as const,
          icon: "/email-icon.png",
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
