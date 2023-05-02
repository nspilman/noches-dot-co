import { Box, Center, Text, Button } from "@chakra-ui/react";

export interface Props {
  windowName: string;
  onClose: () => void;
  zIndex?: number;
}

export const Window = ({
  windowName,
  onClose,
  children,
  zIndex,
}: Props & { children: React.ReactElement }) => {
  return (
    <Center
      width="100%"
      height="100%"
      position="absolute"
      zIndex={1000 + (zIndex || 0)}
    >
      <Box
        backgroundColor="#c6c6c6"
        width="64"
        borderTop="2px solid #efefef"
        borderLeft="2px solid #efefef"
        borderRight="2px solid #000"
        borderBottom="2px solid #000"
      >
        <Box
          w="full"
          background="linear-gradient(90deg,navy,#1084d0)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px="1"
        >
          <Text color="white" fontFamily="roboto" fontSize="xs">
            {windowName}
          </Text>
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
        <Box p="2">{children}</Box>
      </Box>
    </Center>
  );
};
