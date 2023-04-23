import { Center, Heading } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEasterEgg } from "context";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export const NochesDotExe = () => {
  const bg = "/nochesExeBg.png";
  const screenRef = useRef(null);
  const router = useRouter();
  const { setEasterEggStep } = useEasterEgg();
  const goBackHomeAndCloseDoor = () => {
    setEasterEggStep("nochesRestored");
    router.push("/");
  };
  return (
    <ScreenWrapper screenBg={bg}>
      <Center width="full" height="full" onClick={goBackHomeAndCloseDoor}>
        <Center zIndex={7} height="full" width="90%">
          <Center width="60%" paddingTop="100px" height="300px" ref={screenRef}>
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
            <RandomText parentElement={screenRef} />
          </Center>
        </Center>
      </Center>
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
