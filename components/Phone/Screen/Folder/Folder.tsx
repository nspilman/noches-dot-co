import { Box, Button, Center, Text } from "@chakra-ui/react";
import { IconButton } from "../../../IconButton";
import { Label } from "../types";

interface Props {
  buttonProps: {
    label: Label;
    icon: string;
    onClick: () => void;
  }[];
  folderName: Label;
  onClose: () => void;
}

export const Folder = ({ buttonProps, folderName, onClose }: Props) => {
  return (
    <Center width="100%" height="100%" zIndex={1} position="absolute">
      <Box
        backgroundColor="#c6c6c6"
        width="72"
        borderTop="2px solid #efefef"
        borderLeft="2px solid #efefef"
        borderRight="2px solid #000"
        borderBottom="2px solid #000"
      >
        <Box
          w="full"
          backgroundColor="navy"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px="1"
        >
          <Text color="white">{folderName}</Text>
          <Button
            height="4"
            width="4"
            padding={0}
            minWidth="unset"
            borderRadius={0}
            borderLeft="2px solid #ededed"
            borderTop="2px solid #ededed"
            borderRight="2px solid #404040"
            borderBottom="2px solid #404040"
          >
            <img src="/close-icon.png" onClick={onClose} />
          </Button>
        </Box>
        <Box p="2">
          <Box
            background="white"
            h="40"
            borderTop="2px solid #000"
            borderLeft="2px solid #000"
            borderRight="2px solid #efefef"
            borderBottom="2px solid #efefef"
          >
            <Box py="8">
              {buttonProps.map((button, i) => (
                <IconButton {...button} key={i} labelColor="black" />
              ))}{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
