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

export interface Props extends ButtonProps {
  label: string;
  icon: string;
}

export const IconButton = ({ label, icon }: Props) => {
  const theme = useTheme();

  return (
    <Button backgroundColor="unset" _hover={{ backgroundColor: "unset" }}>
      <Center flexDirection="column">
        <Image src={icon} width="42px" height="50px" pb="2" />
        <Text
          fontWeight="bold"
          color="white"
          textShadow={"0 0 10px 2px rgba(0, 0, 0, 0.7)"}
        >
          {label}
        </Text>
      </Center>
    </Button>
  );
};
