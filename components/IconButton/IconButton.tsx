// Windows98FolderButton.tsx
import React from "react";
import { Button, ButtonProps, Text, Center, Image } from "@chakra-ui/react";
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
      onContextMenu={onContextMenu}
    >
      <Center flexDirection="column">
        <Image src={icon} width="34px" height="40px" pb="1" />
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
