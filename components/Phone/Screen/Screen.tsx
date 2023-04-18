import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { IconButton } from "../../IconButton";
import { Folder } from "./Folder";
import { Label } from "./types";

export const Screen = () => {
  const folders = [
    {
      folderName: "Music" as const,
      buttonProps: [
        {
          label: "Spotify" as const,
          icon: "/spotify.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    {
      folderName: "Merch" as const,
      buttonProps: [
        {
          label: "Spotify" as const,
          icon: "/folder.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    {
      folderName: "Socials" as const,
      buttonProps: [
        {
          label: "Spotify" as const,
          icon: "/folder.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
    {
      folderName: "Recycling Bin" as const,
      buttonProps: [
        {
          label: "Noches.exe" as const,
          icon: "/noches.png",
          onClick: () => console.log("gotMe"),
        },
      ],
    },
  ];

  const openFolder = (
    folderName: Extract<Label, "Music" | "Merch" | "Socials" | "Recycling Bin">
  ) => {
    const folder = folders.find((folder) => folder.folderName === folderName);
    setFolder(folder);
  };

  const [folder, setFolder] = useState<typeof folders[number] | undefined>(
    folders[0]
  );
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
          {/* <Box py={"8"}>
            <IconButton label="noches.exe" icon="/noches.png" />
          </Box> */}
        </Box>
        <Box display="flex" height="full" alignItems="flex-end" py="8">
          <IconButton
            label="Recycling Bin"
            icon="/recycle_bin.png"
            onClick={() => openFolder("Recycling Bin")}
          />
        </Box>
      </Box>
    </Box>
  );
};
