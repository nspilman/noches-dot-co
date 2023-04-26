import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function getRandomInterval(floor: number, ceiling: number): number {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const RandomText = ({
  parentElement,
  text,
}: {
  parentElement: React.RefObject<HTMLDivElement>;
  text: string;
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
      {text}
    </Heading>
  );
};

export default RandomText;
