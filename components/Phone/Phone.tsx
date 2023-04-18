import { Box } from "@chakra-ui/react";
import { Screen } from "./Screen";

export const Phone = () => {
  return (
    <Box
      width="sm"
      height={{ base: "full", sm: "95vh" }}
      borderRadius="2xl"
      margin={{ base: 0, sm: "4" }}
      border="2px solid black"
      paddingTop={{ base: 0, sm: "12" }}
      paddingBottom={{ base: 0, sm: "5" }}
      paddingX={{ base: 0, sm: "4" }}
      backgroundColor="gray.800"
      fontFamily={"Arial,sans-serif"}
    >
      <Screen />
    </Box>
  );
};
