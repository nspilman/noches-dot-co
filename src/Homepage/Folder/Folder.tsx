import { Box, Stack, Wrap } from "@chakra-ui/react";
import { IconButton } from "../../../components/IconButton";
import { Label } from "../../../components/ScreenWrapper/Phone/Screen/types";
import { Window, Props as WindowProps } from "../../../components/Window";

interface Props extends WindowProps {
  buttonProps: {
    label?: Label;
    icon: string;
    onClick: () => void;
    width?: string;
  }[];
}

export const Folder = ({ buttonProps, windowName, onClose, width }: Props) => {
  return (
    <Window windowName={windowName} onClose={onClose} width={width}>
      <Box
        background="white"
        h="40"
        borderTop="2px solid #000"
        borderLeft="2px solid #000"
        borderRight="2px solid #efefef"
        borderBottom="2px solid #efefef"
      >
        <Stack pt="8" direction="row" justifyContent="space-around">
          {buttonProps.slice(0, 3).map((button, i) => (
            <IconButton {...button} key={i} labelColor="black" />
          ))}{" "}
        </Stack>
        {/* Flex wrap isn't working so I'm hacking it */}
        <Stack pt="8" direction="row" justifyContent="space-around">
          {buttonProps.slice(3, 6).map((button, i) => (
            <IconButton {...button} key={i} labelColor="black" />
          ))}{" "}
        </Stack>
      </Box>
    </Window>
  );
};
