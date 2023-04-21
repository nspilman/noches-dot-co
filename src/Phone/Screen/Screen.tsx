import { Box } from "@chakra-ui/react";
import { IconButton } from "components/IconButton";
import { ActionWindow } from "./ActionWindow";
import { Folder } from "./Folder";
import { useHomescreenNavigation } from "./useHomescreenNavigation/useHomescreenNavigation";

export const Screen = () => {
  const { folder, openFolder, isEasterEggActive, closeFolder, action } =
    useHomescreenNavigation();

  return (
    <Box
      backgroundImage={"/bg.png"}
      backgroundSize="cover"
      height="full"
      borderRadius={{ base: "none", sm: "75" }}
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      width={{ base: "100vw", sm: "unset" }}
      position="relative"
    >
      {folder && <Folder {...folder} onClose={() => closeFolder()} />}
      {action && <ActionWindow {...action} />}
      <Box
        display="flex"
        height="full"
        width="full"
        justifyContent="space-between"
        px="4"
        py="2"
      >
        <Box
          display="flex"
          paddingY="4"
          flexDirection="column"
          height="full"
          alignItems="center"
          w="28"
          zIndex="3"
        >
          <Box py={"8"}>
            <IconButton
              label="My Music"
              icon="/music.png"
              onClick={() => openFolder("music")}
            />
          </Box>
          <Box py={"8"}>
            <IconButton
              label="My Merch"
              icon="/folder.png"
              onClick={() => openFolder("merch")}
            />
          </Box>
          <Box py={"8"}>
            <IconButton
              label="Internet Explorer"
              icon="/internet_explorer.png"
              onClick={() => openFolder("socials")}
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
        <Box
          display="flex"
          height="full"
          alignItems="flex-end"
          py="8"
          zIndex="3"
        >
          <IconButton
            label="Recycling Bin"
            icon={
              isEasterEggActive
                ? "/empty-recycling-bin.png"
                : "/recycle_bin.png"
            }
            onClick={() => openFolder("recyclingBin")}
          />
        </Box>
      </Box>
    </Box>
  );
};
