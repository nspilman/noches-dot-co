import { Box } from "@chakra-ui/react";
import { IconButton } from "../../IconButton";

export const Screen = () => {
  return (
    <Box
      backgroundImage={"/bg.png"}
      backgroundSize="cover"
      height="full"
      borderRadius="md"
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      width={{ base: "100vw", sm: "unset" }}
    >
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
          w="26"
        >
          <Box py={"8"}>
            <IconButton label="music" icon="/music.png" />
          </Box>
          <Box py={"8"}>
            <IconButton label="merch" icon="/folder.png" />
          </Box>
          <Box py={"8"}>
            <IconButton label="socials" icon="/internet_explorer.png" />
          </Box>
          {/* <Box py={"8"}>
            <IconButton label="noches.exe" icon="/noches.png" />
          </Box> */}
        </Box>
        <Box display="flex" height="full" alignItems="flex-end" py="8">
          <IconButton label="Recycling Bin" icon="/recycle_bin.png" />
        </Box>
      </Box>
    </Box>
  );
};
