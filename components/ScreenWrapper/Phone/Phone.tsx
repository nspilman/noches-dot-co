import { Box, Image } from "@chakra-ui/react";
import { Screen } from "./Screen";

export const Phone = ({
  children,
  screenBg,
}: {
  children: React.ReactElement;
  screenBg: string;
}): React.ReactElement => {
  return (
    <Box
      width={{ base: "full", sm: "xs" }}
      borderRadius={{ base: 0, sm: "full" }}
      margin={{ base: 0, sm: "4" }}
      border="2px solid black"
      backgroundColor="gray.800"
      fontFamily={"Arial,sans-serif"}
      position="relative"
      height={{ base: "full", sm: "658px" }}
    >
      <Box
        position="absolute"
        zIndex={2}
        display={{ base: "none", sm: "block" }}
      >
        <Image src="iphone.png" width="xs" maxHeight="unset" maxWidth="unset" />
      </Box>
      <Screen screenBg={screenBg}>{children}</Screen>
    </Box>
  );
};
