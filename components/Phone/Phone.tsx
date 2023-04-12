import { Box } from "@chakra-ui/react";
import { Windows98FolderButton } from "../WindowsFolderButton/Button";

export const Phone = () => {
  return (
    <Box
      width="sm"
      height="95vh"
      borderRadius="2xl"
      margin="2"
      border="2px solid black"
      paddingTop="12"
      paddingBottom="5"
      paddingX="4"
      backgroundColor="gray.800"
    >
      <Box
        backgroundImage={"/bg.png"}
        backgroundSize="cover"
        height="full"
        borderRadius="md"
      >
        <Box display="flex" height="100%" width="100%" alignItems="flex-end">
          <Box display="flex" paddingY="4">
            <Windows98FolderButton label="~*~Merch~*~" />
            <Windows98FolderButton label="~*~Music~*~" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
