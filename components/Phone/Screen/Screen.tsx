import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { IconButton } from "../../IconButton";
import { ActionWindow } from "./ActionWindow/ActionWindow";
import { Folder } from "./Folder";
import { Label } from "./types";

export const Screen = () => {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const cookThuglessSpotifyUrl =
    "https://open.spotify.com/artist/6nP9APsxfZXjwl4vl3e3DF";

  const cookThuglessInstagram = "https://www.instagram.com/cookthugless/?hl=en";

  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

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
              onClick: () => setAction(nochesExeAction),
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

  const [folder, setFolder] = useState<typeof folders[number]>();
  const [action, setAction] =
    useState<{
      windowName: string;
      onClose: () => void;
      text: string;
      onAccept: () => void;
    }>();

  const nochesExeAction = {
    windowName: "Restore Noches.exe",
    text: "Would you like to restore Noches.exe?",
    onClose: () => setAction(undefined),
    onAccept: () => {
      setIsEasterEggActive(true);
      setAction(undefined);
      setFolder(undefined);
    },
  };

  return (
    <Box
      backgroundImage={"/bg.png"}
      backgroundSize="cover"
      height="full"
      borderRadius="md"
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      width={{ base: "100vw", sm: "unset" }}
      position="relative"
    >
      {folder && <Folder {...folder} onClose={() => setFolder(undefined)} />}
      {action && <ActionWindow {...action} />}
      <Box
        display="flex"
        height="full"
        width="full"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          paddingY="4"
          flexDirection="column"
          height="full"
          alignItems="center"
          w="28"
        >
          <Box py={"8"}>
            <IconButton
              label="Music"
              icon="/music.png"
              onClick={() => openFolder("Music")}
            />
          </Box>
          <Box py={"8"}>
            <IconButton
              label="Merch"
              icon="/folder.png"
              onClick={() => openFolder("Merch")}
            />
          </Box>
          <Box py={"8"}>
            <IconButton
              label="Socials"
              icon="/internet_explorer.png"
              onClick={() => openFolder("Socials")}
            />
          </Box>
          {isEasterEggActive && (
            <Box py={"8"}>
              <IconButton
                label="Noches.exe"
                icon="/noches.png"
                onClick={() => console.log("")}
              />
            </Box>
          )}
        </Box>
        <Box display="flex" height="full" alignItems="flex-end" py="8">
          <IconButton
            label="Recycling Bin"
            icon={
              isEasterEggActive
                ? "/empty-recycling-bin.png"
                : "/recycle_bin.png"
            }
            onClick={() => openFolder("Recycling Bin")}
          />
        </Box>
      </Box>
    </Box>
  );
};
