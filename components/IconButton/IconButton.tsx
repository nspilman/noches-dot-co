// Windows98FolderButton.tsx
import React from "react";
import {
  Button,
  ButtonProps,
  useTheme,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { Label } from "../Phone/Screen/types";

export interface Props extends ButtonProps {
  label: Label;
  icon: string;
  labelColor?: "white" | "black";
  onClick: () => void;
}

export const IconButton = ({
  label,
  icon,
  labelColor = "white",
  onClick,
}: Props): React.ReactElement => {
  const theme = useTheme();

  return (
    <Button
      backgroundColor="unset"
      _hover={{ backgroundColor: "unset" }}
      onClick={onClick}
    >
      <Center flexDirection="column">
        <Image src={icon} width="42px" height="50px" pb="2" />
        <Text
          fontWeight="light"
          color={labelColor}
          textShadow={"0 0 10px 2px rgba(0, 0, 0, 0.7)"}
        >
          {label}
        </Text>
      </Center>
    </Button>
  );
};
