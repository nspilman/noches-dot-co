import { Box } from "@chakra-ui/react";

export const Screen = ({
  children,
  screenBg,
}: {
  children: React.ReactElement;
  screenBg?: string;
}): React.ReactElement => {
  const customScrollStyles = {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-webkit-overflow-scrolling": "touch",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
  };

  return (
    <Box
      backgroundImage={screenBg}
      backgroundColor={"black"}
      backgroundSize="cover"
      backgroundPosition="center"
      height="full"
      borderRadius={{ base: "none", sm: "75" }}
      p={{ base: "0", sm: 2 }}
      boxShadow={`0 0 10px 2px rgba(255, 255, 255, 0.01),
    0 0 30px 10px rgba(255, 255, 255, 0.1)`}
      transition="1s"
      width={{ base: "100vw", sm: "unset" }}
      position="relative"
      overflow="scroll"
      sx={customScrollStyles}
    >
      {children}
    </Box>
  );
};
