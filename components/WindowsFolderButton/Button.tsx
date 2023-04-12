// Windows98FolderButton.tsx
import React from "react";
import { Button, ButtonProps, useTheme, Text, Center } from "@chakra-ui/react";

export interface Windows98FolderButtonProps extends ButtonProps {
  label: string;
}

export const Windows98FolderButton: React.FC<Windows98FolderButtonProps> = ({
  label,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Button
      backgroundColor="unset"
      _hover={{ backgroundColor: "unset" }}
      {...props}
    >
      <Center flexDirection="column">
        <img
          src="folder.png"
          // fill={theme.colors.blue[800]}
          width="42px"
          height="42px"
        />
        <Text fontWeight="thin" color="white">
          {label}
        </Text>
      </Center>
    </Button>
  );
};
