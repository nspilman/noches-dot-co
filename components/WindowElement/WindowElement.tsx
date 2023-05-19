import { Box, Button, Text } from "@chakra-ui/react";

interface Props {
  windowName: string;
  children: React.ReactElement;
  onClose?: () => void;
  width?: string;
}

export const WindoWElement = ({
  windowName,
  children,
  onClose,
  width,
}: Props) => (
  <Box
    backgroundColor="#c6c6c6"
    borderTop="2px solid #efefef"
    borderLeft="2px solid #efefef"
    borderRight="2px solid #000"
    borderBottom="2px solid #000"
    width={width || "full"}
  >
    <Box
      w="full"
      background="linear-gradient(90deg,navy,#1084d0)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="1"
    >
      <Text color="white" fontFamily="body" fontSize="lg">
        {windowName}
      </Text>
      {onClose && (
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
      )}
    </Box>
    <Box p="2">{children}</Box>
  </Box>
);
