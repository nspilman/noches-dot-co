import { Box, Image } from "@chakra-ui/react";
import { IconButton } from "components/IconButton";
import { useMemo } from "react";
import { useEasterEgg } from "src/EasterEggContext";
import { ActionWindow } from "./ActionWindow";
import { Folder } from "./Folder";
import { NochesButton } from "./NochesButton/NochesButton";
import { useHomescreenNavigation } from "./useHomescreenNavigation/useHomescreenNavigation";

export const Screen = () => {
  const { folder, openFolder, closeFolder, action } = useHomescreenNavigation();

  const { easterEggStep, setEasterEggStep } = useEasterEgg();

  const background = useMemo(() => {
    switch (easterEggStep) {
      case "disabled":
        return "/bg.jpeg";
      case "nochesRestored":
        return "/bg_daymoon.jpeg";
      case "doorOpen":
        return "/bg_nightmoon.png";
      default:
        return "";
    }
  }, [easterEggStep]);

  return (
    <Box
      backgroundImage={background}
      backgroundSize="cover"
      backgroundPosition="center"
      height="full"
      borderRadius={{ base: "none", sm: "75" }}
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      transition="1s"
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
            <NochesButton
              label="My Music"
              icon="/music.png"
              onClick={() => openFolder("music")}
            />
          </Box>
          <Box py={"8"}>
            <NochesButton
              label="My Merch"
              icon="/folder.png"
              onClick={() => openFolder("merch")}
            />
          </Box>
          <Box py={"8"}>
            <NochesButton
              label="Internet Explorer"
              icon="/internet_explorer.png"
              onClick={() => openFolder("socials")}
            />
          </Box>
        </Box>

        {easterEggStep !== "disabled" && (
          <Image
            src={
              easterEggStep === "nochesRestored"
                ? "/door-closed.png"
                : "/door-open.png"
            }
            position="absolute"
            right="100px"
            top="400px"
            width="100px"
            maxWidth="unset"
            onClick={() =>
              setEasterEggStep(
                easterEggStep === "nochesRestored"
                  ? "doorOpen"
                  : "nochesRestored"
              )
            }
            zIndex="3"
            cursor="pointer"
          />
        )}
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
              easterEggStep === "disabled"
                ? "/recycle_bin.png"
                : "/empty-recycling-bin.png"
            }
            onClick={() => openFolder("recyclingBin")}
          />
        </Box>
      </Box>
    </Box>
  );
};
