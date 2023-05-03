// Windows98FolderButton.tsx
import React from "react";
import {
  Button,
  ButtonProps,
  Text,
  Center,
  Image,
  Wrap,
} from "@chakra-ui/react";
import { Label } from "../ScreenWrapper/Phone/Screen/types";

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
  const onContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("right click");
  };
  return (
    <Button
      backgroundColor="unset"
      _hover={{ backgroundColor: "unset" }}
      onClick={onClick}
      px="0"
      onContextMenu={onContextMenu}
    >
      <Center flexDirection="column">
        <Image src={icon} width="2.125rem" height="2.5rem" pb="1" />
        <Text
          fontWeight="light"
          color={labelColor}
          textShadow={"0 0 10px 2px rgba(0, 0, 0, 0.7)"}
          wordBreak="break-word"
          whiteSpace="normal"
          width={"5.5rem"}
        >
          {label}
        </Text>
      </Center>
    </Button>
  );
};
