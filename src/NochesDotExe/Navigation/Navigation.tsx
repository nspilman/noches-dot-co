import { Box, Button, Stack } from "@chakra-ui/react";

interface Props {
  onClickDontClick: () => void;
  onClickClickHere: () => void;
}

export const Navigation = ({ onClickClickHere, onClickDontClick }: Props) => {
  return (
    <Stack flexDirection="row" position="absolute" top="500px">
      <Box>
        <Button
          px="0"
          my="0.5rem"
          background="unset"
          _hover={{ background: "unset" }}
          onClick={onClickClickHere}
        >
          <Box
            zIndex={4}
            width="120px"
            height="50px"
            backgroundImage="/click-here-button-no-glow.png"
            backgroundPosition={"center"}
            backgroundSize="cover"
            _hover={{ backgroundImage: "/click-here-button-GLOW.png" }}
          />
        </Button>
      </Box>
      <Box>
        <Button
          px="0"
          background="unset"
          _hover={{ background: "unset" }}
          onClick={onClickDontClick}
        >
          <Box
            zIndex={4}
            width="120px"
            height="50px"
            backgroundImage="/dont-click-here-button-no-glow.png"
            backgroundPosition={"center"}
            backgroundSize="cover"
            _hover={{
              backgroundImage: "/dont-click-here-button-GLOW.png",
            }}
          />
        </Button>
      </Box>
    </Stack>
  );
};
