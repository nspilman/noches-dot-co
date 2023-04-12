import { Box, Flex } from "@chakra-ui/react";

export interface Props {
  src: string;
}

export const VideoModal = ({ src }: Props) => {
  return (
    <Flex
      bg="background.secondary"
      height="100vh"
      justifyContent="center"
      position="relative"
    >
      <iframe
        width="1060px"
        height="600px"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Box position={"absolute"} width="100%" height="100%" zIndex="1"></Box>
    </Flex>
  );
};
