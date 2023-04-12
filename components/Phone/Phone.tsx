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
        boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
        0 0 30px 10px rgba(255, 255, 255, 0.1)`}
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
