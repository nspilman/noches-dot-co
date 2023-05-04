import { Box, Image } from "@chakra-ui/react";
import { useEasterEgg } from "context";
import { Folder } from "./Folder";
import { ActionWindow } from "./ActionWindow";
import { NochesButton } from "./NochesButton/NochesButton";
import { useHomescreenNavigation } from "./useHomescreenNavigation";

export const Homepage = () => {
  const { folder, openFolder, closeFolder, action } = useHomescreenNavigation();
  const { easterEggStep, setEasterEggStep } = useEasterEgg();

  return (
    <Box height="full">
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
              label="My Computer"
              icon="/my-computer.png"
              onClick={() => openFolder("music")}
            />
          </Box>
          {/* <Box py={"8"}>
            <NochesButton
              label="My Merch"
              icon="/folder.png"
              onClick={() => openFolder("merch")}
            />
          </Box> */}
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
            right="6.25rem"
            top="25rem"
            width="6.25rem"
            maxWidth="unset"
            onClick={() =>
              setEasterEggStep(
                easterEggStep === "nochesRestored"
                  ? "doorOpen"
                  : "nochesRestored"
              )
            }
            zIndex="4"
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
          <NochesButton
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
