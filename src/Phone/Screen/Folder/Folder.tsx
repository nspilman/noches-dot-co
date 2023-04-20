import { Box } from "@chakra-ui/react";
import { IconButton } from "../../../../components/IconButton";
import { Label } from "../types";
import { Window, Props as WindowProps } from "../../../../components/Window";

interface Props extends WindowProps {
  buttonProps: {
    label: Label;
    icon: string;
    onClick: () => void;
  }[];
}

export const Folder = ({ buttonProps, windowName, onClose }: Props) => {
  return (
    <Window windowName={windowName} onClose={onClose}>
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
    </Window>
  );
};
