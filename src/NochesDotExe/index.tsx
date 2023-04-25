import { Center, Heading, Box, Stack, Text, Button } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEasterEgg } from "context";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export const NochesDotExe = () => {
  const screenRef = useRef(null);
  const router = useRouter();
  const { setEasterEggStep } = useEasterEgg();
  const [showLoading, setShowLoading] = useState(true);
  const goBackHomeAndCloseDoor = () => {
    setEasterEggStep("nochesRestored");
    router.push("/");
  };
  const bg = showLoading ? "nocheverse-flashing-text.gif" : "/nochesExeBg.png";

  setTimeout(() => setShowLoading(false), 3000);

  return (
    <ScreenWrapper screenBg={bg}>
      {showLoading ? (
        <Center width="full" height="full" />
      ) : (
        <Center
          width="full"
          height="full"
          onClick={goBackHomeAndCloseDoor}
          flexDirection="column"
        >
          <Stack
            fontSize="2xs"
            alignItems="center"
            px="4"
            fontFamily="roboto"
            lineHeight={1}
          >
            <Text fontWeight="bold" fontSize="sm">
              Welcome to the{" "}
              <Text color="red.600" as="span">
                NOCHEVERSE
              </Text>
            </Text>
            <Text fontSize="2xs">
              If you are reading this, congratulations! You have stepped into
              the other side. You, my friend, are powerful beyond measure,
              capable of achieving greatness beyond all your wildest dreams
            </Text>
            <Text fontWeight="bold" fontSize="2xs" color="red.600" py="2">
              LET GO OF ALL DOUBT AND SURRENDER YOURSELF
            </Text>
            <Text>
              Embrace the transformation that is taking place within you and
              become the person you were always meant to be. Remember, all
              things must come to an end so we can usher in a new beginning.
              Only when the sun sets, can night begin.
            </Text>
            <Text>
              When you are ready, step int the darkness and venture toward the
              unknown.
            </Text>
            <Box width={"full"}>
              <Text textAlign="left">We believe in you.</Text>
            </Box>
            <Text fontSize="xl" pt="4" fontWeight="bold" color="red.500">
              YOU ARE NOT IN DANGER
            </Text>
          </Stack>
          <Stack flexDirection="row" position="absolute" top="500px">
            <Box>
              <Button
                px="0"
                my="0.5rem"
                background="unset"
                _hover={{ background: "unset" }}
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
        </Center>
      )}
    </ScreenWrapper>
  );
};

function getRandomInterval(floor: number, ceiling: number): number {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const RandomText = ({
  parentElement,
}: {
  parentElement: React.RefObject<HTMLDivElement>;
}) => {
  const [top, setTop] = useState<string>("0px");
  const [left, setLeft] = useState<string>("0px");
  const [color, setColor] = useState<string>("black");

  const randomizePositionAndColor = () => {
    const screenWidth = parentElement.current?.clientWidth || 0;
    const screenHeight = parentElement.current?.clientHeight || 0;
    const randomTop = Math.floor(Math.random() * screenHeight + 200);
    const randomLeft = Math.floor(Math.random() * screenWidth);
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    setTop(`${randomTop}px`);
    setLeft(`${randomLeft}px`);
    setColor(randomColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomizePositionAndColor();
    }, getRandomInterval(500, 1000));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Heading
      position="absolute"
      top={top}
      left={left}
      color={color}
      fontSize="5xl"
      fontWeight="bold"
    >
      Coming Soon
    </Heading>
  );
};

export default RandomText;
