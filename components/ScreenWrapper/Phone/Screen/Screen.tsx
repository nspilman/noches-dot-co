import { Box } from "@chakra-ui/react";

export const Screen = ({
  children,
  screenBg,
}: {
  children: React.ReactElement;
  screenBg: string;
}): React.ReactElement => {
  return (
    <Box
      backgroundImage={screenBg}
      backgroundSize="cover"
      backgroundPosition="center"
      height="full"
      borderRadius={{ base: "none", sm: "75" }}
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      transition="1s"
      width={{ base: "100vw", sm: "unset" }}
      position="relative"
    >
      {children}
    </Box>
  );
};
